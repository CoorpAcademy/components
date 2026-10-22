import fs from 'fs';
import path from 'path';
import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent, cleanup} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import readableWords from '../../../test/helpers/readable';
import Card from '../../card';
import AssignmentCard from '..';
import todo from './fixtures/default';
import dueSoon from './fixtures/due-soon';
import overdue from './fixtures/overdue';
import done from './fixtures/done';
import scorm from './fixtures/scorm';
import podcast from './fixtures/podcast';
import article from './fixtures/article';

browserEnv();

// The catalogue card's type chip is a MOOC translation key (`__content_type_video` under
// mockTranslate), not copy from these components: leave the keys out of the absence check, except
// the course key, which a module card must never show (AQ19: its chip says « Module »).
const readable = container =>
  readableWords(container).replace(/__(?!content_type_course)[a-z_]+/g, '');
test.afterEach.always(cleanup);

const mount = props => render(<AssignmentCard {...props} />, {wrapper: wrappingComponent});
const fixtures = {todo, dueSoon, overdue, done, scorm, podcast, article};

test.serial('R2: each due state renders its pill label and style', t => {
  const classes = [todo, dueSoon, overdue, done].map(fixture => {
    const view = mount(fixture.props);
    const pill = view.container.querySelector('[data-name="due-state"]');
    t.is(pill.textContent, fixture.props.dueStateLabel);
    t.is(pill.getAttribute('data-type'), fixture.props.dueState);
    const {className} = pill;
    cleanup();
    return className;
  });
  t.is(new Set(classes).size, 4);
});

test.serial('R2: each pill icon carries its state colour', t => {
  const colours = [todo, dueSoon, overdue, done].map(fixture => {
    const view = mount(fixture.props);
    const svg = view.container.querySelector('[data-name="due-state"] svg');
    const colour = svg.getAttribute('color');
    cleanup();
    return colour;
  });
  t.deepEqual(
    colours.map(c => c.toLowerCase()),
    ['#515161', '#bd7e00', '#b81400', '#05944f']
  );
});

test.serial('R2: the hover tooltip carries the due date label as given', t => {
  Object.values(fixtures).forEach(fixture => {
    const view = mount(fixture.props);
    const tooltip = view.container.querySelector('[data-name="due-date"]');
    // No role="tooltip": a global [role=tooltip] style repaints it white and moves it off the card.
    t.is(tooltip.getAttribute('role'), null);
    // Anchored on the pill's slot, so it always opens right above the pill.
    t.is(
      tooltip.parentElement,
      view.container.querySelector('[data-name="due-state"]').parentElement
    );
    t.is(tooltip.textContent, fixture.props.dueDateLabel);
    cleanup();
  });
});

test.serial('R2: no learner card says "GMT", "assignment" or "course"', t => {
  Object.entries(fixtures).forEach(([name, fixture]) => {
    const words = readable(mount(fixture.props).container);
    t.notRegex(words, /gmt|assignment|course/i, `${name}: ${words}`);
    cleanup();
  });
});

test.serial('R4: an assignments prop is never rendered, and no certification card exists', t => {
  const view = mount({...todo.props, assignments: [{title: 'SENTINEL-ASSIGNMENT'}]});
  t.false(view.container.textContent.includes('SENTINEL-ASSIGNMENT'));
  t.is(AssignmentCard.propTypes.assignments, undefined);
  t.is(AssignmentCard.propTypes.certificationCard, undefined);
  const source = fs.readFileSync(path.join(__dirname, '../index.js'), 'utf8');
  t.false(source.includes('certification-card'));
});

test.serial('R5: every content type renders molecule/card with the pill in the same slot', t => {
  const slots = Object.values(fixtures).map(fixture => {
    const view = mount(fixture.props);
    const card = view.container.querySelector('[data-name="card"]');
    const expected = render(<Card {...fixture.props} />, {wrapper: wrappingComponent});
    t.is(card.outerHTML, expected.container.querySelector('[data-name="card"]').outerHTML);
    expected.unmount();
    const pill = view.container.querySelector('[data-name="due-state"]');
    const slot = `${pill.parentElement.className} > ${pill.tagName}`;
    cleanup();
    return slot;
  });
  t.is(new Set(slots).size, 1);
});

test.serial('a click on the card calls onClick; the pill has no click handler of its own', t => {
  let clicks = 0;
  const view = mount({...todo.props, onClick: () => clicks++});
  fireEvent.click(view.container.querySelector('[data-name="due-state"]'));
  t.is(clicks, 0);
  fireEvent.click(view.container.querySelector('[data-name="card"]'));
  t.is(clicks, 1);
});

test.serial('the pill and its slot let a click through to the card', t => {
  const css = fs.readFileSync(path.join(__dirname, '../style.css'), 'utf8');
  t.regex(css, /\.slot\s*{[^}]*pointer-events:\s*none/);
});

test.serial('the pill is described by the due date, so it is read without hover', t => {
  Object.values(fixtures).forEach(fixture => {
    const view = mount(fixture.props);
    const pill = view.container.querySelector('[data-name="due-state"]');
    const date = view.container.querySelector('[data-name="due-date"]');
    t.truthy(date.id);
    t.notRegex(date.id, /\s/);
    t.is(pill.getAttribute('aria-describedby'), date.id);
    t.is(date.textContent, fixture.props.dueDateLabel);
    t.is(pill.getAttribute('role'), null);
    t.is(date.getAttribute('role'), null);
    cleanup();
  });
});

test.serial('two cards of one module in a list get distinct due-date ids', t => {
  const view = mount({...todo.props, dataName: 'assignments-0'});
  const first = view.container.querySelector('[data-name="due-date"]').id;
  cleanup();
  const other = mount({...todo.props, dataName: 'assignments-1'});
  t.not(other.container.querySelector('[data-name="due-date"]').id, first);
});

const typeChip = container => container.querySelector('[class*="contentTypeInfos"]').textContent;

test.serial("R2: a module card's type chip reads « Module », never « Course » (AQ19)", t => {
  [todo, dueSoon].forEach(fixture => {
    t.is(fixture.props.type, 'course');
    t.is(typeChip(mount(fixture.props).container), 'Module');
    cleanup();
  });
});

test.serial('R2: other content types keep their own type label', t => {
  [
    [scorm, '__content_type_scorm'],
    [podcast, '__content_type_podcast'],
    [article, '__content_type_article'],
    [done, '__content_type_video'],
    [overdue, "5'learning"]
  ].forEach(([fixture, label]) => {
    t.is(typeChip(mount(fixture.props).container), label);
    cleanup();
  });
});
