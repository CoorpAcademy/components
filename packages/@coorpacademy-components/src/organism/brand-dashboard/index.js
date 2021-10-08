import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../atom/title';
import QuickAccessCardGroup from '../../molecule/quick-access-cards-group';
import style from './style.css';

const Dashboard = props => {
  const {header, quickAccessCards} = props;
  return (
    <div className={style.wrapper}>
      <div>
        <Title {...header} type={'page'} />
      </div>
      <div className={style.sectionWrapper}>
        <Title title={quickAccessCards.title} type={'form-group'} />
        <div className={style.cardsWrapper}>
          <QuickAccessCardGroup {...quickAccessCards.cards} />
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  header: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string
  }),
  quickAccessCards: PropTypes.shape({
    title: PropTypes.string,
    cards: QuickAccessCardGroup.propTypes
  })
};

export default Dashboard;
