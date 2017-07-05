import 'jsdom-global/register';
import test from 'ava';
import React from 'react';
import {mount} from 'enzyme';
import CardsList from '..';
import Card from '../../../card/test/fixtures/default';

const mountCardsList = props => {
  const component = <CardsList {...props} />;
  const cards = mount(component);
  return cards;
};

test('should call cardsWidth', t => {
  const props = {cards: [Card.props, Card.props, Card.props]};
  const cardsList = mountCardsList(props);
  const width = cardsList.instance().cardsWidth();
  t.is(width, 0);
  cardsList.unmount();
});
