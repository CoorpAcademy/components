import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  NovaSolidStatusCheckCircle2 as CheckIcon,
  NovaSolidStatusClose as ErrorIcon
} from '@coorpacademy/nova-icons';
import keys from 'lodash/fp/keys';
import snakeCase from 'lodash/fp/snakeCase';
import Link from '../../atom/link';
import style from './style.css';

const LeftIcons = {
  BlueValidatedCircle: CheckIcon,
  LocaleInError: ErrorIcon
};

const getIconDataName = iconType =>
  iconType === 'LocaleInError' ? 'validated-locale-icon' : 'locale-in-error-icon';

const buildTab = (tab, index) => {
  const {title, selected, onClick, leftIcon, iconAriaLabel} = tab;

  const LeftIcon = LeftIcons[leftIcon];
  return (
    <li
      data-name={`vertical_tab_${snakeCase(title)}`}
      className={classnames(style.tab, selected && style.selected)}
      key={index}
      onClick={onClick}
    >
      <span className={style.title}>{title}</span>
      {LeftIcon ? (
        <LeftIcon
          data-name={getIconDataName(leftIcon)}
          aria-label={iconAriaLabel}
          className={leftIcon === 'LocaleInError' ? style.leftIconError : style.leftIcon}
        />
      ) : null}
    </li>
  );
};

const VerticalTabs = props => {
  const {tabs, className, 'aria-label': ariaLabel} = props;
  const tabsList = tabs.map(buildTab);

  return (
    <ul className={classnames([style.wrapper, className])} title={ariaLabel}>
      {tabsList}
    </ul>
  );
};

const LeftIconValues = [...keys(LeftIcons), ''];

VerticalTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: Link.propTypes.children,
      selected: PropTypes.bool,
      leftIcon: PropTypes.oneOf(LeftIconValues),
      onClick: PropTypes.func,
      iconAriaLabel: PropTypes.string
    })
  ),
  className: PropTypes.string,
  'aria-label': PropTypes.string
};
export default VerticalTabs;
