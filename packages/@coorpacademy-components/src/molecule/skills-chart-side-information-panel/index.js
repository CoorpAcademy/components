import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {map} from 'lodash/fp';
import SkillsChartSideInformationItem from '../skills-chart-side-information-item';
import style from './style.css';

const SkillsChartSideInformationPanel = ({sidePanelItems = [], theme}) => {
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
    <div
      data-name="skill-chart-side-panel"
      className={classNames(style.sidePanel, theme === 'coorpmanager' && style.coorpmanager)}
    >
      {sidePanel}
    </div>
  );
};

SkillsChartSideInformationPanel.propTypes = {
  theme: PropTypes.oneOf(['coorpmanager']),
  sidePanelItems: PropTypes.arrayOf(PropTypes.shape(SkillsChartSideInformationItem.propTypes))
};

export default SkillsChartSideInformationPanel;
