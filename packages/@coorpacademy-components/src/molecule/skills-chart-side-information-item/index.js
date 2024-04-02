import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../atom/icon';
import style from './style.css';

const SkillsChartSideInformationItem = props => {
  const {title, value, legend, icon: iconProps} = props;

  return (
    <div className={style.InformationElement}>
      <div className={style.content}>
        <div className={style.titleContainer}>
          <Icon {...iconProps} />
          <div className={style.title}>{title}</div>
        </div>
        <div className={style.value}>{value}</div>
        <div className={style.legend}>
          <span className={style.legendLight}>on </span>
          <span className={style.legendBold}>{legend}</span>
        </div>
      </div>
    </div>
  );
};

SkillsChartSideInformationItem.propTypes = {
  icon: Icon.propTypes,
  title: PropTypes.string,
  value: PropTypes.number,
  legend: PropTypes.string
};

export default SkillsChartSideInformationItem;
