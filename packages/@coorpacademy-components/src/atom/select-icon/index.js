import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FaIcon from '../icon';

// eslint-disable-next-line css-modules/no-unused-class
import style from './style.css';

const ICON_COLOR = '#0061FF';
const CHECK_ICON_NAME_MAP = {
  single: 'circle-check',
  multi: 'square-check'
};
const getButtonContent = (faIcon, selected, selectionMode) => {
  return (
    <div className={style.contentWrapper}>
      {selected ? (
        // checkbox icon
        <div className={style.checkIcon}>
          <FaIcon
            iconName={CHECK_ICON_NAME_MAP[selectionMode]}
            iconColor={ICON_COLOR}
            backgroundColor={'#ffffff'}
            size={{faSize: 16, wrapperSize: 16}}
          />
        </div>
      ) : null}
      {
        // to be selected icon
        <div className={style.iconWrapper}>
          <div className={style.icon}>
            <FaIcon
              iconName={faIcon}
              iconColor={selected ? ICON_COLOR : ''}
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
  const {selectionMode, faIcon, 'data-name': dataName, 'aria-label': ariaLabel, onClick} = props;
  const selected = selectionMode === 'single' || selectionMode === 'multi';
  const contentView = getButtonContent(faIcon, selected, selectionMode);
  const styleButton = classnames(style.default, selected && style.selected);
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
  selectionMode: PropTypes.oneOf(['single', 'multi'])
};

export default SelectIcon;
