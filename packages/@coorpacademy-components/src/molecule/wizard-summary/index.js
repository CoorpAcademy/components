import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const buildItems = items => {
  return items.map((item, index) => {
    const {type} = item;
    switch (type) {
      case 'mainElement':
        return (
          <div>
            <div>{item.title}</div>
            <div>{item.value}</div>
          </div>
        );
      case 'text':
        return <div>{item.text}</div>;
      case 'course':
        return (
          <div>
            <div>
              <span>{item.level}</span>
              {item.title}
            </div>
            <div>{item.author}</div>
          </div>
        );
      case 'chapter':
        return (
          <div>
            <div>{item.title}</div>
            <div>{item.author}</div>
          </div>
        );
      default:
        return (
          <div>
            <div>{item.title}</div>
            <div>{item.author}</div>
          </div>
        );
    }
  });
};

const buildSections = sections => {
  return sections.map((section, index) => {
    const sectionTitle = section.title ? <div>{section.title}</div> : null;
    const itemsView = buildItems(section.items);
    return (
      <div key={`section-${index}`} data-step={index}>
        <div className={style.sectionTitle}>{sectionTitle}</div>
        {itemsView}
      </div>
    );
  });
};

const WizardSummary = props => {
  const {title, sections} = props;

  const sectionView = buildSections(sections);

  return (
    <div className={style.container}>
      <div className={style.summaryTitle}>{title}</div>
      {sectionView}
    </div>
  );
};

WizardSummary.propTypes = {
  title: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.oneOf([
          PropTypes.shape({
            type: PropTypes.string,
            title: PropTypes.string,
            value: PropTypes.string
          }),
          PropTypes.shape({
            type: PropTypes.string,
            text: PropTypes.string
          }),
          PropTypes.shape({
            type: PropTypes.oneOf(['course', 'chapter', 'scorm', 'video', 'article', 'podcast']),
            title: PropTypes.string,
            level: PropTypes.string,
            author: PropTypes.string
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
