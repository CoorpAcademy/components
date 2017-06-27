import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import ResourceBrowser from '../../../organism/resource-browser';
import PopinHeader from '../../../molecule/app-player/popin/popin-header';
import Accordion from '../../../organism/accordion/container';
import style from './style.css';

const extractTabs = map(item => ({title: item.title, isOpen: item.open}));

const Resources = ({resources}) => (
  <div className={style.browserWrapper}>
    <ResourceBrowser resources={resources.value} className={style.browser} />
  </div>
);

const SimpleText = ({text}) => (
  <div className={style.simpleTextWrapper}>
    <p className={style.simpleText}>{text}</p>
  </div>
);

SimpleText.propTypes = {
  text: PropTypes.string
};

const Question = props => (
  <div className={style.question}>
    <p className={style.questionHeader}>{props.header}</p>
    <div>
      <span className={style.answerPrefix}>{props.answerPrefix}</span>
      <span className={style.answer}>{props.answer}</span>
    </div>
  </div>
);

Question.propTypes = {
  header: PropTypes.string,
  answerPrefix: PropTypes.string,
  answer: PropTypes.string
};

const PopinCorrection = props => {
  const {header = {}, question, resources, klf, tips, onClick} = props;
  const tabs = extractTabs([resources, klf, tips]);

  return (
    <div className={style.wrapper}>
      <PopinHeader {...header} />
      <Question {...question} />
      <Accordion tabProps={tabs} onClick={onClick} oneTabOnly>
        <Resources resources={resources} />
        <SimpleText text={klf.value} />
        <SimpleText text={tips.value} />
      </Accordion>
    </div>
  );
};

PopinCorrection.propTypes = {
  // resources.value: WIP fixtures à definir
  header: PropTypes.shape(PopinHeader.propTypes),
  question: PropTypes.shape(Question.propTypes),
  klf: PropTypes.shape(SimpleText.propTypes),
  tips: PropTypes.shape(SimpleText.propTypes),
  onClick: PropTypes.func
};

export default PopinCorrection;
