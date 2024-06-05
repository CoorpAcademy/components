import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/fp';
import SkillsChartSideInformationItem from '../skills-chart-side-information-item';
import style from './style.css';

const SkillsChartSideInformationPanel = ({sidePanelItems = []}) => {
  const sidePanel = map(
    sidePanelItemProps => (
      <SkillsChartSideInformationItem
        {...sidePanelItemProps}
        key={`side-panel-item-${sidePanelItemProps.title}`}
      />
    ),
    sidePanelItems
  );
  return (
    <div data-name="skill-chart-side-panel" className={style.sidePanel}>
      {sidePanel}
    </div>
  );
};

SkillsChartSideInformationPanel.propTypes = {
  sidePanelItems: PropTypes.arrayOf(PropTypes.shape(SkillsChartSideInformationItem.propTypes))
};

export default SkillsChartSideInformationPanel;
