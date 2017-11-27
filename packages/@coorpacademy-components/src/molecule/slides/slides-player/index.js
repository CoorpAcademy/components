import React from 'react';
import PropTypes from 'prop-types';
import identity from 'lodash/fp/identity';
import find from 'lodash/fp/find';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import pipe from 'lodash/fp/pipe';
import split from 'lodash/fp/split';
import compact from 'lodash/fp/compact';
import {ColorPropType} from '../../../util/proptypes';
import Cta from '../../../atom/cta';
import Picture from '../../../atom/picture';
import Provider from '../../../atom/provider';
import Clue from '../../../atom/clue';
import Answer from '../../answer';
import Loader from '../../../atom/loader';
import VideoPlayer from '../../video-player';
import PDF from '../../pdf';
import ResourceBrowser from '../../../organism/resource-browser';
import SlidesFooter from '../slides-footer';
import style from './style.css';

const MediaView = ({media}) => {
  return (
    <div className={style.contextMedia}>
      <Picture src={media} />
    </div>
  );
};

/*
 * Content types
 */

const ClueContent = (props, context) => {
  const {text, starsDiff, onClickSeeClue} = props;

  return (
    <div className={style.clueWrapper}>
      <Clue text={text} starsDiff={starsDiff} onClick={onClickSeeClue} />
    </div>
  );
};

ClueContent.propTypes = {
  text: PropTypes.string,
  starsDiff: PropTypes.number,
  onClickSeeClue: PropTypes.func
};

const NewMedia = (props, context) => {
  const {translate} = context;
  const {onClick} = props;

  return (
    <div className={style.guideWrapper} onClick={onClick} data-name="newMedia">
      <span>{translate('New media')}</span>
    </div>
  );
};

NewMedia.propTypes = {
  onClick: PropTypes.func
};

NewMedia.contextTypes = {
  translate: Provider.childContextTypes.translate
};

const AnswerContent = ({answerType}) => <Answer {...answerType} />;

AnswerContent.propTypes = {
  answerType: PropTypes.shape(Answer.PropTypes)
};

const MediaContent = (props, context) => {
  const {resources, starsDiff} = props;
  const {translate} = context;
  const starsToWin = translate('media_stars_to_win', {count: Math.abs(starsDiff)});

  return (
    <div className={style.resourcesWrapper}>
      <ResourceBrowser resources={resources} />
      <div className={style.stars}>{starsToWin}</div>
    </div>
  );
};

MediaContent.propTypes = {
  resources: ResourceBrowser.propTypes.resources,
  starsDiff: PropTypes.number
};

MediaContent.contextTypes = {
  translate: Provider.childContextTypes.translate
};

const ContextImage = ({src}) => {
  const images = src.map(({url, _id}) => <MediaView key={_id} media={url} />);
  return <div>{images}</div>;
};

ContextImage.propTypes = {
  src: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      url: PropTypes.string
    })
  )
};

const ContextVideo = props => {
  const videos = props.src.map(({videoId, mimeType, width, height}) => (
    <VideoPlayer
      id={videoId}
      key={videoId}
      autoplay={false}
      mimeType={mimeType}
      width={width}
      height={height}
    />
  ));
  return <div>{videos}</div>;
};

ContextVideo.propTypes = {
  src: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      mimeType: PropTypes.string,
      url: PropTypes.string
    })
  )
};

const CONTEXT_MEDIA = {
  img: ContextImage,
  pdf: PDF,
  video: ContextVideo
};

const ContextMedia = ({media}) => {
  const ContentType = CONTEXT_MEDIA[media.type];
  return (
    <div className={style.contextWrapper}>
      <ContentType {...media} />
    </div>
  );
};

ContextMedia.propTypes = {
  media: PropTypes.oneOfType([
    PropTypes.shape({
      ...ContextImage.propTypes,
      type: PropTypes.oneOf(['img'])
    }),
    PropTypes.shape({
      ...PDF.propTypes,
      type: PropTypes.oneOf(['pdf'])
    }),
    PropTypes.shape({
      ...ContextVideo.propTypes,
      type: PropTypes.oneOf(['video'])
    })
  ])
};

const ContextContent = ({slideContext}) => {
  const descriptionParagraphs = pipe(getOr('', 'description'), split('\n'), compact)(slideContext);
  const paragraphs = descriptionParagraphs.map((paragraph, index) => (
    <p key={index} className={style.contextDescription}>
      {paragraph}
    </p>
  ));
  return (
    <div className={style.context}>
      {get('media.type', slideContext) ? <ContextMedia media={slideContext.media} /> : null}
      {paragraphs}
    </div>
  );
};

ContextContent.propTypes = {
  slideContext: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    media: PropTypes.shape(ContextMedia.propTypes)
  })
};

const CONTENT_TYPE = {
  answer: AnswerContent,
  clue: ClueContent,
  context: ContextContent,
  media: MediaContent
};

const Bar = ({current, total, color}) => {
  if (!total) {
    return null;
  }

  const stepWidth = current / total * 100;

  return (
    <div
      className={style.stepBar}
      style={{
        backgroundColor: color,
        width: `${stepWidth}%`
      }}
    />
  );
};

Bar.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number,
  color: ColorPropType
};

const Step = ({progressionStep, step, color}) => {
  return (
    <div data-name="step">
      <div data-name="counter" className={style.stepCount}>
        <span style={{color}}>{step.current}</span>
        /{step.total}
      </div>
      <div className={style.stepWrapper}>
        <Bar current={progressionStep.current} total={progressionStep.total} color={color} />
      </div>
    </div>
  );
};

const stepPropType = PropTypes.shape({
  current: Bar.propTypes.current,
  total: Bar.propTypes.total
});

Step.propTypes = {
  step: stepPropType,
  progressionStep: stepPropType,
  color: ColorPropType
};

const Help = ({help}) => <div className={style.helpView}>{help}</div>;

Help.propTypes = {
  help: PropTypes.string
};

const ContentLayout = (props, context) => {
  const {typeClue, question, cta, help} = props;
  const ContentType = CONTENT_TYPE[typeClue];
  const wrapperColor = typeClue === 'answer' ? 'white' : '#ECEFF1';
  const noPaddingRessources =
    ContentType === MediaContent ? `${style.contentWrapperNoPadding}` : `${style.contentWrapper}`;

  return (
    <div className={noPaddingRessources} style={{backgroundColor: wrapperColor}}>
      <div data-name="question" className={style.question}>
        {typeClue === 'context' ? props.slideContext.title : question}
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

const LoadingLayout = () => (
  <div className={style.loading}>
    <Loader />
  </div>
);

const LoadedLayout = ({question, step, ...props}) =>
  question && step ? (
    <ContentLayout question={question} step={step} {...props} />
  ) : (
    <LoadingLayout />
  );

/*
 * Errors
 */

const ErrorMessage = ({errorMsg}) => (
  <div className={style.contentWrapper}>
    <div className={style.error}>{errorMsg}</div>
  </div>
);

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
  const {progressionStep, step, buttons, showNewMedia = false} = props;
  const {skin} = context;
  const stepColor = get('common.primary', skin);
  const mediaButton = find({type: 'media'}, buttons) || {};
  const {onClick = identity} = mediaButton;
  return (
    <div className={style.wrapper} data-name="slidesPlayer">
      {step ? <Step step={step} progressionStep={progressionStep} color={stepColor} /> : null}
      {showNewMedia ? <NewMedia onClick={onClick} /> : null}
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
  progressionStep: stepPropType,
  step: stepPropType,
  buttons: SlidesFooter.propTypes.buttons,
  showNewMedia: PropTypes.bool
};

export default SlidesPlayer;
