import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
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

  t.is(instance.state.maxPages, 3);
  t.is(instance.state.actualPage, 1);

  instance.handleOnLeft();
  t.is(instance.state.maxPages, 3);
  t.is(instance.state.actualPage, 3);

  instance.handleOnRight();
  t.is(instance.state.maxPages, 3);
  t.is(instance.state.actualPage, 1);

  instance.handleOnRight();
  t.is(instance.state.maxPages, 3);
  t.is(instance.state.actualPage, 2);

  instance.handleOnRight();
  t.is(instance.state.maxPages, 3);
  t.is(instance.state.actualPage, 3);

  instance.handleOnRight();
  t.is(instance.state.maxPages, 3);
  t.is(instance.state.actualPage, 1);

  instance.handleOnRight();
  t.is(instance.state.maxPages, 3);
  t.is(instance.state.actualPage, 2);

  instance.handleOnLeft();
  t.is(instance.state.maxPages, 3);
  t.is(instance.state.actualPage, 1);

  instance.handleOnLeft();
  t.is(instance.state.maxPages, 3);
  t.is(instance.state.actualPage, 3);

  instance.handleOnLeft();
  t.is(instance.state.maxPages, 3);
  t.is(instance.state.actualPage, 2);

  cardsList.unmount();
});

test('should return scrollWidth and call onScroll if exist', t => {
  const {props} = Card;
  const props_ = {
    cards: times(() => props, 11)
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

  t.is(instance_.getScrollWidth({scrollWidth: 272}), 272);

  instance_.setState({scrollLeft: 0, offsetWidth: 1088});

  instance_.handleScroll({});
  t.is(scrollData.skip, 0);
  t.is(scrollData.limit, 4);

  instance_.setState({scrollLeft: 1088, offsetWidth: 1088});
  instance_.handleScroll({});

  t.is(scrollData.skip, 4);
  t.is(scrollData.limit, 4);

  cardsList.unmount();
});

test('should update componenet when resizing', t => {
  const {props} = Card;
  const props_ = {
    cards: times(() => props, 3)
  };

  const cardsList = mountCardsList(props_);
  const instance = cardsList.instance();
  instance.cardsWrapper = {offsetWidth: 1088, scrollLeft: 272, removeEventListener: () => {}};
  instance.setState({scrollLeft: 1088, offsetWidth: 1088});

  t.is(instance.state.maxPages, 1);

  instance.cardsWrapper = {offsetWidth: 600, scrollLeft: 272, removeEventListener: () => {}};

  instance.handleResize();

  t.is(instance.state.maxPages, 2);

  cardsList.unmount();
});
