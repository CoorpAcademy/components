import test from 'ava';
import React, {useState} from 'react';
import browserEnv from 'browser-env';
import {cleanup, fireEvent, render} from '@testing-library/react';
import {includes, map, filter} from 'lodash/fp';
import Autocomplete from '..';
import Tag from '../../tag';

browserEnv();
test.afterEach.always(cleanup);

const suggestions = [
  {name: 'Finance', value: 'finance'},
  {name: 'Legal', value: 'legal'}
];

const ControlledValues = () => {
  const [selected, setSelected] = useState([]);
  const [query, setQuery] = useState('');
  return (
    <div>
      <Autocomplete
        id="department-values"
        title="Department"
        aria-label="Department"
        theme="coorpmanager"
        value={query}
        suggestions={filter(option => !includes(option.value, selected), suggestions)}
        showSuggestionsOnFocus
        keepSuggestionsOnSelect
        focusInputOnSuggestionClick
        onInput={event => setQuery(event.target.value)}
        onSuggestionSelected={({suggestion}) => {
          setSelected([...selected, suggestion.value]);
          setQuery('');
        }}
      />
      {map(
        value => (
          <Tag key={value} label={value} type="info" />
        ),
        selected
      )}
      <button type="button">Outside</button>
    </div>
  );
};

test.serial('selects Finance then Legal without requiring blur or an extra focus click', t => {
  const view = render(<ControlledValues />);
  const input = view.getByRole('textbox', {name: 'Department'});
  input.focus();
  fireEvent.focus(input);
  fireEvent.mouseDown(view.getByText('Finance'));
  fireEvent.click(view.getByText('Finance'));
  t.is(document.activeElement, input);
  fireEvent.mouseDown(view.getByText('Legal'));
  fireEvent.click(view.getByText('Legal'));
  t.is(document.activeElement, input);
  t.truthy(view.getByText('finance'));
  t.truthy(view.getByText('legal'));
});

test.serial('typing a future value and blurring does not select or create it', t => {
  const view = render(<ControlledValues />);
  const input = view.getByRole('textbox', {name: 'Department'});
  fireEvent.input(input, {target: {value: 'Future team'}});
  fireEvent.blur(input, {relatedTarget: view.getByRole('button', {name: 'Outside'})});
  t.is(view.container.querySelector('[data-name="content-tag-Future team"]'), null);
});

test.serial('supports consecutive keyboard selections with the same input focused', t => {
  const view = render(<ControlledValues />);
  const input = view.getByRole('textbox', {name: 'Department'});
  input.focus();
  fireEvent.focus(input);
  fireEvent.keyDown(input, {key: 'ArrowDown', keyCode: 40});
  fireEvent.keyDown(input, {key: 'Enter', keyCode: 13});
  fireEvent.keyDown(input, {key: 'ArrowDown', keyCode: 40});
  fireEvent.keyDown(input, {key: 'Enter', keyCode: 13});
  t.truthy(view.getByText('finance'));
  t.truthy(view.getByText('legal'));
  t.is(document.activeElement, input);
});

test.serial('disabled autocomplete does not fetch suggestions on focus', t => {
  let requests = 0;
  const view = render(
    <Autocomplete
      title="Department"
      aria-label="Department"
      value=""
      suggestions={suggestions}
      disabled
      showSuggestionsOnFocus
      onFetch={() => requests++}
    />
  );
  const input = view.getByRole('textbox', {name: 'Department'});
  t.true(input.disabled);
  fireEvent.focus(input);
  t.is(requests, 0);
});

test.serial('Escape and blur close the retained menu without selecting another value', t => {
  const view = render(<ControlledValues />);
  const input = view.getByRole('textbox', {name: 'Department'});
  input.focus();
  fireEvent.focus(input);
  const container = view.getByRole('combobox');
  t.is(container.getAttribute('aria-expanded'), 'true');
  fireEvent.keyDown(input, {key: 'Escape', keyCode: 27});
  t.is(container.getAttribute('aria-expanded'), 'false');
  fireEvent.input(input, {target: {value: 'F'}});
  t.is(container.getAttribute('aria-expanded'), 'true');
  fireEvent.blur(input);
  t.is(container.getAttribute('aria-expanded'), 'false');
  t.is(view.container.querySelector('[data-name^="content-tag-"]'), null);
});

test.serial('the existing default still closes suggestions after an ordinary selection', t => {
  let selected = 0;
  const view = render(
    <Autocomplete
      title="Department"
      value="F"
      suggestions={suggestions}
      onSuggestionSelected={() => selected++}
    />
  );
  const input = view.getByRole('textbox');
  input.focus();
  fireEvent.focus(input);
  fireEvent.mouseDown(view.getByText('Finance'));
  fireEvent.click(view.getByText('Finance'));
  t.is(selected, 1);
  t.is(view.getByRole('combobox').getAttribute('aria-expanded'), 'false');
});

test.serial('disabling an open autocomplete closes it and does not reopen it on re-enable', t => {
  const props = {
    title: 'Department',
    value: '',
    suggestions,
    showSuggestionsOnFocus: true,
    keepSuggestionsOnSelect: true
  };
  const view = render(<Autocomplete {...props} />);
  const input = view.getByRole('textbox');
  input.focus();
  fireEvent.focus(input);
  t.is(view.getByRole('combobox').getAttribute('aria-expanded'), 'true');
  view.rerender(<Autocomplete {...props} disabled />);
  t.is(view.getByRole('combobox').getAttribute('aria-expanded'), 'false');
  view.rerender(<Autocomplete {...props} />);
  t.is(view.getByRole('combobox').getAttribute('aria-expanded'), 'false');
});

test.serial(
  'retaining suggestions sends the controlled query string to onFetch after selection',
  t => {
    const requests = [];
    const view = render(
      <Autocomplete
        title="Department"
        value="Fi"
        suggestions={suggestions}
        keepSuggestionsOnSelect
        focusInputOnSuggestionClick
        onFetch={request => requests.push(request)}
      />
    );
    const input = view.getByRole('textbox');
    input.focus();
    fireEvent.focus(input);
    fireEvent.mouseDown(view.getByText('Finance'));
    fireEvent.click(view.getByText('Finance'));
    const refresh = requests.find(request => request.reason === 'suggestion-selected');
    t.truthy(refresh);
    t.is(refresh.value, 'Fi');
    t.is(input.value, 'Fi');
  }
);
