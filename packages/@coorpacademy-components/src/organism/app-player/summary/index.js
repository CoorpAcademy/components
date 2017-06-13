import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../../atom/loader';
import CardsList from '../../../molecule/dashboard/cards-list';
import Header from '../../../molecule/app-player/popin/popin-header';
import style from './style.css';

const PopinEnd = props => {
  const {header, recommendation} = props;
  const headerView = header ? <Header {...header} /> : null;
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
