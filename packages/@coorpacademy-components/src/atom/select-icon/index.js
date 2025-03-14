import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FaIcon from '../icon';

import {COLORS} from '../../variables/colors';
import style from './style.css';

const ICON_COLOR = COLORS.cm_primary_blue;
const BACKGROUND_COLOR = COLORS.white;
const CHECK_ICON_NAME_MAP = {
  single: 'circle-check',
  multi: 'square-check'
};

const getButtonContent = (faIcon, options = {}) => {
  const {selectionMode = 'single', isSelected = false, iconColor = ICON_COLOR} = options;

  return (
    <div className={style.contentWrapper}>
      {isSelected ? (
        /* checkbox icon */
        <div className={style.checkIcon}>
          <FaIcon
            iconName={CHECK_ICON_NAME_MAP[selectionMode]}
            iconColor={iconColor}
            backgroundColor={BACKGROUND_COLOR}
            size={{faSize: 16, wrapperSize: 16}}
          />
        </div>
      ) : null}
      {
        /* selection tick (L18) / icon */
        <div className={style.iconWrapper}>
          <div className={style.icon}>
            <FaIcon
              iconName={faIcon}
              iconColor={isSelected ? iconColor : ''}
              size={{faSize: 32, wrapperSize: 32}}
            />
          </div>
          <div className={style.iconText}>{faIcon}</div>
        </div>
      }
    </div>
  );
};

const SelectIcon = props => {
  const {faIcon, 'data-name': dataName, 'aria-label': ariaLabel, onClick, options = {}} = props;

  const {isSelected = false} = options;

  const contentView = getButtonContent(faIcon, options);
  const styleButton = classnames(style.defaultStyle, isSelected && style.selected);
  const handleOnClick = useCallback(() => onClick(), [onClick]);

  const IconButton = useCallback(
    () => (
      <button
        type="button"
        aria-label={ariaLabel}
        data-name={dataName}
        data-testid={`button-${dataName}`}
        className={styleButton}
        onClick={handleOnClick}
      >
        {contentView}
      </button>
    ),
    [ariaLabel, contentView, dataName, handleOnClick, styleButton]
  );

  return <IconButton />;
};

SelectIcon.propTypes = {
  'aria-label': PropTypes.string,
  'data-name': PropTypes.string,
  faIcon: PropTypes.string,
  onClick: PropTypes.func,
  options: PropTypes.shape({
    selectionMode: PropTypes.oneOf(['single', 'multi']),
    isSelected: PropTypes.bool,
    iconColor: PropTypes.string
  })
};

export default SelectIcon;
