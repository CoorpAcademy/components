import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import Card from '../../molecule/card';
import Loader from '../../atom/loader';
import style from './style.css';

function CardsGrid(props) {
  const {
    list = [],
    loading = false
  } = props;

  const loader = loading && (
    <div className={style.loader}>
      <Loader />
    </div>
  );

  const cards = map(cardProps => {
    return (
      <Card
        {...cardProps}
      />
    );
  }, list);

  return (
    <div className={style.default}>
      {cards}
      {loader}
    </div>
  );
}

CardsGrid.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape(Card.PropTypes)),
  loading: PropTypes.bool
};

export default CardsGrid;
