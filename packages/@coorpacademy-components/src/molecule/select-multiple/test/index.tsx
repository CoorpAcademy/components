import test from 'ava';
import browserEnv from 'browser-env';
import flatten from 'lodash/fp/flatten';
import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import SelectMultiple, {useChoices} from '..';
import TitledCheckbox from '../../titled-checkbox';
import defaultFixture from './fixtures/checked';

browserEnv();

type SetupReturnType = [() => Record<string, unknown>[], (choice: unknown) => void];

const setup = (options: {name: string; value: string; selected: boolean}[]) => {
  const returnVal: SetupReturnType | unknown[] = [];
  const TestComponent = () => {
    returnVal.push(useChoices(options) as SetupReturnType);
    return null;
  };

  render(<TestComponent />);
  return flatten(returnVal) as SetupReturnType;
};

test('should select array of choices when props.multiple is set', t => {
  t.plan(3);
  const props = {
    ...defaultFixture.props,
    multiple: true,
    onChange: (choices: (typeof TitledCheckbox.propTypes.choice)[]) => {
      t.true(Array.isArray(choices));
      t.pass();
    }
  };

  const {container} = render(<SelectMultiple {...props} />);
  const checkbox = container.querySelector('[data-name="Digital"]') as Element;
  t.truthy(checkbox);
  fireEvent.click(checkbox);
});

test('should return choices (getter)', t => {
  t.plan(1);
  const props = {...defaultFixture.props};
  const [getChoices] = setup(props.options);

  t.is(getChoices().length, 4, 'not returning expected choices');
});

test('should set current choice (setter)', t => {
  t.plan(2);
  const props = {...defaultFixture.props};
  const [getChoices, setChoices] = setup(props.options);
  const choices = getChoices();

  t.is(choices[0].selected, false, 'not setting correctly expected value for choice[0]');

  setChoices({...props.options[0], i: 0});

  t.is(getChoices()[0].selected, true, 'not updating correctly expected value for choice[0]');
});
