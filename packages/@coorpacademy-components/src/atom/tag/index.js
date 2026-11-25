import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {keys} from 'lodash/fp';
import Icon from '../icon';
import style from './style.css';

const TAG_STYLES = {
  default: style.defaultStyle,
  success: style.success,
  failure: style.failure,
  warning: style.warning,
  progress: style.progress,
  info: style.info,
  base: style.base,
  advanced: style.advanced,
  coach: style.coach
};

const TAG_SIZE = {
  S: style.small,
  M: style.medium,
  L: style.large
};

const defaultIconProps = {
  position: 'left',
  preset: 's'
};

const renderIcon = iconProps => <Icon {...iconProps} />;

/** @typedef {{label: string, onClick: () => void, disabled?: boolean}} RemoveAction */

const Tag = ({
  label = '',
  detail = '',
  type = 'default',
  size = 'M',
  customStyle = {},
  icon = {},
  removeAction = /** @type {RemoveAction | null} */ (null)
}) => {
  const handleRemove = removeAction?.onClick;
  const {iconName} = icon;
  const {position, ...iconProps} = iconName
    ? {
        ...defaultIconProps,
        ...icon
      }
    : {};

  return (
    <span
      className={classnames(TAG_STYLES[type], TAG_SIZE[size], removeAction && style.removable)}
      data-name={`content-tag-${label}`}
      style={customStyle}
    >
      <div className={style.content}>
        {position === 'left' && iconName && renderIcon(iconProps)}
        <div className={style.label}>{label}</div>
        {detail ? <span className={style.detail}>{detail}</span> : null}
        {position === 'right' && iconName && renderIcon(iconProps)}
        {removeAction ? (
          <button
            type="button"
            className={style.remove}
            aria-label={removeAction.label}
            disabled={removeAction.disabled}
            onClick={handleRemove}
          >
            <span aria-hidden="true">×</span>
          </button>
        ) : null}
      </div>
    </span>
  );
};

Tag.propTypes = {
  label: PropTypes.string,
  detail: PropTypes.string,
  type: PropTypes.oneOf(keys(TAG_STYLES)),
  size: PropTypes.oneOf(['S', 'M', 'L']),
  customStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  removeAction: PropTypes.shape({
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool
  }),
  icon: PropTypes.shape({...Icon.propTypes, position: PropTypes.oneOf(['left', 'right'])})
};

export default Tag;
