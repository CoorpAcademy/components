import test from 'ava';
import noop from 'lodash/fp/noop';
import popinEndStateToProps from '../popin-end';
import success from './fixtures/popin-end/success';
import fail from './fixtures/popin-end/fail';

const translate = key => `__${key}`;
const commonOptions = {
  translate
};

const toProps = popinEndStateToProps(commonOptions, {dispatch: noop});

test('should set properties for success popin', t => {
  const props = toProps(success);

  t.is(props.header.lives.count, 0);
  t.is(props.summary.header.title, '');
  t.is(props.summary.header.subtitle, '__Congratulations!');
  t.is(props.summary.header.fail, false);
  t.is(props.summary.header.rank, '+10');

  t.is(props.summary.recommendation.title, '__Related subjects');
  t.is(props.summary.recommendation.cards.length, 3);

  const card = props.summary.recommendation.cards[1];
  t.is(card.view, 'list');

  t.is(props.summary.footer.title, '__Back to dashboard');
  t.is(props.summary.footer.href, '/');
});

test('should set properties for failure popin', t => {
  const props = toProps(fail);
  t.is(props.header.lives.count, 0);
  t.is(props.summary.header.title, '__O O O P S');
  t.is(props.summary.header.subtitle, '__You are missing lives!');
  t.is(props.summary.header.fail, true);

  t.is(props.summary.recommendation.title, '__Related subjects');
  t.is(props.summary.recommendation.cards.length, 3);

  const card = props.summary.recommendation.cards[1];
  t.is(card.view, 'list');

  t.is(props.summary.footer.title, '__Back to dashboard');
  t.is(props.summary.footer.href, '/');
});
