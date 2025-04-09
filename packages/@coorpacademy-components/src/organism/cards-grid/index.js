import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/fp';
import Card from '../../molecule/card';
import Loader from '../../atom/loader';
import style from './style.css';

const CardsGrid = props => {
  const {list = [], customStyle = {}, loading = false} = props;

  const loader = loading ? (
    <div className={style.loader}>
      <Loader />
    </div>
  ) : null;

  const cards = map(cardProps => {
    return (
      <div data-name="cardGrid" className={style.card} key={cardProps.key}>
        <Card {...cardProps} />
      </div>
    );
  }, list);

  return (
    <div className={style.defaultStyle} style={customStyle}>
      {cards}
      {loader}
    </div>
  );
};

CardsGrid.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape(Card.propTypes)),
  customStyle: PropTypes.objectOf(PropTypes.string),
  loading: PropTypes.bool
};

export default CardsGrid;
