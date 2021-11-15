import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {NovaSolidStatusCheckCircle2 as CheckIcon} from '@coorpacademy/nova-icons';
import {snakeCase} from 'lodash/fp';
import Link from '../../atom/link';
import style from './style.css';

const LeftIcons = {
  BlueValidatedCircle: CheckIcon
};

const buildTab = (tab, index) => {
  const {title, selected, onClick, leftIcon} = tab;

  const LeftIcon = LeftIcons[leftIcon];
  return (
    <li
      data-name={`vertical_tab_${snakeCase(title)}`}
      className={classnames(style.tab, selected && style.selected)}
      key={index}
      onClick={onClick}
    >
      <span className={style.title}>{title}</span>
      {LeftIcon ? <LeftIcon className={style.leftIcon} /> : null}
    </li>
  );
};

const VerticalTabs = props => {
  const {tabs, className, titleRgaa} = props;
  const tabsList = tabs.map(buildTab);

  return (
    <ul className={classnames([style.wrapper, className])} title={titleRgaa}>
      {tabsList}
    </ul>
  );
};

VerticalTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: Link.propTypes.children,
      selected: PropTypes.bool,
      leftIcon: PropTypes.string,
      onClick: PropTypes.func
    })
  ),
  className: PropTypes.string,
  titleRgaa: PropTypes.string
};
export default VerticalTabs;
