import React, {isValidElement, useState, useCallback, useMemo} from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import isString from 'lodash/fp/isString';
import {NovaCompositionCoorpacademyInformationIcon as InformationIcon} from '@coorpacademy/nova-icons';
import style from './style.css';

const ToolTipWrapper = ({
  toolTipIsVisible,
  anchorId,
  closeToolTipInformationTextAriaLabel,
  content
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
  content: PropTypes.node
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
  toolTipIsVisible: _toolTipIsVisible
}) => {
  const isComponent = useMemo(
    () => !isString(TooltipContent) && isValidElement(TooltipContent()),
    [TooltipContent]
  );

  const [toolTipIsVisible, setToolTipIsVisible] = useState(false);

  const handleKeyPress = useCallback(
    event => {
      toggleStateOnKeyPress(toolTipIsVisible, setToolTipIsVisible)(event);
    },
    [toolTipIsVisible]
  );

  const handleMouseOver = useCallback(() => {
    setToolTipIsVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setToolTipIsVisible(false);
  }, []);

  const content = useMemo(() => {
    return isComponent ? (
      <TooltipContent />
    ) : (
      <p className={style.tooltipContent}>{TooltipContent}</p>
    );
  }, [TooltipContent, isComponent]);

  return anchorId ? (
    <ToolTipWrapper
      toolTipIsVisible={_toolTipIsVisible}
      anchorId={anchorId}
      closeToolTipInformationTextAriaLabel={closeToolTipInformationTextAriaLabel}
      content={content}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
    />
  ) : (
    <div
      className={style.tooltipContainer}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}
    >
      <button
        type="button"
        className={style.tooltipIconContainer}
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
      />
    </div>
  );
};

ToolTip.propTypes = {
  TooltipContent: PropTypes.oneOfType([PropTypes.func, PropTypes.node, PropTypes.string]),
  'data-testid': PropTypes.string,
  'aria-label': PropTypes.string,
  closeToolTipInformationTextAriaLabel: PropTypes.string.isRequired,
  // ---------- externalHandling --------------
  // if passed down, React Tooltip is used instead, due to limitations on
  // parents overflow hidden controls
  anchorId: PropTypes.string,
  toolTipIsVisible: PropTypes.bool
};

export default ToolTip;
