import React from 'react';
import PropTypes from 'prop-types';
import {map, slice} from 'lodash/fp';
import QuickAccessCard from '../quick-access-card';
import Loader from '../../atom/loader';
import style from './style.css';

const QuickAccessCardGroup = props => {
  const {list = [], loading = false} = props;

  const loader = loading ? (
    <div className={style.loader}>
      <Loader />
    </div>
  ) : null;

  const cards = map(cardProps => {
    return (
      <div className={style.card} key={`card-${cardProps.feature}`}>
        <QuickAccessCard {...cardProps} />
      </div>
    );
  }, slice(0, 4, list));

  return (
    <div className={style.default}>
      {cards}
      {loader}
    </div>
  );
};

QuickAccessCardGroup.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape(QuickAccessCard.propTypes)),
  loading: PropTypes.bool
};

export default QuickAccessCardGroup;
