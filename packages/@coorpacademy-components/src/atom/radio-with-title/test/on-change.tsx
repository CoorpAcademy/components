import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';
import RadioWithTitle from '..';

browserEnv();
test.afterEach(cleanup);

const title = {
  title: 'All completions count',
  subtitle: 'Completions before or after the assignment start date count.',
  type: 'form-group',
  'data-name': 'rule-title',
  subtitleSize: 'extra-small'
};

test.serial('disabled radios ignore input and label clicks and preserve checked', t => {
  [false, true].forEach(checked => {
    const calls: boolean[] = [];
    const {container, getByRole, unmount} = render(
      <RadioWithTitle
        title={title}
        checked={checked}
        disabled
        onChange={value => calls.push(value)}
        aria-label="Completion rule"
      />
    );
    const radio = getByRole('radio') as HTMLInputElement;
    const label = container.querySelector('label') as HTMLLabelElement;
    t.is(label.htmlFor, radio.id);
    fireEvent.click(radio);
    fireEvent.click(label);
    t.deepEqual(calls, []);
    t.true(radio.disabled);
    t.is(radio.checked, checked);
    unmount();
  });
});

test.serial('enabled unchecked radio emits true exactly once', t => {
  [undefined, false].forEach(disabled => {
    const calls: boolean[] = [];
    const {getByRole, unmount} = render(
      <RadioWithTitle
        title={title}
        checked={false}
        disabled={disabled}
        onChange={value => calls.push(value)}
        aria-label="Completion rule"
      />
    );
    const radio = getByRole('radio') as HTMLInputElement;
    t.false(radio.disabled);
    fireEvent.click(radio);
    t.deepEqual(calls, [true]);
    unmount();
  });
});

test.serial('rerendering disabled and enabled uses the latest prop', t => {
  const calls: boolean[] = [];
  const onChange = (value: boolean) => calls.push(value);
  const props = {title, checked: false, onChange, 'aria-label': 'Completion rule'};
  const {getByRole, rerender} = render(<RadioWithTitle {...props} />);
  t.deepEqual(calls, []);
  rerender(<RadioWithTitle {...props} disabled />);
  t.deepEqual(calls, []);
  const disabledRadio = getByRole('radio') as HTMLInputElement;
  t.true(disabledRadio.disabled);
  fireEvent.click(disabledRadio);
  t.deepEqual(calls, []);
  t.false(disabledRadio.checked);
  rerender(<RadioWithTitle {...props} disabled={false} />);
  t.deepEqual(calls, []);
  const enabledRadio = getByRole('radio') as HTMLInputElement;
  t.false(enabledRadio.disabled);
  fireEvent.click(enabledRadio);
  t.deepEqual(calls, [true]);
});

test.serial('replacing onChange while enabled calls only the current callback', t => {
  const originalCalls: boolean[] = [];
  const replacementCalls: boolean[] = [];
  const props = {title, checked: false, 'aria-label': 'Completion rule'};
  const {getByRole, rerender} = render(
    <RadioWithTitle {...props} onChange={value => originalCalls.push(value)} />
  );
  fireEvent.click(getByRole('radio'));
  t.deepEqual(originalCalls, [true]);
  t.false((getByRole('radio') as HTMLInputElement).checked);

  rerender(<RadioWithTitle {...props} onChange={value => replacementCalls.push(value)} />);
  t.deepEqual(replacementCalls, []);
  fireEvent.click(getByRole('radio'));
  t.deepEqual(originalCalls, [true]);
  t.deepEqual(replacementCalls, [true]);
  t.false((getByRole('radio') as HTMLInputElement).checked);
});

test.serial('example activates the option but hint clicks never change it', t => {
  const calls: boolean[] = [];
  const props = {
    title,
    checked: false,
    onChange: (value: boolean) => calls.push(value),
    'aria-label': 'Completion rule',
    example: 'A learner who finished it last year is already done.',
    hint: "The rule can't change once the assignment has started."
  };
  const {container, getByText, getByRole, rerender} = render(<RadioWithTitle {...props} />);
  fireEvent.click(getByText(props.hint));
  t.deepEqual(calls, []);
  fireEvent.click(getByText(props.example));
  t.deepEqual(calls, [true]);
  t.false((getByRole('radio') as HTMLInputElement).checked);

  calls.length = 0;
  rerender(<RadioWithTitle {...props} checked />);
  fireEvent.click(getByRole('radio'));
  fireEvent.click(container.querySelector('label') as HTMLLabelElement);
  fireEvent.click(getByText(props.example));
  fireEvent.click(getByText(props.hint));
  t.deepEqual(calls, []);
  t.true((getByRole('radio') as HTMLInputElement).checked);

  rerender(<RadioWithTitle {...props} disabled />);
  fireEvent.click(getByText(props.example));
  fireEvent.click(getByText(props.hint));
  t.deepEqual(calls, []);
  t.false((getByRole('radio') as HTMLInputElement).checked);
});

test.serial('a controlled rule group starts unselected and locks the parent selection', t => {
  const calls: {rule: string; checked: boolean}[] = [];
  const renderOptions = (selected?: string, disabled = false) => (
    <>
      {['All completions count', 'Only new completions count'].map(rule => (
        <RadioWithTitle
          key={rule}
          title={{...title, title: rule}}
          name="completion-rule"
          checked={selected === rule}
          disabled={disabled}
          aria-label={rule}
          onChange={checked => calls.push({rule, checked})}
        />
      ))}
    </>
  );
  const {container, getByRole, getAllByRole, rerender} = render(renderOptions());
  getAllByRole('radio').forEach(radio => {
    t.false((radio as HTMLInputElement).checked);
    t.is((radio as HTMLInputElement).name, 'completion-rule');
  });
  t.deepEqual(calls, []);
  fireEvent.click(getByRole('radio', {name: 'Only new completions count'}));
  t.deepEqual(calls, [{rule: 'Only new completions count', checked: true}]);
  getAllByRole('radio').forEach(radio => t.false((radio as HTMLInputElement).checked));

  rerender(renderOptions('Only new completions count', true));
  getAllByRole('radio').forEach(radio => {
    t.true((radio as HTMLInputElement).disabled);
    fireEvent.click(radio);
  });
  container.querySelectorAll('label').forEach(label => fireEvent.click(label));
  t.deepEqual(calls, [{rule: 'Only new completions count', checked: true}]);
  t.false((getByRole('radio', {name: 'All completions count'}) as HTMLInputElement).checked);
  t.true((getByRole('radio', {name: 'Only new completions count'}) as HTMLInputElement).checked);
});
