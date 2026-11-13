import React from 'react';
import PropTypes from 'prop-types';
import defaults from 'lodash/fp/defaults';
import classNames from 'classnames';
import Icon from '../../atom/icon';
import style from './style.css';

const TONE_STYLES = {
  completed: style.completed,
  inProgress: style.inProgress,
  assigned: style.assigned,
  dueSoon: style.dueSoon,
  overdue: style.overdue
};

const SkillsChartSideInformationItem = ({title, value, legend, icon: iconProps, tone}) => {
  const icon = (
    <Icon
      {...defaults({preset: 's'}, iconProps)}
      iconColor={tone ? 'currentColor' : iconProps?.iconColor}
    />
  );
  return (
    <div className={classNames(style.InformationElement, tone && TONE_STYLES[tone])}>
      <div className={style.titleContainer}>
        {tone ? <span className={style.toneIcon}>{icon}</span> : icon}
        <div
          className={style.title}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: title}}
        />
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
};

SkillsChartSideInformationItem.propTypes = {
  icon: PropTypes.shape(Icon.propTypes),
  tone: PropTypes.oneOf(['completed', 'inProgress', 'assigned', 'dueSoon', 'overdue']),
  title: PropTypes.string,
  value: PropTypes.string,
  legend: PropTypes.string
};

export default SkillsChartSideInformationItem;
