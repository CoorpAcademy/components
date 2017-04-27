import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../card';
import style from './style.css';

const CardsList = (props, context) => {
  const {
    title,
    cards
  } = props;

  const cardsView = cards.map((card, key) => {
    return (
      <div className={style.card}
        key={key}
      >
        <Card
          {...card}
        />
      </div>
    );
  });

  return (
    <div
      className={style.wrapper}
      data-name="cards-list"
    >
      <div className={style.list}>
        <div className={style.title}>
          {title}
        </div>
        <div className={style.cards}>
          {cardsView}
        </div>
        <div className={style.left} />
        <div className={style.right} />
      </div>
    </div>
  );
};

CardsList.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.array
};

export default CardsList;
