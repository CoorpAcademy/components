import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent, within} from '@testing-library/react';
import {wrappingComponent} from '../../../test/helpers/render-component';
import MyAssignments from '..';
import shared from '../../../molecule/assignment-card/test/fixtures/shared-content';
import fixture from './fixtures/default';

browserEnv();

test('selected tab displays supplied cards and all tab counts', t => {
  const view = render(<MyAssignments {...fixture.props} />, {wrapper: wrappingComponent});
  t.truthy(view.getByText('My assigned learning'));
  t.truthy(within(view.getByRole('tabpanel')).getByText('Safety level'));
  [
    ['To do', '8', 'true'],
    ['In progress', '3', 'false'],
    ['Finished', '0', 'false']
  ].forEach(([label, count, selected]) => {
    const tab = view.getByRole('tab', {name: label});
    t.is(tab.getAttribute('aria-selected'), selected);
    t.truthy(within(tab).getByText(count));
  });
  view.unmount();
});

test('each tab click and Enter invokes only its own callback once', t => {
  const calls: React.SyntheticEvent[][] = [[], [], []];
  const tabs = fixture.props.tabs.map((tab, index) => ({
    ...tab,
    onClick: (event: React.SyntheticEvent) => {
      calls[index].push(event);
    }
  }));
  const view = render(<MyAssignments {...fixture.props} tabs={tabs} />, {
    wrapper: wrappingComponent
  });
  tabs.forEach((tab, index) => {
    const element = view.getByRole('tab', {name: tab.label});
    fireEvent.click(element);
    t.is(calls[index].length, 1);
    t.is(calls[index][0].type, 'click');
    fireEvent.keyDown(element, {key: 'Enter'});
    t.is(calls[index].length, 2);
    t.is(calls[index][1].type, 'keydown');
    t.is(view.getByRole('tab', {name: 'To do'}).getAttribute('aria-selected'), 'true');
  });
  t.deepEqual(
    calls.map(events => events.length),
    [2, 2, 2]
  );
  view.rerender(
    <MyAssignments
      {...fixture.props}
      tabs={tabs.map(tab => ({...tab, selected: tab.key === 'inProgress'}))}
      cards={[{...fixture.props.cards[0], title: 'Replacement content'}]}
    />
  );
  t.is(view.getByRole('tab', {name: 'In progress'}).getAttribute('aria-selected'), 'true');
  t.truthy(view.getByText('Replacement content'));
  t.falsy(view.queryByText('Safety level'));
  t.truthy(within(view.getByRole('tab', {name: 'Finished'})).getByText('0'));
  view.unmount();
});

test('empty selected tab displays its supplied title and message', t => {
  const view = render(<MyAssignments {...fixture.props} />, {wrapper: wrappingComponent});
  view.rerender(
    <MyAssignments
      {...fixture.props}
      tabs={fixture.props.tabs.map(tab => ({...tab, selected: tab.key === 'done'}))}
      cards={[]}
      emptyState={{title: 'No finished contents', message: 'Finished learning appears here'}}
    />
  );
  t.truthy(view.getByText('No finished contents'));
  t.truthy(view.getByText('Finished learning appears here'));
  t.falsy(view.queryByText('Safety level'));
  t.is(view.container.querySelectorAll('[data-name="card"]').length, 0);
  t.truthy(within(view.getByRole('tab', {name: 'Finished'})).getByText('0'));
  view.unmount();
});

test('loading shows loader and busy panel without cards or empty message', t => {
  [[], fixture.props.cards].forEach(cards => {
    const view = render(<MyAssignments {...fixture.props} cards={cards} loading />, {
      wrapper: wrappingComponent
    });
    t.is(view.getByRole('tabpanel').getAttribute('aria-busy'), 'true');
    t.truthy(view.container.querySelector('[data-name="loader"]'));
    t.is(view.getAllByRole('tab').length, 3);
    t.truthy(within(view.getByRole('tab', {name: 'To do'})).getByText('8'));
    t.falsy(view.queryByText('Safety level'));
    t.falsy(view.queryByText('Nothing here'));
    t.falsy(view.queryByText('Choose another tab'));
    view.rerender(<MyAssignments {...fixture.props} cards={cards} loading={false} />);
    t.is(view.getByRole('tabpanel').getAttribute('aria-busy'), 'false');
    t.falsy(view.container.querySelector('[data-name="loader"]'));
    t.truthy(view.getByText(cards.length > 0 ? 'Safety level' : 'Nothing here'));
    view.unmount();
  });
});

test('page forwards the clicked card once and honors its own handler', t => {
  const fallbackCalls: {card: object; event: React.SyntheticEvent}[] = [];
  let ownCalls = 0;
  const original = {...shared.props, dueState: 'overdue', onClick: undefined};
  const own = {
    ...fixture.props.cards[0],
    title: 'Finished content',
    dueState: 'done',
    onClick: () => {
      ownCalls++;
    }
  };
  const view = render(
    <MyAssignments
      {...fixture.props}
      cards={[original, own]}
      onCardClick={(card: object, event: React.SyntheticEvent) => {
        fallbackCalls.push({card, event});
      }}
    />,
    {wrapper: wrappingComponent}
  );
  t.truthy(view.getByText('Safety < essentials & onboarding'));
  t.truthy(
    view.getByText('Leadership & development for distributed teams with a long assignment name')
  );
  t.is(view.container.querySelectorAll('[data-name="card"]').length, 2);
  fireEvent.click(view.getByText('Shared learning level'));
  t.is(fallbackCalls.length, 1);
  t.is(fallbackCalls[0].card, original);
  t.is(fallbackCalls[0].event.type, 'click');
  fireEvent.click(view.getByText('Finished content'));
  t.is(ownCalls, 1);
  t.is(fallbackCalls.length, 1);
  view.rerender(<MyAssignments {...fixture.props} cards={[original]} onCardClick={undefined} />);
  t.notThrows(() => fireEvent.click(view.getByText('Shared learning level')));
  view.unmount();
});

test('omitted page props and a zero-count tab without a handler are safe', t => {
  const view = render(<MyAssignments />, {wrapper: wrappingComponent});
  t.is(view.getByRole('tabpanel').getAttribute('aria-busy'), 'false');
  t.is(view.queryAllByRole('tab').length, 0);
  t.is(view.queryAllByRole('heading').length, 0);
  t.falsy(view.container.querySelector('[data-name="card"]'));
  t.falsy(view.container.querySelector('[data-name="loader"]'));
  view.rerender(
    <MyAssignments
      tabs={[{key: 'done', label: 'No completed learning < & >', count: 0, selected: true}]}
      emptyState={{message: 'Supplied message only'}}
    />
  );
  const tab = view.getByRole('tab', {name: 'No completed learning < & >'});
  t.truthy(within(tab).getByText('0'));
  t.is(tab.getAttribute('aria-selected'), 'true');
  t.truthy(view.getByRole('tabpanel', {name: 'No completed learning < & >'}));
  t.truthy(view.getByText('Supplied message only'));
  t.notThrows(() => fireEvent.click(tab));
  t.notThrows(() => fireEvent.keyDown(tab, {key: 'Enter'}));
  view.unmount();
});

test('frozen mixed-state entries keep caller order and repeated shared content', t => {
  const assignments = shared.props.assignments.map(assignment => Object.freeze({...assignment}));
  Object.freeze(assignments);
  const sharedCard = Object.freeze({
    ...shared.props,
    dueState: 'done',
    notification: Object.freeze({...shared.props.notification}),
    assignments
  });
  const todoCard = Object.freeze({...fixture.props.cards[0]});
  const cards = [sharedCard, todoCard, sharedCard];
  const tabs = fixture.props.tabs.map(tab => Object.freeze({...tab}));
  Object.freeze(cards);
  Object.freeze(tabs);
  const view = render(<MyAssignments cards={cards} tabs={tabs} />, {
    wrapper: wrappingComponent
  });
  const panel = view.getByRole('tabpanel', {name: 'To do'});
  const renderedCards = panel.querySelectorAll('[data-name="card"]');
  t.is(renderedCards.length, 3);
  t.truthy(within(renderedCards[0] as HTMLElement).getByText('Shared learning level'));
  t.truthy(within(renderedCards[1] as HTMLElement).getByText('Safety level'));
  t.truthy(within(renderedCards[2] as HTMLElement).getByText('Shared learning level'));
  t.is(within(panel).getAllByText('Safety < essentials & onboarding').length, 2);
  t.is(
    within(panel).getAllByText(
      'Leadership & development for distributed teams with a long assignment name'
    ).length,
    2
  );
  t.truthy(within(view.getByRole('tab', {name: 'To do'})).getByText('8'));
  t.is(cards[0], sharedCard);
  t.is(cards[1], todoCard);
  t.is(cards[2], sharedCard);
  view.unmount();
});

test('replacement props route a locked card badge to the current page callback', t => {
  const oldCalls: object[] = [];
  const currentCalls: {card: object; event: React.SyntheticEvent}[] = [];
  let favorites = 0;
  const first = {...fixture.props.cards[0], onClick: undefined};
  const replacement = Object.freeze({
    ...shared.props,
    onClick: undefined,
    disabled: true,
    onFavoriteClick: () => {
      favorites++;
    }
  });
  const view = render(
    <MyAssignments
      {...fixture.props}
      cards={[first]}
      onCardClick={(card: object) => oldCalls.push(card)}
    />,
    {wrapper: wrappingComponent}
  );
  fireEvent.click(view.getByText('Safety level'));
  t.deepEqual(oldCalls, [first]);
  view.rerender(
    <MyAssignments
      {...fixture.props}
      tabs={fixture.props.tabs.map(tab => ({...tab, selected: tab.key === 'inProgress'}))}
      cards={[replacement]}
      onCardClick={(card: object, event: React.SyntheticEvent) => currentCalls.push({card, event})}
    />
  );
  t.falsy(view.queryByText('Safety level'));
  const panel = view.getByRole('tabpanel', {name: 'In progress'});
  t.is(panel.querySelector('[data-name="card"]')?.getAttribute('data-lock'), 'true');
  const badge = within(panel).getByText(replacement.notification.message);
  fireEvent.click(badge);
  t.is(currentCalls.length, 1);
  t.is(currentCalls[0].card, replacement);
  t.is(currentCalls[0].event.type, 'click');
  t.is(currentCalls[0].event.target, badge);
  t.is(oldCalls.length, 1);
  fireEvent.click(within(panel).getByTestId('favorite-button'));
  t.is(favorites, 0);
  t.is(currentCalls.length, 1);
  view.rerender(
    <MyAssignments
      {...fixture.props}
      cards={[{...replacement, disabled: false}]}
      onCardClick={(card: object, event: React.SyntheticEvent) => currentCalls.push({card, event})}
    />
  );
  fireEvent.click(view.getByTestId('favorite-button'));
  t.is(favorites, 1);
  t.is(currentCalls.length, 1);
  t.is(oldCalls.length, 1);
  view.unmount();
});
