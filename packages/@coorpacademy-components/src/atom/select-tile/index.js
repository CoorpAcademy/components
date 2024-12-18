import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FaIcon from '../icon';

// eslint-disable-next-line css-modules/no-unused-class
import style from './style.css';

const iconColor = '#0061FF';
const getButtonContent = (faIcon, selectionMode) => {
  const selected = selectionMode === 'single' || selectionMode === 'multi';
  const checkIconNameMap = {
    single: 'circle-check',
    multi: 'square-check'
  };
  return (
    <div className={style.contentWrapper}>
      {selected ? (
        <div className={style.checkIcon}>
          <FaIcon
            iconName={checkIconNameMap[selectionMode]}
            iconColor={iconColor}
            backgroundColor={'#ffffff'}
            size={{faSize: 16, wrapperSize: 16}}
          />
        </div>
      ) : null}
      <div className={style.iconWrapper}>
        <div className={style.icon}>
          <FaIcon
            iconName={faIcon}
            iconColor={selected ? iconColor : ''}
            size={{faSize: 32, wrapperSize: 32}}
          />
        </div>
        <div className={style.iconText}>{faIcon}</div>
      </div>
    </div>
  );
};

const SelectTile = props => {
  const {selectionMode, faIcon, 'data-name': dataName, 'aria-label': ariaLabel, onClick} = props;

  const contentView = getButtonContent(faIcon, selectionMode);
  const styleButton = classnames(
    style.default,
    (selectionMode === 'single' || selectionMode === 'multi') && style.selected
  );
  const handleOnClick = useCallback(() => onClick(), [onClick]);

  const Button = useCallback(
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

  return <Button />;
};

SelectTile.propTypes = {
  'aria-label': PropTypes.string,
  'data-name': PropTypes.string,
  faIcon: PropTypes.string,
  onClick: PropTypes.func,
  selectionMode: PropTypes.oneOf(['single', 'multi'])
};

export default SelectTile;
