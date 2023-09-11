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
