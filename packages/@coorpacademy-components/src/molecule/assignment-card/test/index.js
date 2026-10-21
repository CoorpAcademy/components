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

// The catalogue card's type chip is a MOOC translation key (`__content_type_course` under
// mockTranslate), not copy from these components: leave the keys out of the absence check.
const readable = container => readableWords(container).replace(/__[a-z_]+/g, '');
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

test.serial('R5: a click on the card or on its pill calls onClick', t => {
  let clicks = 0;
  const view = mount({...todo.props, onClick: () => clicks++});
  fireEvent.click(view.container.querySelector('[data-name="card"]'));
  fireEvent.click(view.container.querySelector('[data-name="due-state"]'));
  t.is(clicks, 2);
});
