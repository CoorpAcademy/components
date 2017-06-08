import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../../atom/loader';
import CardsList from '../../../molecule/dashboard/cards-list';
import style from './style.css';

const createHeaderView = header => {
  if (!header) {
    return null;
  }

  const {
    title = '',
    subtitle = '',
    fail = false,
    stars = '',
    rank = '',
    cta = {title: 'Next'}
  } = header;

  return (
    <div className={fail ? style.fail : style.success}>
      <p>header</p>
      <p>{title}</p>
      <span>{subtitle} {stars} {rank}</span>
      <p>{cta.title}</p>
    </div>
  );
};

const PopinEnd = props => {
  const {header, recommendation} = props;

  const headerView = createHeaderView(header);
  const cards = recommendation.cards ? <CardsList {...recommendation} /> : <Loader />;

  return (
    <div className={style.wrapper}>
      {headerView}
      {cards}
    </div>
  );
};

PopinEnd.propTypes = {
  header: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    fail: PropTypes.bool,
    stars: PropTypes.string,
    rank: PropTypes.string,
    cta: PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      href: PropTypes.url
    })
  }),
  recommendation: PropTypes.shape(CardsList.propTypes)
};

export default PopinEnd;
