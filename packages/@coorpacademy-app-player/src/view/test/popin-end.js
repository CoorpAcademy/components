import test from 'ava';
import noop from 'lodash/fp/noop';
import set from 'lodash/fp/set';
import popinEndStateToProps from '../popin-end';
import success from './fixtures/popin-end/success';
import fail from './fixtures/popin-end/fail';
import testRendering from './helpers/render';

const translate = key => `__${key}`;
const commonOptions = {
  translate
};

const toProps = popinEndStateToProps(commonOptions, {dispatch: noop});

test('should set properties for success popin', t => {
  const vNode = toProps(success);
  testRendering(vNode);
  const {props} = vNode;

  t.is(props.header.lives.count, 0);
  t.is(props.summary.header.title, '');
  t.is(props.summary.header.subtitle, '__Congratulations!');
  t.is(props.summary.header.fail, false);
  t.is(props.summary.header.stars, '+10');
  t.is(props.summary.header.rank, '+10');

  t.is(props.summary.recommendation.title, '__Related subjects');
  t.is(props.summary.recommendation.cards.length, 3);

  t.is(props.summary.action.type, 'nextCourse');
  t.is(props.summary.action.title, 'Chapter 2');
  t.is(props.summary.action.card.view, 'grid');

  const card = props.summary.recommendation.cards[1];
  t.is(card.view, 'grid');

  t.is(props.summary.footer.title, '__Back to dashboard');
  t.is(props.summary.footer.href, '/');
});

test("should display +0 when user don't get higher score than his best score", t => {
  const vNode = toProps(set(['data', 'chapters', 'entities', '1.B2', 'bestScore'], 20, success));
  testRendering(vNode);
  const {props} = vNode;
  t.is(props.summary.header.stars, '+0');
});

test('should set properties for failure popin', t => {
  const vNode = toProps(fail);
  testRendering(vNode);
  const {props} = vNode;

  t.is(props.header.lives.count, 0);
  t.is(props.summary.header.title, '__O O O P S');
  t.is(props.summary.header.subtitle, '__You are missing lives!');
  t.is(props.summary.header.fail, true);
  t.is(props.summary.header.stars, null);
  t.is(props.summary.header.rank, null);

  t.is(props.summary.recommendation.title, '__Related subjects');
  t.is(props.summary.recommendation.cards.length, 3);

  const card = props.summary.recommendation.cards[1];
  t.is(card.view, 'grid');

  t.is(props.summary.footer.title, '__Back to dashboard');
  t.is(props.summary.footer.href, '/');
});

test('should set properties for failure popin when losing rank', t => {
  const vNode = toProps(set('data.rank.start', 90, fail));
  testRendering(vNode);
  const {props} = vNode;

  t.is(props.header.lives.count, 0);
  t.is(props.summary.header.title, '__O O O P S');
  t.is(props.summary.header.subtitle, '__You are missing lives!');
  t.is(props.summary.header.fail, true);
  t.is(props.summary.header.stars, null);
  t.is(props.summary.header.rank, '-10');

  t.is(props.summary.recommendation.title, '__Related subjects');
  t.is(props.summary.recommendation.cards.length, 3);

  const card = props.summary.recommendation.cards[1];
  t.is(card.view, 'grid');

  t.is(props.summary.footer.title, '__Back to dashboard');
  t.is(props.summary.footer.href, '/');
});
