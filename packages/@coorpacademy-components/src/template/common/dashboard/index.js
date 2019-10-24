import React from 'react';
import PropTypes from 'prop-types';
import Slide from '../../../atom/slide';
import Card from '../../../molecule/card';
import BattleRequestList from '../../../molecule/dashboard/battle-request-list';
import CardsList from '../../../molecule/dashboard/cards-list';
import NewsList from '../../../molecule/dashboard/news-list';
import StartBattle from '../../../molecule/dashboard/start-battle';
import style from './style.css';

const Hero = ({hero, welcome}) => (
  <div className={style.hero}>{hero ? <Card hero {...hero} /> : <Slide {...welcome} />}</div>
);

const Dashboard = props => {
  const {sections = [], hero, welcome} = props;

  const buildSectionComponent = section => {
    const {type} = section;
    switch (type) {
      case 'battleRequests':
        return <BattleRequestList {...section} />;
      case 'cards':
        return <CardsList {...section} />;
      case 'news':
        return <NewsList {...section} />;
      case 'battle':
        return <StartBattle {...section} />;
      default:
        return null;
    }
  };

  const buildSection = (section, index) => {
    const sectionView = buildSectionComponent(section);

    return <div key={index}>{sectionView}</div>;
  };

  const sectionsList = sections.map(buildSection);
  return (
    <div className={style.wrapper} data-name="dashboard">
      <Hero hero={hero} welcome={welcome} />
      {sectionsList}
    </div>
  );
};

Dashboard.propTypes = {
  hero: PropTypes.shape(Card.propTypes),
  welcome: PropTypes.shape(Slide.propTypes),
  sections: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape(BattleRequestList.propTypes),
      PropTypes.shape(CardsList.propTypes),
      PropTypes.shape(NewsList.propTypes),
      PropTypes.shape(StartBattle.propTypes)
    ])
  )
};
export default Dashboard;
