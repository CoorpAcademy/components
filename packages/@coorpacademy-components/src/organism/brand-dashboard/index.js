import React from 'react';
import PropTypes from 'prop-types';
import Title from '../../atom/title';
import QuickAccessCardGroup from '../../molecule/quick-access-cards-group';
import CoorpmanagerBaseBanner from '../../molecule/coorpmanager-base-banner';
import style from './style.css';

const Dashboard = props => {
  const {header, quickAccessCards, banner} = props;
  return (
    <div>
      <div>
        <Title {...header} type={'page'} />
      </div>
      {banner ? <CoorpmanagerBaseBanner {...banner} /> : null}
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
    cards: PropTypes.shape(QuickAccessCardGroup.propTypes)
  }),
  banner: PropTypes.shape(CoorpmanagerBaseBanner.propTypes)
};

export default Dashboard;
