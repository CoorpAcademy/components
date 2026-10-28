import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, cleanup} from '@testing-library/react';
import RadioWithTitle from '..';

browserEnv();
test.afterEach(cleanup);

const props = {
  title: {
    title: 'All completions count',
    subtitle: 'Completions before or after the assignment start date count.',
    type: 'form-group',
    'data-name': 'rule-title',
    subtitleSize: 'extra-small'
  },
  checked: false,
  onChange: (value: boolean) => value,
  'aria-label': 'Completion rule'
};

test.serial('renders example and hint as plain text after the subtitle', t => {
  const example = 'Example: <b>Last year counts.</b>';
  const hint = 'Hint: <b>The rule is locked.</b>';
  const {container, getByText, getByRole} = render(
    <RadioWithTitle {...props} example={example} hint={hint} disabled />
  );
  t.truthy(getByText(props.title.title));
  t.truthy(getByText(props.title.subtitle));
  const exampleText = getByText(example);
  const hintText = getByText(hint);
  t.is(container.textContent, props.title.title + props.title.subtitle + example + hint);
  t.is(exampleText.closest('label'), container.querySelector('label'));
  t.is(hintText.closest('label'), null);
  t.is(container.querySelector('b'), null);
  const radio = getByRole('radio');
  t.is(hintText.id, `${radio.id}-hint`);
  t.is(radio.getAttribute('aria-describedby'), hintText.id);
});

test.serial('example and hint render independently', t => {
  const example = 'A learner who finished it last year is already done.';
  const hint = "The rule can't change once the assignment has started.";
  const {container, getByText, queryByText, getByRole, rerender} = render(
    <RadioWithTitle {...props} example={example} />
  );
  t.truthy(getByText(example));
  t.is(queryByText(hint), null);
  t.false(getByRole('radio').hasAttribute('aria-describedby'));
  rerender(<RadioWithTitle {...props} hint={hint} />);
  t.is(queryByText(example), null);
  const hintText = getByText(hint);
  const radio = getByRole('radio') as HTMLInputElement;
  t.false(radio.disabled);
  t.is(radio.getAttribute('aria-describedby'), hintText.id);
  t.is(hintText.closest('label'), null);
  t.is(container.textContent, props.title.title + props.title.subtitle + hint);
});

test.serial('omitted and empty helper strings leave no helper content', t => {
  const example = 'A learner who finished it last year is already done.';
  const hint = "The rule can't change once the assignment has started.";
  const {container, queryByText, getByRole, rerender} = render(
    <RadioWithTitle {...props} example={example} hint={hint} />
  );
  t.truthy(queryByText(example));
  t.truthy(queryByText(hint));
  rerender(<RadioWithTitle {...props} />);
  t.is(queryByText(example), null);
  t.is(queryByText(hint), null);
  t.is(container.textContent, props.title.title + props.title.subtitle);
  t.false(getByRole('radio').hasAttribute('aria-describedby'));
  rerender(<RadioWithTitle {...props} example="" hint="" />);
  t.is(queryByText(example), null);
  t.is(queryByText(hint), null);
  t.is(container.textContent, props.title.title + props.title.subtitle);
  t.false(getByRole('radio').hasAttribute('aria-describedby'));
});

test.serial('options with identical hints keep separate descriptions after rerendering', t => {
  const hint = "The rule can't change once the assignment has started.";
  const renderOptions = (firstHint: string, secondHint: string) => (
    <>
      <RadioWithTitle {...props} name="rule" aria-label="All completions" hint={firstHint} />
      <RadioWithTitle
        {...props}
        name="rule"
        aria-label="New completions"
        hint={secondHint}
        disabled
        checked
      />
    </>
  );
  const {getByRole, getAllByText, queryByText, rerender} = render(renderOptions(hint, hint));
  const descriptionFor = (name: string, text: string) => {
    const radio = getByRole('radio', {name});
    const descriptionId = radio.getAttribute('aria-describedby');
    t.truthy(descriptionId);
    const description = document.getElementById(descriptionId || '');
    t.truthy(description);
    t.is(description && description.textContent, text);
    t.is(description && description.closest('label'), null);
    return descriptionId;
  };
  t.is(getAllByText(hint).length, 2);
  t.not(descriptionFor('All completions', hint), descriptionFor('New completions', hint));
  t.not(
    getByRole('radio', {name: 'All completions'}).id,
    getByRole('radio', {name: 'New completions'}).id
  );

  rerender(
    renderOptions('Past completions are included.', 'Only future completions are included.')
  );
  t.is(queryByText(hint), null);
  t.not(
    descriptionFor('All completions', 'Past completions are included.'),
    descriptionFor('New completions', 'Only future completions are included.')
  );

  rerender(renderOptions('', 'Only future completions are included.'));
  t.false(getByRole('radio', {name: 'All completions'}).hasAttribute('aria-describedby'));
  t.is(queryByText('Past completions are included.'), null);
  descriptionFor('New completions', 'Only future completions are included.');
});
