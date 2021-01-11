import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {compact, find, get, getOr, keys, omit, identity, max, pipe, split} from 'lodash/fp';
import {ColorPropType, SrcPropType} from '../../../../util/proptypes';
import Cta from '../../../../atom/cta';
import Picture from '../../../../atom/picture';
import Provider from '../../../../atom/provider';
import Clue from '../../../../atom/clue';
import Answer from '../../../../molecule/answer';
import Loader from '../../../../atom/loader';
import Swapper from '../../../../hoc/swapper';
import VideoPlayer from '../../../../molecule/video-player';
import PDF from '../../../../molecule/pdf';
import ResourceBrowser from '../../../../organism/resource-browser';
import {innerHTML} from '../../../../atom/label/style.css';
import Footer from './footer';
import Header from './header';
import style from './style.css';

const MediaView = ({media}) => {
  return (
    <div className={style.contextMedia}>
      <Picture src={media} />
    </div>
  );
};

MediaView.propTypes = {
  media: Picture.propTypes.src
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

const Bar = ({total, color, current}) => {
  const _current = max([current, 0]);

  if (!total) {
    return null;
  }

  const stepWidth = (_current / total) * 100;

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

const Step = ({step, color}) => {
  return (
    <div data-name="step">
      <div data-name="counter" className={style.stepCount}>
        <span style={{color}}>{step.current}</span>/{step.total}
      </div>
      <div className={style.stepWrapper}>
        <Swapper {...step} color={color} current={step.current - 1}>
          <Bar {...step} color={color} />
        </Swapper>
      </div>
    </div>
  );
};

Step.propTypes = {
  step: PropTypes.shape({
    current: Bar.propTypes.current,
    total: Bar.propTypes.total
  }),
  color: ColorPropType
};

const NewMedia = (props, context) => {
  const {translate} = context;
  const {onClick, step} = props;
  const current = get('current', step);
  return (
    <div
      className={`${style.guideWrapper} ${style.newMedia}`}
      onClick={onClick}
      data-name="newMedia"
    >
      <span>{translate(step === null || current === 1 ? 'See lesson' : 'New media')}</span>
    </div>
  );
};

NewMedia.propTypes = {
  onClick: PropTypes.func,
  step: Step.propTypes.step
};

NewMedia.contextTypes = {
  translate: Provider.childContextTypes.translate
};

const ReviewLesson = (props, context) => {
  const {translate} = context;
  const {onClick} = props;

  return (
    <div
      className={`${style.guideWrapper} ${style.reviewLesson}`}
      onClick={onClick}
      data-name="reviewLesson"
    >
      <span>{translate('Review lesson')}</span>
    </div>
  );
};

ReviewLesson.propTypes = {
  onClick: PropTypes.func
};

ReviewLesson.contextTypes = {
  translate: Provider.childContextTypes.translate
};

const AnswerContent = ({answerType, help}) => <Answer {...answerType} help={help} />;

AnswerContent.propTypes = {
  answerType: PropTypes.shape(Answer.propTypes),
  help: PropTypes.string
};

const MediaContent = (props, context) => {
  const {resources, starsDiff} = props;
  const {translate} = context;
  const starsToWin = translate('media_stars_to_win', {
    count: Math.abs(starsDiff)
  });

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
  const {src} = props;
  const videos = src.map(({videoId, ...childProps}) => (
    <VideoPlayer {...omit('id', childProps)} id={videoId} key={videoId} autoplay={false} />
  ));
  return <div>{videos}</div>;
};

ContextVideo.propTypes = {
  src: PropTypes.arrayOf(PropTypes.shape(VideoPlayer.propTypes))
};

const CONTEXT_MEDIA = {
  img: ContextImage,
  pdf: PDF,
  video: ContextVideo
};

const ContextMedia = ({media}) => {
  const ContentType = CONTEXT_MEDIA[media.type];
  return (
    <div
      data-name="contextMedia"
      className={classnames(
        style.contextWrapper,
        media.type === 'pdf' ? style.contexPdftWrapper : null
      )}
    >
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
    <p
      key={index}
      data-name="contextDescription"
      className={classnames(style.contextDescription, innerHTML)}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: paragraph}}
    />
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

const Help = ({help}) => (
  <div
    className={classnames(style.helpView, innerHTML)}
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{__html: help}}
  />
);

Help.propTypes = {
  help: PropTypes.string
};

const ValidateButton = ({cta}) => {
  if (!cta) {
    return null;
  }

  return (
    <div className={style.ctaWrapper}>
      <Cta {...cta} className={style.cta} />
    </div>
  );
};

ValidateButton.propTypes = {
  cta: PropTypes.shape(Cta.propTypes)
};

const ContentLayout = (props, context) => {
  const {
    typeClue: selectedTab,
    answerType: {model: {type} = {}} = {},
    question,
    help,
    slideContext
  } = props;
  const ContentType = CONTENT_TYPE[selectedTab];
  const noPaddingRessources =
    ContentType === MediaContent ? `${style.contentWrapperNoPadding}` : `${style.contentWrapper}`;

  return (
    <div className={noPaddingRessources} style={{backgroundColor: 'white'}}>
      <div
        data-name="question"
        className={classnames(
          selectedTab === 'context' ? style.contextTitle : style.question,
          innerHTML
        )}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: selectedTab === 'context' ? slideContext.title : question
        }}
      />
      {help && selectedTab === 'answer' && type !== 'qcmDrag' ? <Help help={help} /> : null}
      <ContentType {...props} />
      <ValidateButton {...props} />
    </div>
  );
};

ContentLayout.contextTypes = {
  translate: Provider.childContextTypes.translate,
  skin: Provider.childContextTypes.skin
};

ContentLayout.propTypes = {
  typeClue: PropTypes.oneOf(keys(CONTENT_TYPE)),
  question: PropTypes.string,
  ...ValidateButton.propTypes
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
  question ? <ContentLayout {...props} question={question} /> : <LoadingLayout />;

LoadedLayout.propTypes = {
  ...ContentLayout.propTypes,
  question: ContentLayout.propTypes.question
};

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
  const {header, step, buttons, showNewMedia = false, showReviewLesson = false} = props;
  const {skin} = context;
  const stepColor = get('common.primary', skin);
  const mediaButton = find({type: 'media'}, buttons) || {};
  const {onClick = identity} = mediaButton;
  return (
    <div className={style.wrapper} data-name="slidesPlayer">
      {header ? <Header {...header} /> : null}
      <div className={style.contentProgression}>
        {step ? <Step step={step} color={stepColor} /> : null}
        {showNewMedia && !showReviewLesson ? <NewMedia onClick={onClick} step={step} /> : null}
        {showReviewLesson && !showNewMedia ? <ReviewLesson onClick={onClick} /> : null}
        <Content {...props} />
      </div>
      <Footer buttons={buttons} />
    </div>
  );
};

SlidesPlayer.TYPE = CONTENT_TYPE;

SlidesPlayer.contextTypes = {
  translate: Provider.childContextTypes.translate,
  skin: Provider.childContextTypes.skin
};

SlidesPlayer.propTypes = {
  cta: ValidateButton.propTypes.cta,
  step: Step.propTypes.step,
  buttons: Footer.propTypes.buttons,
  header: PropTypes.shape(Header.propTypes),
  showNewMedia: PropTypes.bool,
  showReviewLesson: PropTypes.bool,
  backgroundUrl: SrcPropType
};

export default SlidesPlayer;
