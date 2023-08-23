import React from 'react';
import PropTypes from 'prop-types';
import Slide from '../../../atom/slide';
import HeroCard from '../../../molecule/hero';
import BattleRequestList from '../../../molecule/dashboard/battle-request-list';
import CardsList from '../../../molecule/dashboard/cards-list';
import NewsList from '../../../molecule/dashboard/news-list';
import StartBattle from '../../../molecule/dashboard/start-battle';
import CMPopin from '../../../molecule/cm-popin';
import ReviewBanner from '../../../molecule/dashboard/review-banner';
import style from './style.css';

const Hero = React.memo(function Hero({hero, welcome}) {
  return <div className={style.hero}>{hero ? <HeroCard {...hero} /> : <Slide {...welcome} />}</div>;
});

Hero.propTypes = {
  hero: PropTypes.shape(HeroCard.propTypes),
  welcome: PropTypes.shape(Slide.propTypes)
};

const Dashboard = props => {
  const {
    sections = [],
    hero,
    welcome,
    cookie,
    popinWithCards,
    'arrows-aria-label': showMoreOnLeftOrRightAriaLabel
  } = props;

  const buildSectionComponent = section => {
    const {type} = section;
    switch (type) {
      case 'hero':
        return <Hero hero={hero} welcome={welcome} />;
      case 'battleRequests':
        return <BattleRequestList {...section} />;
      case 'cards':
        return <CardsList {...section} arrows-aria-label={showMoreOnLeftOrRightAriaLabel} />;
      case 'news':
        return <NewsList {...section} />;
      case 'battle':
        return <StartBattle {...section} />;
      case 'review':
        return <ReviewBanner {...section} />;
      default:
        return null;
    }
  };

  const buildSection = (section, index) => {
    const sectionView = buildSectionComponent(section);

    return <div key={index}>{sectionView}</div>;
  };

  const sectionsList = [{type: 'hero', key: 'hero'}, ...sections].map(section => (
    <div key={section.key}>{buildSection(section)}</div>
  ));
  return (
    <div className={style.wrapper} data-name="dashboard">
      {sectionsList}
      {cookie ? <CMPopin {...cookie} /> : null}
      {popinWithCards ? <CMPopin {...popinWithCards} className={style.popinWithCards} /> : null}
    </div>
  );
};

Dashboard.propTypes = {
  hero: Hero.propTypes.hero,
  welcome: Hero.propTypes.welcome,
  sections: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape(BattleRequestList.propTypes),
      PropTypes.shape(CardsList.propTypes),
      PropTypes.shape(NewsList.propTypes),
      PropTypes.shape(StartBattle.propTypes),
      PropTypes.shape(ReviewBanner.propTypes)
    ])
  ),
  cookie: PropTypes.shape(CMPopin.propTypes),
  'arrows-aria-label': CardsList.propTypes['arrows-aria-label'],
  popinWithCards: PropTypes.shape(CMPopin.propTypes)
};
export default Dashboard;
