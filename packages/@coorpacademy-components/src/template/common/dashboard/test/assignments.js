import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent, cleanup, within} from '@testing-library/react';
import {wrappingComponent} from '../../../../test/helpers/render-component';
import readableWords from '../../../../test/helpers/readable';
import Dashboard from '..';
import fixture, {cards} from './fixtures/with-assignments';
import empty from './fixtures/empty-assignments';

browserEnv();

// The catalogue card's type chip is a MOOC translation key (`__content_type_course` under
// mockTranslate), not copy from these components: leave the keys out of the absence check.
const readable = container => readableWords(container).replace(/__[a-z_]+/g, '');
test.afterEach.always(cleanup);

const mount = props => render(<Dashboard {...props} />, {wrapper: wrappingComponent});
const testingSizes = {
  offsetWidth: 800,
  scrollLeft: 0,
  maxPages: 1,
  possiblePages: [0, 1],
  possiblePositions: [0, 800]
};

test.serial(
  'R1: the section renders its title, a count tag and the cards in the given order',
  t => {
    const view = mount(fixture.props);
    const list = view.container.querySelector('[data-name="cardsList"]');
    const header = list.querySelector('[data-name="header"]');
    t.truthy(within(header).getByText('Assigned to you'));
    t.truthy(within(header).getByText(String(cards.length)));
    t.deepEqual(
      [...list.querySelectorAll('[data-name="assignment-card"]')].map(
        card => card.querySelector('[data-name="due-state"]').textContent
      ),
      cards.map(card => card.dueStateLabel)
    );
  }
);

test.serial('R1: « See all » shows even when the strip fits, and calls its onClick', t => {
  let clicks = 0;
  const section = {
    ...fixture.props.sections[0],
    seeAll: {label: 'See all', onClick: () => clicks++}
  };
  const view = mount({...fixture.props, sections: [section]});
  fireEvent.click(view.getByRole('button', {name: 'See all'}));
  t.is(clicks, 1);
});

test.serial('R1: when the strip overflows, the arrows show next to « See all »', t => {
  const section = {...fixture.props.sections[0], testingSizes};
  const view = mount({...fixture.props, sections: [section]});
  const header = view.container.querySelector('[data-name="header"]');
  t.truthy(header.querySelector('[data-name="card-list-left-arrow"]'));
  t.truthy(header.querySelector('[data-name="card-list-right-arrow"]'));
  t.is(within(header).getAllByRole('button', {name: 'See all'}).length, 1);
});

test.serial('R1: with no card, the section shows its empty state and a link to the page', t => {
  let clicks = 0;
  const section = empty.props.sections[0];
  const link = {...section.emptyState.link, onClick: () => clicks++};
  const view = mount({
    ...empty.props,
    sections: [{...section, emptyState: {...section.emptyState, link}}]
  });
  t.truthy(view.getByText(section.emptyState.message));
  t.truthy(within(view.container.querySelector('[data-name="header"]')).getByText('0'));
  fireEvent.click(view.getByText(link.label));
  t.is(clicks, 1);
});

test.serial('R2: the section never says "GMT", "assignment" or "course"', t => {
  [fixture, empty].forEach(({props}) => {
    t.notRegex(readable(mount(props).container), /gmt|assignment|course/i);
    cleanup();
  });
});
