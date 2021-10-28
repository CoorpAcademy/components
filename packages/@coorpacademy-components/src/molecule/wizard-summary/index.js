import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './style.css';

const buildItems = items => {
  return items.map((item, index) => {
    const {type} = item;
    switch (type) {
      case 'mainElement':
        return (
          <div>
            <div className={style.title}>{item.title}</div>
            <div className={style.value}>{item.value}</div>
          </div>
        );
      case 'content': {
        const {category} = item;
        return (
          <div className={style.contentWrapper}>
            <div className={style.content}>
              <div
                className={classnames(
                  category === 'base' && style.base,
                  category === 'advanced' && style.advanced,
                  category === 'coach' && style.coach,
                  category === 'chapter' && style.chapter,
                  category === 'scorm' && style.scorm,
                  category === 'video' && style.video,
                  category === 'article' && style.article,
                  category === 'podcast' && style.podcast
                )}
              >
                {item.label}
              </div>
              <div className={style.contentTitle}>{item.title}</div>
            </div>
            <div className={style.author}>{item.author}</div>
          </div>
        );
      }
      case 'text':
      default:
        return <div className={style.valueSimpleText}>{item.text}</div>;
    }
  });
};

const buildSections = sections => {
  return sections.map((section, index) => {
    const sectionTitle = section.title ? <div>{section.title}</div> : null;
    const itemsView = buildItems(section.items);
    return (
      <div key={`section-${index}`} data-step={index} className={style.sectionWrapper}>
        <div className={style.title}>{sectionTitle}</div>
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
