import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import unset from 'lodash/fp/unset';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from '../../../card/test/fixtures/default';
import CardsList from '..';

browserEnv();
configure({adapter: new Adapter()});

const mountCardsList = props => {
  const component = <CardsList {...props} />;
  const cards = mount(component);
  return cards;
};

test('should call cardsWidth', t => {
  const card = unset('favorite', Card.props);
  const props = {cards: [card, card, card]};
  const cardsList = mountCardsList(props);
  const width = cardsList.instance().cardsWidth();
  t.is(width, 0);
  cardsList.unmount();
});
