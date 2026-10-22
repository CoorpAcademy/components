import test, {ExecutionContext} from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {noop, times} from 'lodash/fp';
import {wrappingComponent} from '../../../../test/helpers/render-component';
import Card from '../../../card/test/fixtures/default';
import ChapterCard from '../../../card/test/fixtures/eligible-for-favorite-no-aria-label';
import CardsList from '..';
import {CardsListProps} from '../prop-types';

browserEnv();

const mountCardsList = (props: Partial<CardsListProps>, testingSizes: unknown) => {
  const component = <CardsList {...props} testingSizes={testingSizes} />;
  const cards = render(component, {
    wrapper: wrappingComponent
  });
  return cards;
};

const checkInternalProp: <T>(
  container: HTMLElement,
  prop: string,
  propValue: T,
  t: ExecutionContext<unknown>
) => void = (container, prop, propValue, t) => {
  const element = container.querySelector(`[data-${prop}="${propValue}"]`) as Element;
  return t.truthy(element);
};

// Disclaimer: should be updated once the component is refactored to a functional component,
// future functions for the useCallbacks should be unit tested, then scrolling and other
// dom behavior should be e2e tested
test('should show handles', t => {
  const {props} = Card;
  const props_ = {
    cards: times(() => props, 11),
    showMore: 'More',
    onShowMore: noop
  };
  props_.cards[10] = ChapterCard.props;
  const testingSizes = {
    offsetWidth: 1088,
    scrollLeft: 271,
    maxPages: 2,
    possiblePositions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    possiblePages: [0, 1, 2]
  };
  const {container, unmount} = mountCardsList(props_, testingSizes);

  checkInternalProp(container, 'max-pages', 2, t);
  checkInternalProp(container, 'actual-page', 0, t);

  const leftHandle = container.querySelector('[data-name="card-list-left-arrow"]') as Element;
  const rightHandle = container.querySelector('[data-name="card-list-right-arrow"]') as Element;

  fireEvent.click(leftHandle);
  checkInternalProp(container, 'max-pages', 2, t);
  checkInternalProp(container, 'actual-page', 2, t);

  fireEvent.click(rightHandle);
  checkInternalProp(container, 'max-pages', 2, t);
  checkInternalProp(container, 'actual-page', 0, t);

  fireEvent.click(rightHandle);
  checkInternalProp(container, 'max-pages', 2, t);
  checkInternalProp(container, 'actual-page', 1, t);

  fireEvent.click(rightHandle);
  checkInternalProp(container, 'max-pages', 2, t);
  checkInternalProp(container, 'actual-page', 2, t);

  fireEvent.click(rightHandle);
  checkInternalProp(container, 'max-pages', 2, t);
  checkInternalProp(container, 'actual-page', 0, t);

  fireEvent.click(rightHandle);
  checkInternalProp(container, 'max-pages', 2, t);
  checkInternalProp(container, 'actual-page', 1, t);

  fireEvent.click(leftHandle);
  checkInternalProp(container, 'max-pages', 2, t);
  checkInternalProp(container, 'actual-page', 0, t);

  fireEvent.click(leftHandle);
  checkInternalProp(container, 'max-pages', 2, t);
  checkInternalProp(container, 'actual-page', 2, t);

  fireEvent.click(leftHandle);
  checkInternalProp(container, 'max-pages', 2, t);
  checkInternalProp(container, 'actual-page', 1, t);

  unmount();
});

const showMoreProps = (onShowMore: () => void) => ({
  cards: times(() => Card.props, 2),
  showMore: 'See all',
  onShowMore
});

test('with no page, the show-more link is absent by default', t => {
  const {container, queryByText, unmount} = mountCardsList(showMoreProps(noop), undefined);
  checkInternalProp(container, 'max-pages', 0, t);
  t.is(queryByText('See all'), null);
  unmount();
});

test('alwaysShowMore renders the show-more link with no page, and it calls onShowMore', t => {
  let clicks = 0;
  const {container, getAllByText, unmount} = mountCardsList(
    {...showMoreProps(() => clicks++), alwaysShowMore: true},
    undefined
  );
  checkInternalProp(container, 'max-pages', 0, t);
  t.is(container.querySelector('[data-name="card-list-right-arrow"]'), null);
  const links = getAllByText('See all');
  t.is(links.length, 1);
  fireEvent.click(links[0]);
  t.is(clicks, 1);
  unmount();
});

test('alwaysShowMore keeps a single show-more link when the list has pages', t => {
  const testingSizes = {
    offsetWidth: 300,
    scrollLeft: 0,
    maxPages: 1,
    possiblePositions: [0, 272],
    possiblePages: [0, 1]
  };
  const {container, getAllByText, unmount} = mountCardsList(
    {...showMoreProps(noop), alwaysShowMore: true},
    testingSizes
  );
  t.truthy(container.querySelector('[data-name="card-list-right-arrow"]'));
  t.is(getAllByText('See all').length, 1);
  unmount();
});
