import fs from 'fs';
import path from 'path';
import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent, cleanup, within} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import readableWords from '../../../test/helpers/readable';
import tabsStyle from '../../../molecule/tabs/style.css';
import MyAssignments from '..';
import todo, {sections} from './fixtures/default';
import withoutOverdue from './fixtures/todo-without-overdue';
import finished from './fixtures/finished';
import emptyTodo from './fixtures/empty-todo';
import emptyFinished from './fixtures/empty-finished';
import loading from './fixtures/loading';

browserEnv();

// The catalogue card's type chip is a MOOC translation key (`__content_type_video` under
// mockTranslate), not copy from these components: leave the keys out of the absence check, except
// the course key, which a module card must never show (AQ19: its chip says « Module »).
const readable = container =>
  readableWords(container).replace(/__(?!content_type_course)[a-z_]+/g, '');
test.afterEach.always(cleanup);

const mount = props => render(<MyAssignments {...props} />, {wrapper: wrappingComponent});
const sectionTitles = view =>
  [...view.container.querySelectorAll('[data-name="due-section"]')].map(section =>
    section.getAttribute('data-key')
  );
test.serial('the To do and Finished tabs are as wide as their label', t => {
  const view = mount(todo.props);
  view.getAllByRole('tab').forEach(tab => t.true(tab.classList.contains(tabsStyle.compact)));
});

test.serial('R3: two tabs, To do and Finished, each with its count', t => {
  const view = mount(todo.props);
  const tabs = view.getAllByRole('tab');
  t.deepEqual(
    tabs.map(tab => tab.textContent),
    ['To do6', 'Finished3']
  );
  t.is(view.getByRole('tab', {name: /To do/}).getAttribute('aria-selected'), 'true');
});

test.serial('R3: clicking a tab calls its onClick', t => {
  const calls = [];
  const tabs = todo.props.tabs.map(tab => ({...tab, onClick: () => calls.push(tab.key)}));
  const view = mount({...todo.props, tabs});
  fireEvent.click(view.getByRole('tab', {name: /Finished/}));
  fireEvent.click(view.getByRole('tab', {name: /To do/}));
  t.deepEqual(calls, ['done', 'todo']);
});

test.serial(
  'R3: To do renders Overdue, Due this week and Due after this week, in that order',
  t => {
    const view = mount({...todo.props, sections: [...sections].reverse()});
    t.deepEqual(sectionTitles(view), ['overdue', 'dueThisWeek', 'dueAfterThisWeek']);
    sections.forEach(section => {
      const node = view.container.querySelector(`[data-key="${section.key}"]`);
      t.truthy(within(node).getByRole('heading', {name: section.title}));
      t.truthy(within(node).getByText(section.subtitle));
      t.truthy(within(node).getByText(String(section.cards.length)));
      t.is(node.querySelectorAll('[data-name="assignment-card"]').length, section.cards.length);
    });
  }
);

test.serial('R3: an empty section is not rendered', t => {
  const view = mount(withoutOverdue.props);
  t.deepEqual(sectionTitles(view), ['dueThisWeek', 'dueAfterThisWeek']);
  const emptied = mount({
    ...todo.props,
    sections: sections.map(section =>
      section.key === 'dueThisWeek' ? {...section, cards: []} : section
    )
  });
  t.deepEqual(sectionTitles(emptied), ['overdue', 'dueAfterThisWeek']);
});

test.serial('R3: Finished is a flat grid, in the order given (most recently finished first)', t => {
  const view = mount(finished.props);
  t.is(view.container.querySelector('[data-name="due-section"]'), null);
  const grid = view.container.querySelector('[data-name="finished-grid"]');
  t.deepEqual(
    [...grid.querySelectorAll('[data-name="due-date"]')].map(node => node.textContent),
    finished.props.cards.map(card => card.dueDateLabel)
  );
});

test.serial('R3: an empty tab shows its empty state', t => {
  [emptyTodo, emptyFinished].forEach(({props}) => {
    const view = mount(props);
    t.truthy(view.getByText(props.emptyState.title));
    t.truthy(view.getByText(props.emptyState.message));
    t.is(
      view.getByRole('link', {name: props.emptyState.link.label}).getAttribute('href'),
      '/dashboard'
    );
    t.is(view.container.querySelectorAll('[data-name="assignment-card"]').length, 0);
    cleanup();
  });
});

test.serial('R3: loading shows a loader and no card', t => {
  const view = mount(loading.props);
  t.is(view.getByRole('tabpanel').getAttribute('aria-busy'), 'true');
  t.is(view.container.querySelectorAll('[data-name="assignment-card"]').length, 0);
});

test.serial('R5: clicking a card calls onCardClick with its content', t => {
  const clicked = [];
  const view = mount({...todo.props, onCardClick: card => clicked.push(card)});
  const first = view.container.querySelector('[data-name="assignment-card"] [data-name="card"]');
  fireEvent.click(first);
  t.is(clicked[0], sections[0].cards[0]);
});

test.serial('L5b: one module may show once in To do and once in Finished', t => {
  const inTodo = sections.flatMap(section => section.cards).map(card => card.title);
  const inFinished = finished.props.cards.map(card => card.title);
  t.deepEqual(
    inTodo.filter(title => inFinished.includes(title)),
    ['Cybersecurity reflexes']
  );
});

test.serial(
  'R4: the page never imports the certification card nor says "GMT", "assignment" or "course"',
  t => {
    const source = fs.readFileSync(path.join(__dirname, '../index.js'), 'utf8');
    t.false(source.includes('certification-card'));
    [todo, withoutOverdue, finished, emptyTodo, emptyFinished, loading].forEach(({props}) => {
      t.notRegex(readable(mount(props).container), /gmt|assignment|course/i);
      cleanup();
    });
  }
);
