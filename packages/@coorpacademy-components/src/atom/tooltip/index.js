import React, {isValidElement, useState, useCallback, useMemo} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import isString from 'lodash/fp/isString';
import {NovaCompositionCoorpacademyInformationIcon as InformationIcon} from '@coorpacademy/nova-icons';
import style from './style.css';

const FontSizes = {
  12: style.tooltipContentFontSize12,
  14: style.tooltipContentFontSize14
};

const ToolTipWrapper = ({
  toolTipIsVisible,
  anchorId,
  closeToolTipInformationTextAriaLabel,
  content,
  handleContentMouseOver
}) => {
  if (!toolTipIsVisible) return null;
  if (anchorId) {
    return (
      <ReactTooltip
        id={anchorId}
        className={style.toolTipReact}
        data-event-off="click"
        place="left"
        effect="solid"
        aria-label={closeToolTipInformationTextAriaLabel}
      >
        {content}
      </ReactTooltip>
    );
  } else {
    return (
      <div
        className={style.toolTip}
        data-testid="tooltip"
        aria-label={closeToolTipInformationTextAriaLabel}
        onMouseOver={handleContentMouseOver}
      >
        {content}
      </div>
    );
  }
};

ToolTipWrapper.propTypes = {
  toolTipIsVisible: PropTypes.bool,
  anchorId: PropTypes.string,
  closeToolTipInformationTextAriaLabel: PropTypes.string.isRequired,
  content: PropTypes.node,
  handleContentMouseOver: PropTypes.func
};

export const toggleStateOnKeyPress = (state, setState, ref) => event => {
  if (event.key === 'Enter') {
    if (ref) ref.current.focus();
    event.stopPropagation();
    event.preventDefault();
    setState(!state);
  } else if (event.key === 'Tab' || event.key === 'Escape') {
    setState(false);
  }
};

const ToolTip = ({
  anchorId,
  TooltipContent,
  'aria-label': ariaLabel,
  'data-testid': dataTestId,
  closeToolTipInformationTextAriaLabel,
  toolTipIsVisible: _toolTipIsVisible,
  iconContainerClassName,
  delayHide = 250,
  fontSize = 14
}) => {
  const isComponent = useMemo(
    () => !isString(TooltipContent) && isValidElement(TooltipContent()),
    [TooltipContent]
  );

  const [toolTipIsVisible, setToolTipIsVisible] = useState(false);

  const [mouseLeaveTimer, setMouseLeaveTimer] = useState(undefined);

  const handleKeyPress = useCallback(
    event => {
      toggleStateOnKeyPress(toolTipIsVisible, setToolTipIsVisible)(event);
    },
    [toolTipIsVisible]
  );

  const handleContentMouseOver = useCallback(() => {
    mouseLeaveTimer && /* istanbul ignore next */ clearTimeout(mouseLeaveTimer);
  }, [mouseLeaveTimer]);

  const handleMouseOver = useCallback(() => {
    mouseLeaveTimer && clearTimeout(mouseLeaveTimer);
    setToolTipIsVisible(true);
  }, [mouseLeaveTimer]);

  const handleMouseLeave = useCallback(() => {
    setMouseLeaveTimer(setTimeout(() => setToolTipIsVisible(false), delayHide));
  }, [delayHide]);

  const content = useMemo(() => {
    return isComponent ? (
      <TooltipContent />
    ) : (
      <p className={classnames([style.tooltipContent, FontSizes[fontSize]])}>{TooltipContent}</p>
    );
  }, [TooltipContent, fontSize, isComponent]);

  return anchorId ? (
    <ToolTipWrapper
      toolTipIsVisible={_toolTipIsVisible}
      anchorId={anchorId}
      closeToolTipInformationTextAriaLabel={closeToolTipInformationTextAriaLabel}
      content={content}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
      fontSize={fontSize}
    />
  ) : (
    <div
      className={style.tooltipContainer}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
    >
      <button
        type="button"
        className={classnames([style.tooltipIconContainer, iconContainerClassName])}
        data-testid={dataTestId}
        onKeyDown={handleKeyPress}
        tabIndex={0}
      >
        <InformationIcon
          className={style.informationIcon}
          width={12}
          height={12}
          aria-label={ariaLabel}
        />
      </button>
      <ToolTipWrapper
        toolTipIsVisible={toolTipIsVisible}
        anchorId={anchorId}
        closeToolTipInformationTextAriaLabel={closeToolTipInformationTextAriaLabel}
        content={content}
        handleContentMouseOver={handleContentMouseOver}
        fontSize={fontSize}
      />
    </div>
  );
};

ToolTip.propTypes = {
  TooltipContent: PropTypes.oneOfType([PropTypes.func, PropTypes.node, PropTypes.string]),
  'data-testid': PropTypes.string,
  'aria-label': PropTypes.string,
  closeToolTipInformationTextAriaLabel: PropTypes.string.isRequired,
  // ---------- Regular Tooltip exclusive --------------
  iconContainerClassName: PropTypes.string,
  delayHide: PropTypes.number,
  fontSize: PropTypes.oneOf([12, 14]),
  // ----------  React Tooltip exclusive  --------------
  // externalHandling: if passed down, React Tooltip is used instead, due to limitations on
  // parents overflow hidden controls
  anchorId: PropTypes.string,
  toolTipIsVisible: PropTypes.bool
};

export default ToolTip;
