import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/fp';
import SkillsChartSideInformationItem from '../skills-chart-side-information-item';
import style from './style.css';

const SkillsChartSideInformationPanel = props => {
  const {sidePanelItems = []} = props;
  const sidePanel = map(sidePanelItemProps => {
    return <SkillsChartSideInformationItem {...sidePanelItemProps} />;
  }, sidePanelItems);
  return <div className={style.sidePanel}>{sidePanel}</div>;
};

SkillsChartSideInformationPanel.propTypes = {
  sidePanelItems: PropTypes.arrayOf(SkillsChartSideInformationItem.propTypes)
};

export default SkillsChartSideInformationPanel;
