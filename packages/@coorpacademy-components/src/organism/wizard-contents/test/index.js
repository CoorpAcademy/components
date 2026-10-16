import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import WizardContents from '..';
import {wrappingComponent} from '../../../test/helpers/render-component';
import audience from './fixtures/assignment-audience';
import populations from './fixtures/playlist-populations-create';

browserEnv();
test.afterEach.always(cleanup);

test.serial('wizard renders assignment-audience and forwards its controlled props', t => {
  const calls = [];
  const props = {
    ...audience.props,
    content: {
      ...audience.props.content,
      everyone: {...audience.props.content.everyone, onChange: value => calls.push(value)}
    }
  };
  const view = render(<WizardContents {...props} />, {wrapper: wrappingComponent});
  t.truthy(view.getByText('Create assignment'));
  t.truthy(view.getByText('Everyone in the brand'));
  t.truthy(view.getByText('Estimated audience: 42 learners'));
  t.truthy(view.getByText('valid@example.com'));
  t.truthy(view.getByRole('button', {name: 'Sam Lee'}));
  t.truthy(view.getByTestId('autocomplete-input'));
  t.true(view.container.querySelector('[data-name="populations"] input[type="checkbox"]').checked);
  t.truthy(view.getByText('Audience'));
  t.truthy(view.container.querySelector('[data-name="previous-step-button-footer"]'));
  t.truthy(view.container.querySelector('[data-name="next-step-button-footer"]'));
  const input = view.container.querySelector('[data-name="everyone"] input');
  t.false(input.checked);
  fireEvent.click(input);
  t.deepEqual(calls, [true]);
  t.false(input.checked);
});

test.serial('existing populations wizard preserves its header and navigation', t => {
  const view = render(<WizardContents {...populations.props} />, {wrapper: wrappingComponent});
  t.truthy(view.getByText('Create custom playlist'));
  t.truthy(view.getByText('Assign populations'));
  t.truthy(view.container.querySelector('[data-name="next-step-button-footer"]'));
  t.is(view.container.querySelector('[data-name="assignment-audience"]'), null);
});

test.serial(
  'wizard audience rerenders disable and restore sources while navigation remains usable',
  t => {
    const calls = [];
    const props = {
      ...audience.props,
      previousStep: {...audience.props.previousStep, onClick: () => calls.push('previous')},
      nextStep: {...audience.props.nextStep, onClick: () => calls.push('next')},
      content: {
        ...audience.props.content,
        individuals: {...audience.props.content.individuals, onSearch: query => calls.push(query)}
      }
    };
    const view = render(<WizardContents {...props} />, {wrapper: wrappingComponent});
    const disabledContent = {
      ...props.content,
      everyone: {...props.content.everyone, value: true},
      disabledExplanation: 'All learners are included',
      total: {label: 'Estimated audience: 900 learners'}
    };
    view.rerender(<WizardContents {...props} content={disabledContent} />);
    t.true(view.container.querySelector('fieldset').disabled);
    t.true(view.container.querySelector('[data-name="everyone"] input').checked);
    t.truthy(view.getByText('All learners are included'));
    t.truthy(view.getByText('Estimated audience: 900 learners'));
    t.truthy(view.getByText('valid@example.com'));
    t.truthy(view.getByRole('group', {name: 'Sam Lee'}));
    fireEvent.input(view.getByTestId('autocomplete-input'), {target: {value: 'Blocked'}});
    fireEvent.click(view.container.querySelector('[data-name="previous-step-button-footer"]'));
    fireEvent.click(view.container.querySelector('[data-name="next-step-button-footer"]'));
    t.deepEqual(calls, ['previous', 'next']);

    view.rerender(<WizardContents {...props} />);
    t.false(view.container.querySelector('fieldset').disabled);
    t.is(view.queryByText('All learners are included'), null);
    t.is(view.getByTestId('autocomplete-input').value, 'Alex');
    t.truthy(view.getByRole('button', {name: 'Sam Lee'}));
    t.truthy(view.getByText('Estimated audience: 42 learners'));
    fireEvent.input(view.getByTestId('autocomplete-input'), {target: {value: 'Restored'}});
    t.deepEqual(calls, ['previous', 'next', 'Restored']);
  }
);
