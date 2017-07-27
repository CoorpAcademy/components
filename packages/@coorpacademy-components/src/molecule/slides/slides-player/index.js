import React from 'react';
import PropTypes from 'prop-types';
import identity from 'lodash/fp/identity';
import get from 'lodash/fp/get';
import {ColorPropType} from '../../../util/proptypes';
import Cta from '../../../atom/cta';
import Provider from '../../../atom/provider';
import Clue from '../../../atom/clue';
import Answer from '../../../molecule/answer';
import Loader from '../../../atom/loader';
import ResourceBrowser from '../../../organism/resource-browser';
import SlidesFooter from '../slides-footer';
import style from './style.css';

/*
 * Content types
 */

const AnswerContent = ({answerType}) => <Answer {...answerType} />;

AnswerContent.propTypes = {
  answerType: PropTypes.shape(Answer.PropTypes)
};

const ClueContent = ({text}) => <Clue text={text} />;

ClueContent.propTypes = {
  text: Clue.propTypes.text
};

const MediaContent = ({resources}) =>
  <div className={style.resourcesWrapper}>
    <ResourceBrowser resources={resources} />
  </div>;

MediaContent.propTypes = {
  resources: ResourceBrowser.propTypes.resources
};

const CONTENT_TYPE = {
  answer: AnswerContent,
  clue: ClueContent,
  media: MediaContent
};

/*
 * Normal layouts
 */

const Step = ({step, color}) => {
  const stepWidth = step.current / step.total * 100;

  return (
    <div data-name="step">
      <div data-name="counter" className={style.stepCount}>
        <span style={{color}}>{step.current}</span>
        /{step.total}
      </div>
      <div className={style.stepWrapper}>
        <div
          className={style.stepBar}
          style={{
            backgroundColor: color,
            width: `${stepWidth}%`
          }}
        />
      </div>
    </div>
  );
};

Step.propTypes = {
  step: PropTypes.shape({
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
  }),
  color: ColorPropType
};

const Help = ({help}) =>
  <div className={style.helpView}>
    {help}
  </div>;

Help.propTypes = {
  help: PropTypes.string
};

const ContentLayout = (props, context) => {
  const {typeClue, question, cta, help} = props;
  const ContentType = CONTENT_TYPE[typeClue];
  const wrapperColor = typeClue === 'answer' ? 'white' : '#ECEFF1';

  return (
    <div className={style.contentWrapper} style={{backgroundColor: wrapperColor}}>
      <div data-name="question" className={style.question}>
        {question}
      </div>
      {help && typeClue === 'answer' ? <Help help={help} /> : null}
      <ContentType {...props} />
      <div className={style.ctaWrapper}>
        <Cta className={style.cta} {...cta} />
      </div>
    </div>
  );
};

ContentLayout.contextTypes = {
  translate: Provider.childContextTypes.translate,
  skin: Provider.childContextTypes.skin
};

ContentLayout.propTypes = {
  typeClue: PropTypes.oneOf(Object.keys(CONTENT_TYPE)),
  question: PropTypes.string,
  cta: PropTypes.shape(Cta.propTypes)
};

/*
 * Loading
 */

const LoadingLayout = () =>
  <div className={style.loading}>
    <Loader />
  </div>;

const LoadedLayout = ({question, step, ...props}) =>
  question && step
    ? <ContentLayout question={question} step={step} {...props} />
    : <LoadingLayout />;

/*
 * Errors
 */

const ErrorMessage = ({errorMsg}) =>
  <div className={style.contentWrapper}>
    <div className={style.error}>
      {errorMsg}
    </div>
  </div>;

ErrorMessage.propTypes = {
  errorMsg: PropTypes.string
};

const Content = ({error, ...props}) =>
  error ? <ErrorMessage {...props} /> : <LoadedLayout {...props} />;

Content.propTypes = {
  error: PropTypes.bool
};

/*
 * SlidesPlayer
 */

const SlidesPlayer = (props, context) => {
  const {step, buttons} = props;
  const {skin, translate = identity} = context;
  const stepColor = get('common.primary', skin);

  return (
    <div className={style.wrapper} data-name="slidesPlayer">
      {step ? <Step step={step} color={stepColor} /> : null}
      <div className={style.guideWrapper}>
        <span>{translate('New media')}</span>
      </div>
      <Content {...props} />
      <div className={style.footer}>
        <SlidesFooter buttons={buttons} />
      </div>
    </div>
  );
};

SlidesPlayer.TYPE = CONTENT_TYPE;

SlidesPlayer.contextTypes = {
  translate: Provider.childContextTypes.translate,
  skin: Provider.childContextTypes.skin
};

SlidesPlayer.propTypes = {
  step: Step.propTypes.step,
  buttons: SlidesFooter.propTypes.buttons
};

export default SlidesPlayer;
