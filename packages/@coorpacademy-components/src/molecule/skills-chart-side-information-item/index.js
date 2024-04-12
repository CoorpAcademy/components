import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../atom/icon';
import style from './style.css';

const SkillsChartSideInformationItem = ({title, value, legend, icon: iconProps}) => (
  <div className={style.InformationElement}>
    <div className={style.titleContainer}>
      <Icon {...iconProps} />
      <div className={style.title}>{title}</div>
    </div>
    <div className={style.value}>{value}</div>
    <div className={style.legend}>
      <span className={style.legendLight}>{legend.prefix}</span>{' '}
      <span className={style.legendBold}>{legend.main}</span>
    </div>
  </div>
);

SkillsChartSideInformationItem.propTypes = {
  icon: Icon.propTypes,
  title: PropTypes.string,
  value: PropTypes.string,
  legend: PropTypes.shape({
    prefix: PropTypes.string,
    main: PropTypes.string
  })
};

export default SkillsChartSideInformationItem;
