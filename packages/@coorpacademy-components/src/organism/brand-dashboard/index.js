import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../atom/title';
import QuickAccessCardGroup from '../../molecule/quick-access-cards-group';
import style from './style.css';

const Dashboard = props => {
  const {header, quickAccessCards} = props;
  console.log('header', quickAccessCards);
  return (
    <div>
      <div>
        <Title {...header} type={'page'} />
      </div>
      <div>
        <Title title={quickAccessCards.title} type={'form-group'} />
        <QuickAccessCardGroup {...quickAccessCards.cards} />
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  header: {
    title: PropTypes.string,
    subtitle: PropTypes.string
  },
  quickAccessCards: {
    title: PropTypes.string,
    cards: QuickAccessCardGroup.propTypes
  }
};

export default Dashboard;
