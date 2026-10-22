import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent, cleanup, within} from '@testing-library/react';
import {wrappingComponent} from '../../../../test/helpers/render-component';
import readableWords from '../../../../test/helpers/readable';
import Dashboard from '..';
import fixture, {cards} from './fixtures/with-assignments';

browserEnv();

// The catalogue card's type chip is a MOOC translation key (`__content_type_video` under
// mockTranslate), not copy from these components: leave the keys out of the absence check, except
// the course key, which a module card must never show (AQ19: its chip says « Module »).
const readable = container =>
  readableWords(container).replace(/__(?!content_type_course)[a-z_]+/g, '');
test.afterEach.always(cleanup);

const mount = props => render(<Dashboard {...props} />, {wrapper: wrappingComponent});
const testingSizes = {
  offsetWidth: 800,
  scrollLeft: 0,
  maxPages: 1,
  possiblePages: [0, 1],
  possiblePositions: [0, 800]
};

test.serial('the section renders its title, a count tag and the cards in the given order', t => {
  const view = mount(fixture.props);
  const list = view.container.querySelector('[data-name="cardsList"]');
  const header = list.querySelector('[data-name="header"]');
  t.truthy(within(header).getByText('Assigned to you'));
  t.truthy(within(header).getByText(String(fixture.props.sections[0].count)));
  t.deepEqual(
    [...list.querySelectorAll('[data-name="assignment-card"]')].map(
      card => card.querySelector('[data-name="due-state"]').textContent
    ),
    cards.map(card => card.dueStateLabel)
  );
});

test.serial('the count tag shows the given count, not the number of cards loaded', t => {
  const section = {...fixture.props.sections[0], count: 42, cards: cards.slice(0, 2)};
  const view = mount({...fixture.props, sections: [section]});
  const header = view.container.querySelector('[data-name="header"]');
  t.truthy(within(header).getByText('42'));
  t.is(within(header).queryByText('2'), null);
});

test.serial('« See all » shows even when the strip fits, and calls onShowMore', t => {
  let clicks = 0;
  const section = {...fixture.props.sections[0], onShowMore: () => clicks++};
  const view = mount({...fixture.props, sections: [section]});
  const header = view.container.querySelector('[data-name="header"]');
  t.is(header.querySelector('[data-name="card-list-right-arrow"]'), null);
  fireEvent.click(within(header).getByText('See all'));
  t.is(clicks, 1);
});

test.serial('when the strip overflows, the arrows show next to « See all »', t => {
  const section = {...fixture.props.sections[0], testingSizes};
  const view = mount({...fixture.props, sections: [section]});
  const header = view.container.querySelector('[data-name="header"]');
  t.truthy(header.querySelector('[data-name="card-list-left-arrow"]'));
  t.truthy(header.querySelector('[data-name="card-list-right-arrow"]'));
  t.is(within(header).getAllByText('See all').length, 1);
});

test.serial('the section has no empty state of its own: the MOOC never sends it empty', t => {
  const section = {...fixture.props.sections[0], count: 0, cards: []};
  const view = mount({...fixture.props, sections: [section]});
  t.is(view.container.querySelectorAll('[data-name="assignment-card"]').length, 0);
  t.is(view.container.querySelector('[data-name="assignments-section"]'), null);
  t.notRegex(readable(view.container), /caught up|finished modules/i);
});

test.serial('every card of the strip describes its pill with a distinct due-date id', t => {
  const view = mount(fixture.props);
  const ids = [...view.container.querySelectorAll('[data-name="due-state"]')].map(pill =>
    pill.getAttribute('aria-describedby')
  );
  t.is(ids.length, cards.length);
  t.is(new Set(ids).size, ids.length);
  ids.forEach(id => t.truthy(view.container.ownerDocument.getElementById(id)));
});

test.serial('R2: the section never says "GMT", "assignment" or "course"', t => {
  t.notRegex(readable(mount(fixture.props).container), /gmt|assignment|course/i);
});
