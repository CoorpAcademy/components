import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  NovaSolidComputersSdCard as SaveIcon,
  NovaCompositionNavigationArrowDown as ArrowDownIcon
} from '@coorpacademy/nova-icons';
import Link from '../../atom/link';
import ContentBadge from '../../atom/content-badge';
import style from './style.css';

const buildItemsOfSection = items => {
  return items.map((item, index) => {
    const {type} = item;
    switch (type) {
      case 'mainElement':
        return (
          <li key={`${item.title}-${index}`}>
            <span className={style.title}>{item.title}</span>
            <span className={style.value}>{item.value}</span>
          </li>
        );
      case 'content': {
        const {category, label, title, author, unsaved = false} = item;
        return (
          <li className={style.contentWrapper} key={`${title}-${index}`}>
            <span className={style.contentCounter}>{index + 1}</span>
            <div className={style.contentItem}>
              <div className={style.content}>
                <ContentBadge category={category} label={label} />
                <span
                  className={classnames(style.contentTitle, unsaved && style.unsaved)}
                  title={title}
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{__html: title}}
                />
              </div>
              {author ? <span className={style.author}>{author}</span> : null}
            </div>
          </li>
        );
      }
      case 'text':
      default: {
        const {text, unsaved = false} = item;
        return (
          <li key={`${item.text}-${index}`}>
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
      <div key={`summary-section-${index}`} data-step={index} className={style.sectionWrapper}>
        {sectionHeader}
        <ul>{itemsView}</ul>
      </div>
    );
  });
};

const buildAction = action => {
  if (!action) return null;

  const {onClick, text, icon} = action;
  const handleClick = useMemo(() => () => onClick(), [onClick]);
  return (
    <Link className={style.actionLink} onClick={handleClick}>
      {icon === 'draft' ? <SaveIcon className={style.icon} /> : null}
      <span>{text}</span>
    </Link>
  );
};

const WizardSummary = props => {
  const {title, sections, action} = props;

  const sectionsView = buildSections(sections);
  const actionView = buildAction(action);

  return (
    <div className={style.container}>
      <span className={style.desktopSummaryTitle}>{title}</span>
      <input type="checkbox" id={'input-summary-wizard'} name="toogle" className={style.checkbox} />
      <div className={style.summary}>
        <div className={style.tabletSummaryHeader}>
          <label htmlFor={'input-summary-wizard'}>
            <span className={style.tabletSummaryTitle}>{title}</span>
            <ArrowDownIcon className={style.tabletSummaryIcon} />
          </label>
        </div>
        <div className={style.summarySections}>{sectionsView}</div>
      </div>
      <div className={style.actionZone}>{actionView}</div>
    </div>
  );
};

WizardSummary.propTypes = {
  title: PropTypes.string,
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
            category: PropTypes.oneOf([
              'base',
              'advanced',
              'coach',
              'chapter',
              'scorm',
              'video',
              'article',
              'podcast'
            ]),
            title: PropTypes.string,
            label: PropTypes.string,
            author: PropTypes.string,
            unsaved: PropTypes.bool
          })
        ])
      ),
      counterText: PropTypes.string
    })
  ),
  action: PropTypes.shape({
    icon: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
  })
};

export default WizardSummary;
