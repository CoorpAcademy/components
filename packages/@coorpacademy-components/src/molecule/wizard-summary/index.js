import React, {useMemo, useState, useCallback, useRef} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {uniqueId} from 'lodash/fp';
import {NovaCompositionNavigationArrowDown as ArrowDownIcon} from '@coorpacademy/nova-icons';
import ListBadges from '../list-badges';
import ButtonLink from '../../atom/button-link';
import ContentBadge from '../../atom/content-badge';
import style from './style.css';

const buildItemsOfSection = items => {
  return items.map((item, index) => {
    const {type} = item;
    switch (type) {
      case 'mainElement': {
        return (
          <li key={`${item.title}-${index}`} data-name={item.title}>
            <span className={style.title}>{item.title}</span>
            <span className={style.value}>{item.value}</span>
          </li>
        );
      }
      case 'content': {
        const {badgeList, badgeAriaLabel, title, author, unsaved = false} = item;
        return (
          <li className={style.contentWrapper} key={`${title}-${index}`} data-name={item.title}>
            <span className={style.contentCounter}>{index + 1}</span>
            <div className={style.contentItem}>
              <ListBadges aria-label={badgeAriaLabel} items={badgeList} />
              <div
                className={classnames(style.contentTitle, unsaved && style.unsaved)}
                title={title}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{__html: title}}
              />
              {author ? <span className={style.author}>{author}</span> : null}
            </div>
          </li>
        );
      }
      case 'text':
      default: {
        const {text, unsaved = false} = item;
        return (
          <li key={`${item.text}-${index}`} data-name={item.title}>
            <span className={classnames(style.valueSimpleText, unsaved && style.unsaved)}>
              {text}
            </span>
          </li>
        );
      }
    }
  });
};

const buildSectionHeader = section => {
  const {title, counterText} = section;
  if (!title) {
    return null;
  }
  return (
    <div className={style.sectionHeader}>
      <span className={style.title}>{title}</span>
      {counterText ? <span className={style.counterText}>{counterText}</span> : null}
    </div>
  );
};

const buildSections = sections => {
  return sections.map((section, index) => {
    const sectionHeader = buildSectionHeader(section);
    const itemsView = buildItemsOfSection(section.items);
    return (
      <div
        key={`summary-section-${index}`}
        data-step={index}
        data-name={`summary-section-${index}`}
        className={style.sectionWrapper}
      >
        {sectionHeader}
        <ul>{itemsView}</ul>
      </div>
    );
  });
};

const BuildAction = ({action, side}) => {
  const {onClick, text, disabled = false, icon, 'aria-label': ariaLabel} = action;
  const handleClick = useMemo(() => () => onClick(), [onClick]);

  if (!action) return null;

  const buttonProps = {
    type: 'text',
    label: text,
    disabled,
    'aria-label': ariaLabel,
    'data-name': `${icon}-button-${side}`,
    onClick: handleClick,
    icon: {
      position: 'left',
      type: icon
    }
  };

  return (
    <div className={style.button}>
      <ButtonLink {...buttonProps} />
    </div>
  );
};

const checkOnClose = (checked, summaryElement, onCloseSummary, clickEvent) => {
  if (
    checked &&
    summaryElement &&
    summaryElement.current &&
    !summaryElement.current.contains(clickEvent.target)
  ) {
    onCloseSummary();
  }
};

const WizardSummary = props => {
  const {title, sections, action, side} = props;
  const sectionsView = buildSections(sections);
  const idSwitch = uniqueId('open-summary-wizard');
  const summaryElement = useRef(null);
  const [checked, setChecked] = useState(false);

  const onCloseSummary = () => setChecked(false);

  let clickListener, touchListener;
  const handleOnChange = useCallback(() => {
    if (checked) {
      if (clickListener) {
        document.removeEventListener('click', clickListener);
        clickListener = null;
      }
      if (touchListener) {
        document.removeEventListener('touchstart', touchListener);
        touchListener = null;
      }
    } else {
      clickListener = document.addEventListener('click', clickEvent =>
        checkOnClose(!checked, summaryElement, onCloseSummary, clickEvent)
      );
      touchListener = document.addEventListener('touchstart', clickEvent =>
        checkOnClose(!checked, summaryElement, onCloseSummary, clickEvent)
      );
    }
    setChecked(!checked);
  }, [checked]);

  return (
    <div className={style.container} ref={summaryElement}>
      <span className={style.desktopSummaryTitle} data-name={`summary-title-${side}`}>
        {title}
      </span>
      <input
        type="checkbox"
        id={idSwitch}
        name="toogle"
        title={idSwitch}
        className={style.checkbox}
        data-name={`summary-checkbox-${side}`}
        checked={checked}
        onChange={handleOnChange}
      />
      <div className={style.summary}>
        <div className={style.tabletSummaryHeader}>
          <label htmlFor={idSwitch}>
            <span className={style.tabletSummaryTitle}>{title}</span>
            <ArrowDownIcon className={style.tabletSummaryIcon} />
          </label>
        </div>
        <div className={style.summarySections} data-name={`summary-section-${side}`}>
          {sectionsView}
        </div>
      </div>
      <div className={style.actionZone} data-name={`summary-actions-${side}`}>
        <BuildAction action={action} side={side} />
      </div>
    </div>
  );
};

BuildAction.propTypes = {
  action: PropTypes.shape({
    icon: PropTypes.string,
    disabled: PropTypes.bool,
    text: PropTypes.string,
    onClick: PropTypes.func,
    'aria-label': PropTypes.string
  }),
  side: PropTypes.string
};

WizardSummary.propTypes = {
  title: PropTypes.string,
  side: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.shape({
            type: PropTypes.string,
            title: PropTypes.string,
            value: PropTypes.string
          }),
          PropTypes.shape({
            type: PropTypes.string,
            text: PropTypes.string,
            unsaved: PropTypes.bool
          }),
          PropTypes.shape({
            type: PropTypes.string,
            badgeList: PropTypes.arrayOf(PropTypes.shape(ContentBadge.propTypes)),
            badgeAriaLabel: PropTypes.string,
            title: PropTypes.string,
            author: PropTypes.string,
            unsaved: PropTypes.bool
          })
        ])
      ),
      counterText: PropTypes.string
    })
  ),
  action: BuildAction.propTypes.action
};

export default WizardSummary;
