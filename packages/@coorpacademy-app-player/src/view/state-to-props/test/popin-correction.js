import test from 'ava';
import identity from 'lodash/fp/identity';
import isFunction from 'lodash/fp/isFunction';
import {UI_TOGGLE_ACCORDION} from '../../../actions/ui/corrections';
import isArray from 'lodash/fp/isArray';
import noop from 'lodash/fp/noop';
import set from 'lodash/fp/set';
import createMapStateToProps from '../popin-correction';
import statePopinKO from './fixtures/popin-correction/popinKO';
import statePopinOK from './fixtures/popin-correction/popinOK';

const translate = key => `__${key}`;
const commonOptions = {
  translate
};

const mapStateToProps = createMapStateToProps(commonOptions, {dispatch: identity});

test('should set properties for success popin', t => {
  const props = mapStateToProps(statePopinOK);

  t.is(props.header.lives, 1);
  t.false(props.header.fail);
  t.is(props.header.title, '__Good job');
  t.is(props.header.subtitle, '__Good answer');
  t.is(props.question.answer, '__Correct answer {{answer}}');
  t.false(props.resources.open);
  t.false(props.klf.open);
  t.true(props.tips.open);

  const resetHandler = props.header.cta.onClick;
  t.true(isFunction(resetHandler));
  const actionReset = resetHandler();
  t.true(isFunction(actionReset));

  const toggleAccordionHandler = props.onClick;
  t.true(isFunction(toggleAccordionHandler));
  const actionToggleAccordion = toggleAccordionHandler(0);
  t.deepEqual(actionToggleAccordion, {
    type: UI_TOGGLE_ACCORDION,
    payload: {id: 0}
  });
});

test('should set properties to open resource tab if wrong answer and no resource viewed', t => {
  const props = mapStateToProps(statePopinKO);

  t.is(props.header.lives, 0);
  t.true(props.header.fail);
  t.is(props.header.title, '__Ouch');
  t.is(props.header.subtitle, '__Wrong answer');
  t.is(props.question.answer, '__Correct answer {{answer}}');
  t.true(props.resources.open);
  t.false(props.klf.open);
  t.false(props.tips.open);

  const resources = props.resources.value;

  t.true(isArray(resources));
  t.is(resources.length, 2);
  t.true(resources[0].selected);
  t.false(resources[1].selected);
});

test('should set properties when selecting second resource', t => {
  const props = mapStateToProps(
    set('ui.corrections.playResource', '590b862e2e967f64333ad4fc', statePopinKO)
  );

  t.is(props.header.lives, 0);
  t.true(props.header.fail);
  t.is(props.header.title, '__Ouch');
  t.is(props.header.subtitle, '__Wrong answer');
  t.is(props.question.answer, '__Correct answer {{answer}}');
  t.true(props.resources.open);
  t.false(props.klf.open);
  t.false(props.tips.open);

  const resources = props.resources.value;

  t.true(isArray(resources));
  t.is(resources.length, 2);
  t.false(resources[0].selected);
  t.true(resources[1].selected);
});
