import React, {useMemo, useRef, useState, useEffect, useCallback} from 'react';
import {createPortal} from 'react-dom';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/fp/uniqueId';
import Icon from '../../atom/icon';
import style from './cell-warning.css';

const CellWarning = ({message}) => {
  const id = useMemo(() => uniqueId('table-warning-'), []);
  const trigger = useRef(null);
  const timer = useRef(null);
  const [position, setPosition] = useState(null);
  const cancelHide = useCallback(() => clearTimeout(timer.current), []);
  const close = useCallback(() => {
    cancelHide();
    setPosition(null);
  }, [cancelHide]);
  const show = useCallback(() => {
    cancelHide();
    const rect = trigger.current.getBoundingClientRect();
    const width = Math.min(340, window.innerWidth - 16);
    setPosition({
      width,
      left: Math.max(
        8,
        Math.min(rect.left + rect.width / 2 - width / 2, window.innerWidth - width - 8)
      ),
      top: rect.top - 8
    });
  }, [cancelHide]);
  const hide = useCallback(() => {
    if (document.activeElement !== trigger.current) timer.current = setTimeout(close, 150);
  }, [close]);
  const keyDown = useCallback(
    event => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        close();
      }
    },
    [close]
  );
  useEffect(() => cancelHide, [cancelHide]);
  return (
    <>
      <button
        ref={trigger}
        type="button"
        className={style.cellWarning}
        aria-label={message}
        aria-describedby={position ? id : undefined}
        data-testid="table-cell-warning"
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={close}
        onClick={show}
        onKeyDown={keyDown}
      >
        <Icon
          iconName="triangle-exclamation"
          iconColor="#B7791F"
          size={{faSize: 16, wrapperSize: 20}}
        />
      </button>
      {position &&
        createPortal(
          <div
            id={id}
            role="tooltip"
            className={style.cellWarningTooltip}
            style={position}
            onMouseEnter={cancelHide}
            onMouseLeave={hide}
          >
            {message}
          </div>,
          document.body
        )}
    </>
  );
};
CellWarning.propTypes = {message: PropTypes.string.isRequired};
export default CellWarning;
