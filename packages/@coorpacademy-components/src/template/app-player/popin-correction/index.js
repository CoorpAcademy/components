import React from 'react';
import PopinHeader from '../../../molecule/app-player/popin/popin-header';
import Accordion from '../../../organism/accordion/container';
import style from './style.css';

const Resources = props => (
  <div>
    {`${props}`}
  </div>
);

const Klf = props => (
  <div className={style.klf}>
    <p className={style.klfText}>{props.value}</p>
  </div>
);

const Tips = props => (
  <div>
    {`${props}`}
  </div>
);

const Question = props => (
  <div className={style.question}>
    <p className={style.questionHeader}>{props.header}</p>
    <div>
      <span className={style.answerPrefix}>{props.answerPrefix}</span>
      <span className={style.answer}>{props.answer}</span>
    </div>
  </div>
);

const PopinCorrection = props => {
  const {header = {}, question, resources, klf, tips} = props;
  const tabs = [
    {
      title: resources.title,
      isOpen: resources.open
    },
    {
      title: klf.title,
      isOpen: klf.open
    },
    {
      title: tips.title,
      isOpen: tips.open
    }
  ];

  return (
    <div className={style.wrapper}>
      <PopinHeader {...header} />
      <Question {...question} />
      <Accordion tabProps={tabs} oneTabOnly>
        <Resources {...resources} />
        <Klf {...klf} />
        <Tips {...tips} />
      </Accordion>
    </div>
  );
};

export default PopinCorrection;
