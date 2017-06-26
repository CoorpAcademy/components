import test from 'ava';
import noop from 'lodash/fp/noop';
import set from 'lodash/fp/set';
import createMapStateToProps from '../popin-correction';
import statePopinKO from './fixtures/popin-correction/popinKO';
import statePopinOK from './fixtures/popin-correction/popinOK';

const translate = key => `__${key}`;
const commonOptions = {
  translate
};

const mapStateToProps = createMapStateToProps(commonOptions, {dispatch: noop});

test('should set properties for failure popin ', t => {
  const props = mapStateToProps(statePopinKO);

  t.is(props.header.lives, 0);
  t.true(props.header.fail);
  t.is(props.header.title, '__Ouch');
  t.is(props.header.subtitle, '__Wrong answer');
  t.is(props.question.answer, '__Correct answer {{answer}}');
  t.false(props.resources.open);
  t.false(props.klf.open);
  t.false(props.tips.open);
});

test('should set properties for success popin', t => {
  const props = mapStateToProps(statePopinOK);

  t.is(props.header.lives, 1);
  t.false(props.header.fail);
  t.is(props.header.title, '__Good job');
  t.is(props.header.subtitle, '__Good answer');
  t.is(props.question.answer, '__Correct answer {{answer}}');
  t.false(props.resources.open);
  t.false(props.klf.open);
  t.false(props.tips.open);
});

test('should set properties for open tabs in accordion on correction popin', t => {
  const stateOpenAccordion = set('ui.corrections.accordion', [true, false, true], statePopinOK);

  const props = mapStateToProps(stateOpenAccordion);

  t.is(props.header.lives, 1);
  t.false(props.header.fail);
  t.is(props.header.title, '__Good job');
  t.is(props.header.subtitle, '__Good answer');
  t.is(props.question.answer, '__Correct answer {{answer}}');
  t.true(props.resources.open);
  t.false(props.klf.open);
  t.true(props.tips.open);
});
