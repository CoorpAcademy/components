import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import InputDate from '..';
import sharedStyle from '../../input-text/style.css';

browserEnv();
test.afterEach(cleanup);

test.serial('renders a native date with value, bounds, title, name and GMT suffix', t => {
  const {container, getByLabelText, getByText} = render(
    <InputDate
      title="Start date"
      name="assignmentStart"
      value="2026-11-03"
      min="2026-11-01"
      max="2026-12-31"
      suffix="GMT"
    />
  );
  const input = getByLabelText('Start date');
  t.is(input.type, 'date');
  t.is(input.value, '2026-11-03');
  t.is(input.getAttribute('min'), '2026-11-01');
  t.is(input.getAttribute('max'), '2026-12-31');
  t.is(input.name, 'assignmentStart');
  t.truthy(getByText('GMT'));
  t.is(container.querySelector('label').textContent, 'Start date');
});

test.serial('emits the ISO value once on input', t => {
  const calls = [];
  const onChange = value => calls.push(value);
  const {container, rerender} = render(<InputDate value="" onChange={onChange} />);
  fireEvent.input(container.querySelector('input'), {target: {value: '2026-11-03'}});
  t.deepEqual(calls, ['2026-11-03']);
  rerender(<InputDate value={calls[0]} onChange={onChange} />);
  t.is(container.querySelector('input').value, '2026-11-03');
  t.deepEqual(calls, ['2026-11-03']);
});

test.serial('emits an empty string when cleared', t => {
  const calls = [];
  const onChange = value => calls.push(value);
  const {container, rerender} = render(<InputDate value="2026-11-03" onChange={onChange} />);
  fireEvent.input(container.querySelector('input'), {target: {value: ''}});
  t.deepEqual(calls, ['']);
  rerender(<InputDate value={calls[0]} onChange={onChange} />);
  t.is(container.querySelector('input').value, '');
});

test.serial('shows hint without error', t => {
  ['default', 'coorpmanager'].forEach(theme => {
    const {container, getByLabelText, getByText, unmount} = render(
      <InputDate theme={theme} title="Start date" hint="Use <b>GMT</b> dates" />
    );
    const hint = getByText('Use <b>GMT</b> dates');
    t.truthy(getByLabelText('Start date'));
    t.is(hint.closest('label'), null);
    t.is(container.querySelector('b'), null);
    unmount();
  });
});

test.serial('error overrides hint and modified state', t => {
  ['default', 'coorpmanager'].forEach(theme => {
    const {container, getByText, queryByText, unmount} = render(
      <InputDate theme={theme} error="End must follow start" hint="Help" modified />
    );
    t.truthy(getByText('End must follow start'));
    t.is(queryByText('Help'), null);
    sharedStyle.error.split(' ').forEach(token => {
      t.true(container.firstChild.classList.contains(token));
    });
    const modifiedToken = sharedStyle.modified.split(' ')[0];
    t.false(container.firstChild.classList.contains(modifiedToken));
    unmount();
  });
});

test.serial('forwards disabled and required and supports an empty optional value', t => {
  const {container, rerender} = render(<InputDate disabled required />);
  const input = container.querySelector('input');
  t.true(input.disabled);
  t.true(input.required);
  t.is(input.value, '');
  t.false(input.hasAttribute('min'));
  t.false(input.hasAttribute('max'));
  rerender(<InputDate theme="coorpmanager" title="Start date" />);
  t.false(input.disabled);
  t.false(input.required);
  t.is(input.value, '');
  t.false(container.querySelector('span').classList.contains(sharedStyle.noValue));
});

test.serial('keeps native range validation and emits out-of-range ISO dates', t => {
  const calls = [];
  const props = {min: '2026-11-03', max: '2026-11-05', onChange: value => calls.push(value)};
  const {container, rerender} = render(<InputDate {...props} value="2026-11-03" />);
  const input = container.querySelector('input');
  t.true(input.validity.valid);
  rerender(<InputDate {...props} value="2026-11-05" />);
  t.true(input.validity.valid);

  fireEvent.input(input, {target: {value: '2026-11-02'}});
  rerender(<InputDate {...props} value="2026-11-02" />);
  t.is(input.value, '2026-11-02');
  t.true(input.validity.rangeUnderflow);
  fireEvent.input(input, {target: {value: '2026-11-06'}});
  rerender(<InputDate {...props} value="2026-11-06" />);
  t.true(input.validity.rangeOverflow);
  t.deepEqual(calls, ['2026-11-02', '2026-11-06']);
});

test.serial('accepts leap days and emits empty strings for invalid calendar input', t => {
  const calls = [];
  const onChange = value => calls.push(value);
  const {container, rerender} = render(<InputDate value="" onChange={onChange} />);
  const input = container.querySelector('input');
  fireEvent.input(input, {target: {value: '2028-02-29'}});
  t.deepEqual(calls, ['2028-02-29']);
  rerender(<InputDate value="2028-02-29" onChange={onChange} />);
  t.is(input.value, '2028-02-29');

  ['2026-02-29', '2026-11-31', '2026-13-01', '11/03/2026', '2026-11-03T00:00:00Z'].forEach(
    value => {
      fireEvent.input(input, {target: {value}});
    }
  );
  t.deepEqual(calls, ['2028-02-29', '', '', '', '', '']);
});

test.serial('updates and removes controlled date constraints without calling onChange', t => {
  const calls = [];
  const onChange = value => calls.push(value);
  const {getByLabelText, rerender} = render(
    <InputDate title="Start date" value="2026-11-03" required onChange={onChange} />
  );
  const input = getByLabelText('Start date');
  t.true(input.validity.valid);
  rerender(
    <InputDate
      title="Start date"
      value="2026-11-03"
      min="2026-11-04"
      max="2026-11-05"
      required
      onChange={onChange}
    />
  );
  t.true(input.validity.rangeUnderflow);
  rerender(<InputDate title="Start date" value="" required onChange={onChange} />);
  t.is(input.value, '');
  t.false(input.hasAttribute('min'));
  t.false(input.hasAttribute('max'));
  t.true(input.validity.valueMissing);
  rerender(<InputDate title="Start date" onChange={onChange} />);
  t.false(input.required);
  t.true(input.validity.valid);
  t.deepEqual(calls, []);
});

test.serial('uses the latest callback and tolerates its removal', t => {
  const firstCalls = [];
  const nextCalls = [];
  const {container, rerender} = render(
    <InputDate value="" onChange={value => firstCalls.push(value)} />
  );
  const input = container.querySelector('input');
  fireEvent.input(input, {target: {value: '2026-11-03'}});
  rerender(<InputDate value="2026-11-03" onChange={value => nextCalls.push(value)} />);
  fireEvent.input(input, {target: {value: '2026-11-04'}});
  rerender(<InputDate value="2026-11-04" />);
  t.notThrows(() => fireEvent.input(input, {target: {value: ''}}));
  t.deepEqual(firstCalls, ['2026-11-03']);
  t.deepEqual(nextCalls, ['2026-11-04']);
});

['default', 'setup', 'cockpit', 'coorpmanager'].forEach(theme => {
  test.serial(`recovers from an error in the ${theme} theme`, t => {
    const props = {theme, title: 'End date', hint: 'Use GMT', modified: true};
    const {container, getByLabelText, getByText, queryByText, rerender} = render(
      <InputDate {...props} error="End <b>before</b> start" disabled />
    );
    t.truthy(getByText('End <b>before</b> start'));
    t.is(container.querySelector('b'), null);
    t.is(queryByText('Use GMT'), null);
    t.true(getByLabelText('End date').disabled);
    t.true(container.firstChild.classList.contains(sharedStyle.disabled.split(' ')[0]));

    rerender(<InputDate {...props} error="" />);
    t.truthy(getByText('Use GMT'));
    t.is(queryByText('End <b>before</b> start'), null);
    t.false(getByLabelText('End date').disabled);
    t.false(container.firstChild.classList.contains(sharedStyle.disabled.split(' ')[0]));
    t.false(container.firstChild.classList.contains(sharedStyle.error.split(' ')[0]));
    t.true(container.firstChild.classList.contains(sharedStyle.modified.split(' ')[0]));

    rerender(<InputDate theme={theme} title="End date" />);
    t.is(queryByText('Use GMT'), null);
    t.false(container.firstChild.classList.contains(sharedStyle.modified.split(' ')[0]));
  });
});
