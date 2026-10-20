import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import {shallow, configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import BrandFormGroup from '..';
import InputDate from '../../../atom/input-date';

browserEnv();
configure({adapter: new Adapter()});
test.afterEach(cleanup);

test.serial('renders InputDate and forwards the date field', t => {
  const field = {
    type: 'date',
    title: 'Start date',
    name: 'assignmentStart',
    value: '2026-11-03',
    min: '2026-11-01',
    max: '2026-12-31',
    suffix: 'GMT',
    hint: 'Choose a date',
    error: 'Invalid date',
    disabled: true,
    required: true,
    modified: true,
    theme: 'coorpmanager',
    size: 'medium',
    onChange: () => {}
  };
  const wrapper = shallow(<BrandFormGroup title="Dates" fields={[field]} />);
  t.is(wrapper.find(InputDate).length, 1);
  t.deepEqual(wrapper.find(InputDate).props(), field);
});

test.serial('date field emits ISO through BrandFormGroup', t => {
  const calls = [];
  const {getByLabelText} = render(
    <BrandFormGroup
      title="Dates"
      fields={[
        {
          type: 'date',
          title: 'Start date',
          theme: 'coorpmanager',
          value: '',
          min: '2026-11-01',
          suffix: 'GMT',
          onChange: value => calls.push(value)
        }
      ]}
    />
  );
  const input = getByLabelText('Start date');
  t.is(input.type, 'date');
  t.is(input.min, '2026-11-01');
  t.false(input.hasAttribute('theme'));
  t.false(input.hasAttribute('suffix'));
  fireEvent.input(input, {target: {value: '2026-11-03'}});
  t.deepEqual(calls, ['2026-11-03']);
});

test.serial('text password and fallback fields retain their input types', t => {
  const {container} = render(
    <BrandFormGroup
      title="Other fields"
      fields={[
        {type: 'text', title: 'Name', value: ''},
        {type: 'password', title: 'Password', value: ''},
        {type: 'unknown', title: 'Fallback', value: ''}
      ]}
    />
  );
  t.deepEqual(
    [...container.querySelectorAll('input')].map(input => input.type),
    ['text', 'password', 'text']
  );
});

test.serial('keeps start and end dates independent when bounds and errors change', t => {
  const startCalls = [];
  const endCalls = [];
  const start = {
    type: 'date',
    title: 'Start date',
    name: 'start',
    value: '2026-11-03',
    min: '2026-11-01',
    onChange: value => startCalls.push(value)
  };
  const end = {
    type: 'date',
    title: 'End date',
    name: 'end',
    value: '2026-11-05',
    min: '2026-11-03',
    theme: 'coorpmanager',
    hint: 'Choose an end date',
    suffix: 'GMT',
    onChange: value => endCalls.push(value)
  };
  const {getByLabelText, getByText, queryByText, rerender} = render(
    <BrandFormGroup title="Dates" fields={[start, end]} />
  );
  fireEvent.input(getByLabelText('Start date'), {target: {value: '2026-11-06'}});
  t.deepEqual(startCalls, ['2026-11-06']);
  t.deepEqual(endCalls, []);
  rerender(
    <BrandFormGroup
      title="Dates"
      fields={[
        {...start, value: '2026-11-06'},
        {...end, min: '2026-11-06', error: 'End must follow start'}
      ]}
    />
  );
  t.is(getByLabelText('Start date').value, '2026-11-06');
  t.is(getByLabelText('End date').value, '2026-11-05');
  t.is(getByLabelText('End date').min, '2026-11-06');
  t.true(getByLabelText('End date').validity.rangeUnderflow);
  t.truthy(getByText('End must follow start'));
  t.is(queryByText('Choose an end date'), null);

  fireEvent.input(getByLabelText('End date'), {target: {value: ''}});
  t.deepEqual(startCalls, ['2026-11-06']);
  t.deepEqual(endCalls, ['']);
  rerender(
    <BrandFormGroup
      title="Dates"
      fields={[
        {...start, value: '2026-11-06'},
        {...end, value: '', min: '2026-11-06'}
      ]}
    />
  );
  t.is(getByLabelText('End date').value, '');
  t.is(queryByText('End must follow start'), null);
  t.truthy(getByText('Choose an end date'));
});

test.serial('submits ISO values by name without leaking field metadata', t => {
  const {container, getByLabelText} = render(
    <form>
      <BrandFormGroup
        title="Dates"
        fields={[
          {
            type: 'date',
            title: 'Start date',
            name: 'assignmentStart',
            value: '2026-11-03',
            theme: 'coorpmanager',
            size: 'medium',
            hint: 'Choose a date',
            suffix: 'GMT',
            modified: true,
            required: true
          },
          {
            type: 'date',
            title: 'End date',
            name: 'assignmentEnd',
            value: '2026-11-05',
            disabled: true
          }
        ]}
      />
    </form>
  );
  const input = getByLabelText('Start date');
  t.true(input.required);
  t.true(getByLabelText('End date').disabled);
  ['theme', 'size', 'hint', 'suffix', 'modified'].forEach(attribute => {
    t.false(input.hasAttribute(attribute));
  });
  const FormData = container.ownerDocument.defaultView.FormData;
  t.deepEqual(
    [...new FormData(container.querySelector('form')).entries()],
    [['assignmentStart', '2026-11-03']]
  );
});
