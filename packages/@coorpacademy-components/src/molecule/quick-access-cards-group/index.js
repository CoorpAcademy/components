import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/fp';
import QuickAccessCard from '../quick-access-card';
import Loader from '../../atom/loader';
import style from './style.css';

const QuickAccessCardGrid = props => {
  const {list = [], loading = false} = props;

  const loader = loading ? (
    <div className={style.loader}>
      <Loader />
    </div>
  ) : null;

  const cards = map(cardProps => {
    return (
      <div className={style.card}>
        <QuickAccessCard {...cardProps} />
      </div>
    );
  }, list);

  return (
    <div className={style.default}>
      {cards}
      {loader}
    </div>
  );
};

QuickAccessCardGrid.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape(QuickAccessCard.propTypes)),
  loading: PropTypes.bool
};

export default QuickAccessCardGrid;
