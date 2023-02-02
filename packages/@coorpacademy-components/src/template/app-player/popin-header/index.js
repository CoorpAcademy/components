import React from 'react';
import PropTypes from 'prop-types';
import {
  compact,
  flatten,
  get,
  isNil,
  pipe,
  times,
  zip,
  round,
  parseInt as _parseInt,
  multiply,
  isEmpty
} from 'lodash/fp';
import {
  NovaCompositionNavigationArrowRight as ArrowRight,
  NovaCompositionCoorpacademyCharts as ChartsIcon,
  NovaCompositionCoorpacademyStar as StarIcon,
  NovaCompositionCoorpacademyCheck as CheckIcon,
  NovaSolidStatusClose as Close
} from '@coorpacademy/nova-icons';
import classnames from 'classnames';
import Loader from '../../../atom/loader';
import Life from '../../../atom/life';
import Link from '../../../atom/link';
import Animation, {EASE_OUT_CUBIC} from '../../../hoc/animation';
import Transition from '../../../hoc/transition';
import AnimationScheduler, {AnimationAdapter} from '../../../hoc/animation-scheduler';
import Provider from '../../../atom/provider';
import style from './style.css';

const separator = index => (
  <span key={index} className={style.answerSeparator}>
    /
  </span>
);

const joinBySeparator = elements => {
  const separators = times(separator, elements.length - 1);
  return pipe(zip, flatten, compact)(elements, separators);
};

const AnswersCorrection = ({corrections}) => {
  const answers = corrections.map((correction, index) => {
    const key = `answer_${index}`;
    return (
      <span
        key={key}
        data-name="answer"
        data-correct={correction.isCorrect}
        className={classnames(
          correction.isCorrect ? style.correctAnswer : style.wrongAnswer,
          style.innerHTML
        )}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: correction.answer}}
      />
    );
  }, corrections);
  return <p className={style.fullAnswer}>{joinBySeparator(answers)}</p>;
};

AnswersCorrection.propTypes = {
  corrections: PropTypes.arrayOf(
    PropTypes.shape({
      answer: PropTypes.string.isRequired,
      isCorrect: PropTypes.bool.isRequired
    })
  )
};

const formatPlusSign = value => (value >= 0 ? '+' : '') + value;

const Rank = ({failed, rank, animated, onAnimationEnd}, {skin}) => {
  const positive = get('common.positive', skin);
  if (failed || isNil(rank)) return null;
  return (
    <AnimationScheduler animated={animated} onAnimationEnd={onAnimationEnd}>
      <div className={style.centerContent}>
        <Transition name="label" after="counter" className={style.bumped}>
          <div className={style.iconBubble}>
            <ChartsIcon className={style.icon} style={{color: positive}} />
          </div>
        </Transition>
        <span className={style.iconText}>
          <Animation name="counter" bezier={EASE_OUT_CUBIC} duration={1000}>
            {progress => pipe(_parseInt(10), multiply(progress), round, formatPlusSign)(rank)}
          </Animation>
        </span>
      </div>
    </AnimationScheduler>
  );
};

Rank.propTypes = {
  failed: PropTypes.bool,
  rank: PropTypes.string,
  animated: Animation.propTypes.animated,
  onAnimationEnd: Animation.propTypes.onAnimationEnd
};

Rank.contextTypes = {
  skin: Provider.childContextTypes.skin
};

const Stars = ({failed, stars, animated, onAnimationEnd}, {skin}) => {
  const positive = get('common.positive', skin);
  if (failed || isNil(stars)) return null;

  return (
    <AnimationScheduler animated={animated} onAnimationEnd={onAnimationEnd}>
      <div className={style.centerContent}>
        <Transition name="label" after="counter" className={style.bumped}>
          <div className={style.iconBubble}>
            <StarIcon className={style.icon} style={{color: positive}} />
          </div>
        </Transition>
        <span data-name="iconText" className={style.iconText}>
          <Animation name="counter" bezier={EASE_OUT_CUBIC} duration={1000}>
            {progress => pipe(_parseInt(10), multiply(progress), round, formatPlusSign)(stars)}
          </Animation>
        </span>
      </div>
    </AnimationScheduler>
  );
};

Stars.propTypes = {
  failed: PropTypes.bool,
  stars: PropTypes.string,
  animated: Animation.propTypes.animated,
  onAnimationEnd: Animation.propTypes.onAnimationEnd
};

Stars.contextTypes = {
  skin: Provider.childContextTypes.skin
};

const Lifes = ({lives, failed, animated, revival}) => {
  if (isNil(lives)) return null;

  return (
    <Life
      failed={failed}
      count={lives}
      animated={animated}
      revival={revival}
      className={style.life}
    />
  );
};

Lifes.propTypes = {
  lives: Life.propTypes.count,
  failed: Life.propTypes.failed,
  animated: Life.propTypes.animated,
  revival: Life.propTypes.revival
};

const IconsPart = props => {
  const {lives, failed, stars, rank, animated, revival} = props;
  return (
    <AnimationScheduler animated>
      <div className={style.iconsWrapper}>
        <Lifes lives={lives} failed={failed} animated={animated} revival={revival} />

        <AnimationAdapter name="stars">
          <Stars stars={stars} fail={failed} />
        </AnimationAdapter>
        <AnimationAdapter name="rank" after="stars">
          <Rank rank={rank} fail={failed} />
        </AnimationAdapter>
      </div>
    </AnimationScheduler>
  );
};

IconsPart.propTypes = {
  lives: Lifes.propTypes.lives,
  failed: Lifes.propTypes.failed,
  stars: Stars.propTypes.stars,
  rank: Rank.propTypes.rank,
  animated: AnimationScheduler.propTypes.animated,
  revival: PropTypes.bool
};

const buildClass = (value, success, failed, loading, scormStyle, mode = 'default') => {
  if (loading && isNil(value)) return loading;
  if (mode === 'scorm') return scormStyle;
  return value ? failed : success;
};

const getLinkStyle = ({gameOver, extraLifeGranted}) => {
  if (extraLifeGranted) {
    return style.oneMoreLife;
  } else if (gameOver) {
    return style.gameOver;
  } else {
    return null;
  }
};
const renderIconStatusScorm = failed => {
  return (
    <div className={failed ? style.iconCloseContainer : style.iconSuccessContainer}>
      {failed ? <Close className={style.failIcon} /> : <CheckIcon className={style.checkIcon} />}
    </div>
  );
};
const buildDefaultOrScormStyle = (
  defaultStyle,
  styleScorm,
  failed,
  mode = 'default',
  failedStyle = null
) => {
  if (mode === 'scorm' && failed && failedStyle) return failedStyle;
  if (mode === 'scorm') return styleScorm;
  return defaultStyle;
};
const CorrectionPart = props => {
  const {failed, corrections, title, subtitle, stars, rank, gameOver, mode = 'default'} = props;
  const isLoading = isNil(failed);
  const className = buildClass(
    failed,
    stars && rank ? style.correctionSectionEndSuccess : style.correctionSectionSuccess,
    gameOver ? style.correctionSectionFailGameOver : style.correctionSectionFail,
    style.correctionSectionLoading,
    style.resultContenantContainerScorm,
    mode
  );
  return (
    <div data-name="correctionSection" className={className}>
      {mode === 'scorm' && !isLoading && renderIconStatusScorm(failed)}
      <div
        className={buildDefaultOrScormStyle(
          style.titlesWrapper,
          style.titlesWrapperScorm,
          failed,
          mode
        )}
      >
        {isLoading ? <Loader /> : null}
        <h1
          data-name="title"
          className={buildDefaultOrScormStyle(
            classnames(style.title, style.innerHTML),
            style.resultTitleScorm,
            failed,
            mode
          )}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: title}}
        />
        <h2
          className={buildDefaultOrScormStyle(
            style.subtitle,
            style.resultSubtitleScorm,
            failed,
            mode,
            style.statusPlayerResultFailScorm
          )}
        >
          {subtitle}
        </h2>
        {failed && !isEmpty(corrections) ? <AnswersCorrection corrections={corrections} /> : null}
      </div>
      {mode !== 'scorm' ? <IconsPart {...props} /> : null}
    </div>
  );
};

CorrectionPart.propTypes = {
  ...IconsPart.propTypes,
  failed: PropTypes.bool,
  corrections: AnswersCorrection.propTypes.corrections,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  stars: PropTypes.string,
  rank: PropTypes.string,
  gameOver: PropTypes.bool
};

const NextQuestionPart = (props, context) => {
  const {cta, type, extraLifeGranted, gameOver, failed = false, lives = 0, mode} = props;
  const {title, nextStepTitle, showNextLevel = false, ...linkProps} = cta || {};
  let dataNext;

  switch (type) {
    case 'popinCorrection': {
      if (gameOver) {
        dataNext = 'game-over';
      } else if (failed) {
        if (lives > 0) {
          dataNext = 'continue-failure';
        } else if (extraLifeGranted) {
          dataNext = 'continue-used-extra-life';
        }
      } else {
        dataNext = 'continue-success';
      }
      break;
    }

    case 'popinEnd': {
      if (failed) {
        dataNext = 'redo-content';
      } else if (showNextLevel) {
        dataNext = 'next-level';
      } else {
        dataNext = 'home';
      }
    }
  }

  const nextStep = nextStepTitle ? (
    <div
      className={classnames(
        gameOver ? style.gameOverSubtitle : style.nextStepTitle,
        style.innerHTML
      )}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: nextStepTitle}}
    />
  ) : null;

  return mode !== 'scorm' ? (
    <Link
      {...linkProps}
      className={classnames(style.nextSection, getLinkStyle({gameOver, extraLifeGranted}))}
      data-name="nextLink"
      data-popin={type}
      data-next={dataNext}
    >
      <div className={style.wrapperNextSection}>
        <div className={style.nextButton}>
          {title}
          <ArrowRight color="inherit" className={style.nextButtonIcon} />
        </div>
        {nextStep}
      </div>
    </Link>
  ) : null;
};

NextQuestionPart.propTypes = {
  cta: PropTypes.shape({
    ...Link.propTypes,
    title: PropTypes.string,
    nextStepTitle: PropTypes.string,
    showNextLevel: PropTypes.bool
  }),
  type: PropTypes.oneOf(['popinCorrection', 'popinEnd']).isRequired,
  extraLifeGranted: PropTypes.bool,
  gameOver: PropTypes.bool,
  failed: PropTypes.bool,
  lives: PropTypes.number,
  mode: PropTypes.string
};

const PopinHeader = (props, context) => {
  const {
    animated,
    failed,
    title,
    subtitle,
    lives,
    stars,
    rank,
    corrections,
    cta,
    extraLifeGranted,
    gameOver = false,
    type,
    mode = 'default'
  } = props;
  const state = buildClass(failed, 'success', 'failed', null);

  const nextLink = cta ? (
    <NextQuestionPart
      cta={cta}
      type={type}
      extraLifeGranted={extraLifeGranted}
      failed={failed}
      gameOver={gameOver}
      lives={lives}
      mode={mode}
    />
  ) : null;

  return (
    <div
      className={classnames(
        mode === 'scorm' && style.scorm,
        cta ? mode !== 'scorm' && style.header : mode !== 'scorm' && style.headerWithoutCTA
      )}
      data-name="popinHeader"
      data-state={state}
    >
      <div className={classnames(mode !== 'scorm' && style.headerTitle)}>
        <CorrectionPart
          title={title}
          subtitle={subtitle}
          lives={lives}
          animated={animated}
          stars={stars}
          rank={rank}
          failed={failed}
          gameOver={gameOver}
          revival={extraLifeGranted}
          corrections={corrections}
          mode={mode}
        />
        {nextLink}
      </div>
    </div>
  );
};

PopinHeader.contextTypes = {
  skin: Provider.childContextTypes.skin
};

PopinHeader.propTypes = {
  cta: NextQuestionPart.propTypes.cta,
  type: NextQuestionPart.propTypes.type,
  extraLifeGranted: NextQuestionPart.propTypes.extraLifeGranted,
  failed: NextQuestionPart.propTypes.failed,
  gameOver: NextQuestionPart.propTypes.gameOver,
  lives: NextQuestionPart.propTypes.lives,
  title: CorrectionPart.propTypes.title,
  subtitle: CorrectionPart.propTypes.subtitle,
  animated: CorrectionPart.propTypes.animated,
  stars: CorrectionPart.propTypes.stars,
  rank: CorrectionPart.propTypes.rank,
  corrections: CorrectionPart.propTypes.corrections,
  mode: PropTypes.oneOf(['scorm', 'default'])
};

export default PopinHeader;
