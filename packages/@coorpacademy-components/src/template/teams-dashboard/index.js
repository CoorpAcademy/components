import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/fp';
import MoocHeader from '../../organism/mooc-header';
import Cta from '../../atom/cta';
import Loader from '../../atom/loader';
import CardsList from '../../molecule/dashboard/cards-list';
import style from './style.css';

const TeamsDashboard = ({logo, platformLinks, sections, isLoading}) => {
  const [isShadowed, setShadowed] = useState(false);
  const onMenuOpen = function () {
    setShadowed(true);
  };
  const onMenuClose = () => {
    setShadowed(false);
  };
  const buildSection = (section, index) => {
    return <CardsList {...section} key={section.title + index} />;
  };
  const sectionsList = map(buildSection, sections);
  return isLoading ? (
    <div className={style.loader}>
      <Loader data-name="teams-dashboard-loader" />
    </div>
  ) : (
    <div data-name="teams-dashboard" className={style.teamsDashboard}>
      <MoocHeader
        data-name="teams-dashboard-header"
        logo={logo}
        links={platformLinks}
        // eslint-disable-next-line react/jsx-no-bind
        onMenuOpen={onMenuOpen}
        // eslint-disable-next-line react/jsx-no-bind
        onMenuClose={onMenuClose}
      />
      <div data-name="sectionsWrapper" className={isShadowed ? style.sectionsWrapper : null}>
        {sectionsList}
      </div>
    </div>
  );
};

TeamsDashboard.propTypes = {
  logo: MoocHeader.propTypes.logo,
  platformLinks: PropTypes.arrayOf(PropTypes.shape(Cta.propTypes)),
  sections: PropTypes.arrayOf(PropTypes.shape(CardsList.propTypes)),
  isLoading: PropTypes.bool
};

export default TeamsDashboard;
