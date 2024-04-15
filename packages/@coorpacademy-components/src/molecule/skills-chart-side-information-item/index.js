import React from 'react';
import PropTypes from 'prop-types';
import defaults from 'lodash/fp/defaults';
import Icon from '../../atom/icon';
import style from './style.css';

const SkillsChartSideInformationItem = ({title, value, legend, icon: iconProps}) => (
  <div className={style.InformationElement}>
    <div className={style.titleContainer}>
      <Icon {...defaults({preset: 's'}, iconProps)} />
      <div className={style.title}>{title}</div>
    </div>
    <div className={style.value}>{value}</div>
    <div className={style.legend}>
      <span
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: legend}}
      />
    </div>
  </div>
);

SkillsChartSideInformationItem.propTypes = {
  icon: PropTypes.shape(Icon.propTypes),
  title: PropTypes.string,
  value: PropTypes.string,
  legend: PropTypes.string
};

export default SkillsChartSideInformationItem;
