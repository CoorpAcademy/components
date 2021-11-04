import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  NovaSolidComputersSdCard as SaveIcon,
  NovaCompositionNavigationArrowDown as ArrowDownIcon,
  NovaCompositionNavigationArrowTop as ArrowUpIcon
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
        const {category, label, title, author} = item;
        return (
          <li className={style.contentWrapper} key={`${title}-${index}`}>
            <span className={style.contentCounter}>{index + 1}</span>
            <div className={style.contentItem}>
              <div className={style.content}>
                <ContentBadge category={category} label={label} />
                <span
                  className={style.contentTitle}
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
      default:
        return (
          <li key={`${item.text}-${index}`}>
            <span className={style.valueSimpleText}>{item.text}</span>
          </li>
        );
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

const buildTabletHeader = (title, open) => {
  const idSwitch = 'input-summary-wizard';
  return (
    <div className={style.tabletsummaryTitle}>
      <span>{title}</span>
      <input
        type="checkbox"
        id={idSwitch}
        name="toogle"
        checked={open}
        className={style.checkbox}
      />
      <label htmlFor={idSwitch}>{open ? <ArrowDownIcon /> : <ArrowUpIcon />}</label>
    </div>
  );
};

const WizardSummary = props => {
  const {open = false, title, sections, action} = props;

  const sectionView = buildSections(sections);
  const tabletHeader = buildTabletHeader(title, open);
  const actionView = buildAction(action);

  return (
    <div className={style.container}>
      <span className={style.desktopSummaryTitle}>{title}</span>
      <div className={classnames(style.summary, open ? style.open : style.closed)}>
        {tabletHeader}
        {sectionView}
      </div>
      <div className={style.actionZone}>{actionView}</div>
    </div>
  );
};

WizardSummary.propTypes = {
  open: PropTypes.bool,
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
