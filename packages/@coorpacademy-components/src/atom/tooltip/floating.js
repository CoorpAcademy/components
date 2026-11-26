import React, {useLayoutEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import PropTypes from 'prop-types';
import {getFloatingPosition, getFloatingArrowPosition} from './position';

const reference = PropTypes.shape({
  current: PropTypes.shape({
    contains: PropTypes.func,
    getBoundingClientRect: PropTypes.func,
    scrollHeight: PropTypes.number
  })
});

// Mounted only while open, so closed tooltips remain safe to render on the server.
const FloatingPanel = ({
  anchorRef,
  panelRef,
  placement,
  onClose,
  onRestoreFocus,
  arrowClassName,
  children,
  ...props
}) => {
  const [position, setPosition] = useState(null);
  const contentRef = useRef(null);
  useLayoutEffect(() => {
    const panel = panelRef.current;
    const contains = target => anchorRef.current.contains(target) || panel.contains(target);
    const place = () => {
      const anchor = anchorRef.current.getBoundingClientRect();
      const box = panel.getBoundingClientRect();
      const next = getFloatingPosition(
        anchor,
        {width: box.width, height: Math.max(box.height, panel.scrollHeight + 2)},
        {width: window.innerWidth, height: window.innerHeight},
        placement
      );
      setPosition({...next, arrow: getFloatingArrowPosition(anchor, next, box)});
    };
    const dismissOutside = event => {
      if (!contains(event.target)) onClose();
    };
    const dismissOnEscape = event => {
      if (event.key !== 'Escape') return;
      event.stopPropagation();
      if (panel.contains(document.activeElement)) onRestoreFocus();
      onClose();
    };
    const reposition = event => {
      if (!panel.contains(event.target)) place();
    };
    place();
    const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(place);
    observer?.observe(panel);
    observer?.observe(contentRef.current);
    observer?.observe(anchorRef.current);
    window.addEventListener('resize', place);
    document.addEventListener('scroll', reposition, true);
    document.addEventListener('pointerdown', dismissOutside);
    document.addEventListener('keydown', dismissOnEscape, true);
    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', place);
      document.removeEventListener('scroll', reposition, true);
      document.removeEventListener('pointerdown', dismissOutside);
      document.removeEventListener('keydown', dismissOnEscape, true);
    };
  }, [anchorRef, children, onClose, onRestoreFocus, panelRef, placement]);

  return createPortal(
    <>
      <div
        {...props}
        ref={panelRef}
        data-side={position?.side}
        style={
          position
            ? {left: position.left, top: position.top, maxHeight: position.maxHeight}
            : {visibility: 'hidden'}
        }
      >
        <div ref={contentRef}>{children}</div>
      </div>
      {arrowClassName && position ? (
        <span
          aria-hidden="true"
          data-name="tooltip-arrow"
          data-anchor={props.id}
          data-side={position.side}
          className={arrowClassName}
          style={position.arrow}
        />
      ) : null}
    </>,
    document.body
  );
};

FloatingPanel.propTypes = {
  anchorRef: reference.isRequired,
  panelRef: reference.isRequired,
  placement: PropTypes.oneOf(['left', 'right', 'top', 'bottom']).isRequired,
  onClose: PropTypes.func.isRequired,
  onRestoreFocus: PropTypes.func.isRequired,
  arrowClassName: PropTypes.string,
  children: PropTypes.node
};

export default FloatingPanel;
