import test from 'ava';
import browserEnv from 'browser-env';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import {times} from 'lodash/fp';
import {wrappingComponent} from '../../../../test/helpers/render-component';
import Card from '../../../card/test/fixtures/default';
import CardsList from '..';

browserEnv();
configure({adapter: new Adapter()});

const mountCardsList = props => {
  const component = <CardsList {...props} />;
  const cards = mount(component, {wrappingComponent});
  return cards;
};

test('should move cards by pages', t => {
  const {props} = Card;
  const props_ = {
    cards: times(() => props, 11)
  };

  const cardsList = mountCardsList(props_);
  const instance = cardsList.instance();
  instance.cardsWrapper = {offsetWidth: 1088, scrollLeft: 271, removeEventListener: () => {}};
  instance.setState({offsetWidth: 1088});

  t.is(instance.state.maxPages, 2);
  t.is(instance.state.actualPage, 0);

  instance.handleOnLeft();
  t.is(instance.state.maxPages, 2);
  t.is(instance.state.actualPage, 2);

  instance.handleOnRight();
  t.is(instance.state.maxPages, 2);
  t.is(instance.state.actualPage, 0);

  instance.handleOnRight();
  t.is(instance.state.maxPages, 2);
  t.is(instance.state.actualPage, 1);

  instance.handleOnRight();
  t.is(instance.state.maxPages, 2);
  t.is(instance.state.actualPage, 2);

  instance.handleOnRight();
  t.is(instance.state.maxPages, 2);
  t.is(instance.state.actualPage, 0);

  instance.handleOnRight();
  t.is(instance.state.maxPages, 2);
  t.is(instance.state.actualPage, 1);

  instance.handleOnLeft();
  t.is(instance.state.maxPages, 2);
  t.is(instance.state.actualPage, 0);

  instance.handleOnLeft();
  t.is(instance.state.maxPages, 2);
  t.is(instance.state.actualPage, 2);

  instance.handleOnLeft();
  t.is(instance.state.maxPages, 2);
  t.is(instance.state.actualPage, 1);

  cardsList.unmount();
});

test('should return scrollWidth and call onScroll if exist', t => {
  const {props} = Card;
  const props_ = {
    cards: times(() => props, 3)
  };

  const cardsList = mountCardsList(props_);
  const instance = cardsList.instance();
  instance.handleScroll({});

  const scrollData = {skip: 0, limit: 0};
  const onScroll = (skip, limit) => {
    scrollData.skip = skip;
    scrollData.limit = limit;
  };

  const cardsList_ = mountCardsList({...props_, onScroll});
  const instance_ = cardsList_.instance();

  const CARD_WIDTH = 272;

  t.is(instance_.getScrollWidth(0), 272);

  instance_.cardsWrapper = {
    scrollLeft: 0,
    offsetWidth: CARD_WIDTH * 2,
    removeEventListener: () => {}
  };
  instance_.setState({scrollLeft: 0, offsetWidth: CARD_WIDTH * 2});

  instance_.handleScroll();
  t.is(scrollData.skip, 0);
  t.is(scrollData.limit, 2);

  instance_.cardsWrapper = {
    scrollLeft: CARD_WIDTH / 2,
    offsetWidth: CARD_WIDTH * 2,
    removeEventListener: () => {}
  };
  instance_.setState({scrollLeft: CARD_WIDTH / 2});
  instance_.handleScroll();

  t.is(scrollData.skip, 0);
  t.is(scrollData.limit, 3);

  instance_.cardsWrapper = {
    scrollLeft: CARD_WIDTH,
    offsetWidth: CARD_WIDTH * 2,
    removeEventListener: () => {}
  };
  instance_.setState({scrollLeft: CARD_WIDTH});
  instance_.handleScroll();

  t.is(scrollData.skip, 1);
  t.is(scrollData.limit, 2);

  cardsList.unmount();
});

test('should update component when resizing', t => {
  const {props} = Card;
  const props_ = {
    cards: times(() => props, 3)
  };

  const cardsList = mountCardsList(props_);
  const instance = cardsList.instance();
  instance.cardsWrapper = {offsetWidth: 1088, scrollLeft: 272, removeEventListener: () => {}};
  instance.setState({scrollLeft: 1088, offsetWidth: 1088});

  t.is(instance.state.maxPages, 0);

  instance.cardsWrapper = {offsetWidth: 600, scrollLeft: 272, removeEventListener: () => {}};
  instance.setState({offsetWidth: 600, scrollLeft: 272});

  instance.handleResize();

  t.is(instance.state.maxPages, 1);

  cardsList.unmount();
});
