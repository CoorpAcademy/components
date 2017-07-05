import React, {Component} from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import ResourceBrowser from '../../../organism/resource-browser';
import PopinHeader from '../../../molecule/app-player/popin/popin-header';
import Accordion from '../../../organism/accordion/container';
import style from './style.css';

const FADE_OUT_DELAY = 300;

const extractTabs = map(item => ({title: item.title, isOpen: item.open}));

const wrapHeaderClick = ({cta = {}, ...opts}, clickWrapper) => {
  const {onClick, ...ctaContent} = cta;
  const wrappedClick = () => clickWrapper(onClick);

  return {cta: {onClick: wrappedClick, ...ctaContent}, ...opts};
};

const Resources = ({resources}) =>
  <div className={style.browserWrapper}>
    <ResourceBrowser resources={resources.value} className={style.browser} />
  </div>;

const SimpleText = ({text}) =>
  <div className={style.simpleTextWrapper}>
    <p className={style.simpleText}>{text}</p>
  </div>;

SimpleText.propTypes = {
  text: PropTypes.string
};

const Question = props =>
  <div className={style.question}>
    <p className={style.questionHeader}>{props.header}</p>
    <div>
      <span className={style.answerPrefix}>{props.answerPrefix}</span>
      <span className={style.answer}>{props.answer}</span>
    </div>
  </div>;

Question.propTypes = {
  header: PropTypes.string,
  answerPrefix: PropTypes.string,
  answer: PropTypes.string
};

class PopinCorrection extends Component {

  constructor(props) {
    super(props);
    this.state = {closing: false};
  }

  render() {
    const {header = {}, question, resources, klf, tips, onClick} = this.props;
    const tabs = extractTabs([resources, klf, tips]);
    const delayedHeader = wrapHeaderClick(header, headerClick => {
      if (!this.state.closing) {
        this.setState({closing: true}, () => setTimeout(headerClick, FADE_OUT_DELAY));
      }
    });

    return (
      <div className={this.state.closing ? style.closingOverlay : style.openingOverlay}>
        <div className={style.wrapper}>
          <PopinHeader {...delayedHeader} />
          <Question {...question} />
          <Accordion tabProps={tabs} onClick={onClick} oneTabOnly>
            <Resources resources={resources} />
            <SimpleText text={klf.value} />
            <SimpleText text={tips.value} />
          </Accordion>
        </div>
      </div>
    );
  }

}

PopinCorrection.propTypes = {
  resources: PropTypes.shape(ResourceBrowser.propTypes),
  header: PropTypes.shape(PopinHeader.propTypes),
  question: PropTypes.shape(Question.propTypes),
  klf: PropTypes.shape(SimpleText.propTypes),
  tips: PropTypes.shape(SimpleText.propTypes),
  onClick: PropTypes.func
};

export default PopinCorrection;
