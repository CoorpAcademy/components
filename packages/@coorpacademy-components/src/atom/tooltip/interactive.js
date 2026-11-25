import React, {useCallback, useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import uniqueId from 'lodash/fp/uniqueId';
import isFunction from 'lodash/fp/isFunction';
import find from 'lodash/fp/find';
import filter from 'lodash/fp/filter';
import {NovaCompositionCoorpacademyInformationIcon as InformationIcon} from '@coorpacademy/nova-icons';
import FloatingPanel from './floating';
import style from './interactive.css';

const FOCUSABLE =
  'a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex="0"]';

const isVisible = element =>
  !element ||
  (getComputedStyle(element).display !== 'none' &&
    getComputedStyle(element).visibility !== 'hidden' &&
    isVisible(element.parentElement));

const isTabbable = element =>
  element.tabIndex >= 0 &&
  !element.matches(':disabled') &&
  !element.closest('[hidden], [inert]') &&
  isVisible(element);

const nextAfterAnchor = (anchor, panel) => {
  const elements = [...document.querySelectorAll(FOCUSABLE)];
  const trigger = anchor.querySelector(FOCUSABLE);
  return find(
    element => !panel.contains(element) && isTabbable(element),
    elements.slice(elements.indexOf(trigger) + 1)
  );
};

const stopClickPropagation = event => event.stopPropagation();

// Rich content receives focus for scrolling. It is a non-modal dialog rather than
// a role=tooltip, which must not contain focusable elements (WAI-ARIA APG).
const InteractiveToolTip = ({
  TooltipContent,
  'aria-label': ariaLabel,
  'data-testid': dataTestId,
  closeToolTipInformationTextAriaLabel: closeLabel,
  iconContainerClassName,
  tooltipClassName,
  AnchorElement,
  iconSize = 'small',
  delayHide = 250,
  placement = 'left'
}) => {
  const [open, setOpen] = useState(false);
  const [id] = useState(() => uniqueId('interactive-tooltip-'));
  const anchorRef = useRef(null);
  const panelRef = useRef(null);
  const timerRef = useRef(null);
  const suppressFocus = useRef(false);

  const clearCloseTimer = useCallback(() => {
    clearTimeout(timerRef.current);
  }, []);
  useEffect(() => clearCloseTimer, [clearCloseTimer]);

  const close = useCallback(() => {
    clearCloseTimer();
    setOpen(false);
  }, [clearCloseTimer]);
  const show = useCallback(() => {
    clearCloseTimer();
    setOpen(true);
  }, [clearCloseTimer]);
  const contains = useCallback(
    target => anchorRef.current?.contains(target) || panelRef.current?.contains(target),
    []
  );
  const leave = useCallback(() => {
    clearCloseTimer();
    timerRef.current = setTimeout(() => {
      if (!contains(document.activeElement)) setOpen(false);
    }, delayHide);
  }, [clearCloseTimer, contains, delayHide]);
  const handleFocus = useCallback(() => {
    if (suppressFocus.current) suppressFocus.current = false;
    else show();
  }, [show]);
  const handleBlur = useCallback(
    event => {
      if (!contains(event.relatedTarget)) close();
    },
    [close, contains]
  );
  const focusAnchor = useCallback(() => {
    suppressFocus.current = true;
    anchorRef.current.querySelector(FOCUSABLE)?.focus({preventScroll: true});
    suppressFocus.current = false;
  }, []);
  const handleClick = useCallback(
    event => {
      event.stopPropagation();
      show();
    },
    [show]
  );
  const handleKeyDown = useCallback(
    event => {
      event.stopPropagation();
      if (event.key !== 'Tab' || !open) return;
      const panel = panelRef.current;
      if (anchorRef.current.contains(event.target)) {
        if (!event.shiftKey) {
          event.preventDefault();
          panel.focus({preventScroll: true});
        }
      } else {
        const items = filter(isTabbable, [...panel.querySelectorAll(FOCUSABLE)]);
        const atStart = event.target === panel || event.target === items[0];
        const atEnd = !items.length || event.target === items[items.length - 1];
        if (event.shiftKey && atStart) {
          event.preventDefault();
          focusAnchor();
        } else if (!event.shiftKey && atEnd) {
          const next = nextAfterAnchor(anchorRef.current, panel);
          if (next) {
            event.preventDefault();
            next.focus();
          } else focusAnchor();
          close();
        }
      }
    },
    [close, focusAnchor, open]
  );

  const triggerProps = {
    'aria-label': ariaLabel,
    'aria-haspopup': 'dialog',
    'aria-expanded': open,
    'aria-controls': open ? id : undefined,
    'data-testid': dataTestId
  };
  const size = iconSize === 'big' ? 20 : 12;
  return (
    <>
      <div
        ref={anchorRef}
        className={style.container}
        onMouseEnter={show}
        onMouseLeave={leave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
      >
        {AnchorElement ? (
          <AnchorElement {...triggerProps} />
        ) : (
          <button
            {...triggerProps}
            type="button"
            className={classnames(style.interactiveTrigger, iconContainerClassName)}
          >
            <InformationIcon className={style.informationIcon} width={size} height={size} />
          </button>
        )}
      </div>
      {open ? (
        <FloatingPanel
          anchorRef={anchorRef}
          panelRef={panelRef}
          placement={placement}
          onClose={close}
          onRestoreFocus={focusAnchor}
          id={id}
          role="dialog"
          aria-modal="false"
          aria-label={ariaLabel || closeLabel}
          aria-describedby={`${id}-instructions`}
          tabIndex={-1}
          className={classnames(style.interactivePanel, tooltipClassName)}
          onMouseEnter={show}
          onMouseLeave={leave}
          onFocus={show}
          onBlur={handleBlur}
          onClick={stopClickPropagation}
          onKeyDown={handleKeyDown}
        >
          <span id={`${id}-instructions`} className={style.instructions}>
            {closeLabel}
          </span>
          {isFunction(TooltipContent) ? <TooltipContent /> : TooltipContent}
        </FloatingPanel>
      ) : null}
    </>
  );
};

InteractiveToolTip.propTypes = {
  TooltipContent: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  'aria-label': PropTypes.string,
  'data-testid': PropTypes.string,
  closeToolTipInformationTextAriaLabel: PropTypes.string.isRequired,
  iconContainerClassName: PropTypes.string,
  tooltipClassName: PropTypes.string,
  AnchorElement: PropTypes.func,
  iconSize: PropTypes.oneOf(['small', 'big']),
  delayHide: PropTypes.number,
  placement: PropTypes.oneOf(['left', 'right', 'top', 'bottom'])
};

export default InteractiveToolTip;
