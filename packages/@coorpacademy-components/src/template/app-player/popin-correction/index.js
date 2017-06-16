import React from 'react';
import map from 'lodash/fp/map';
import Slider from '../../../organism/slider';
import PopinHeader from '../../../molecule/app-player/popin/popin-header';
import Video from '../../../molecule/video-iframe';
import Accordion from '../../../organism/accordion/container';
import style from './style.css';

const extractTabs = (resources, klf, tips) => [
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

const Resources = props => {
  const {value} = props;

  const resources = map.convert({cap: false})((resource, key) => {
    return <Video key={key} type={'vimeo'} id={resource.videoId} />;
  }, value);

  return (
    <div className={style.sliderWrapper}>
      <Slider>
        {resources}
      </Slider>
    </div>
  );
};

const SimpleText = props => (
  <div className={style.simpleTextWrapper}>
    <p className={style.simpleText}>{props.value}</p>
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
  const tabs = extractTabs(resources, klf, tips);
  return (
    <div className={style.wrapper}>
      <PopinHeader {...header} />
      <Question {...question} />
      <Accordion tabProps={tabs} oneTabOnly>
        <Resources {...resources} />
        <SimpleText {...klf} />
        <SimpleText {...tips} />
      </Accordion>
    </div>
  );
};

export default PopinCorrection;
