import React, {useState, useCallback, useMemo} from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/fp';
import MoocHeader from '../../organism/mooc-header';
import Cta from '../../atom/cta';
import Loader from '../../atom/loader';
import CardsList from '../../molecule/dashboard/cards-list';
import Provider from '../../atom/provider';
import style from './style.css';

const TeamsDashboard = ({logo, platformLinks, sections, isLoading}) => {
  const [isShadowed, setShadowed] = useState(false);
  const onMenuOpen = useCallback(() => setShadowed(true), []);
  const onMenuClose = useCallback(() => setShadowed(false), []);

  const buildSection = useCallback((section, index) => {
    return <CardsList {...section} key={section.title + index} />;
  }, []);

  const sectionsList = useMemo(
    () => map.convert({cap: false})(buildSection, sections),
    [buildSection, sections]
  );
  return isLoading ? (
    <div className={style.loader} data-name="teams-dashboard-loader">
      <Loader />
    </div>
  ) : (
    <div
      data-name="teams-dashboard"
      className={isShadowed ? style.shadowedTeamsDashboard : style.teamsDashboard}
    >
      <MoocHeader
        data-name="teams-dashboard-header"
        logo={logo}
        links={platformLinks}
        onMenuOpen={onMenuOpen}
        onMenuClose={onMenuClose}
      />
      <div data-name="sections-wrapper" className={isShadowed ? style.sectionsWrapper : null}>
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

TeamsDashboard.contextTypes = {
  translate: Provider.childContextTypes.translate,
  skin: Provider.childContextTypes.skin
};

export default TeamsDashboard;
