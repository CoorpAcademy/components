import React from 'react';
import PropTypes from 'prop-types';
import BattleRequestList from '../../../molecule/dashboard/battle-request-list';
import CardsList from '../../../molecule/dashboard/cards-list';
import NewsList from '../../../molecule/dashboard/news-list';
import StartBattle from '../../../molecule/dashboard/start-battle';
import style from './style.css';

const BrandFormGroup = props => {
  const {sections = []} = props;

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

    return (
      <div key={index} className={style.section}>
        {sectionView}
      </div>
    );
  };

  const sectionsList = sections.map(buildSection);

  return (
    <div className={style.wrapper} data-name="dashboard">
      {sectionsList}
    </div>
  );
};

BrandFormGroup.propTypes = {
  sections: PropTypes.array
};
export default BrandFormGroup;
