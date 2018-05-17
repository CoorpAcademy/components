import React from 'react';
import PropTypes from 'prop-types';
import compact from 'lodash/fp/compact';
import flatten from 'lodash/fp/flatten';
import get from 'lodash/fp/get';
import isNil from 'lodash/fp/isNil';
import pipe from 'lodash/fp/pipe';
import times from 'lodash/fp/times';
import zip from 'lodash/fp/zip';
import round from 'lodash/fp/round';
import _parseInt from 'lodash/fp/parseInt';
import multiply from 'lodash/fp/multiply';
import ArrowRight from '@coorpacademy/nova-icons/composition/navigation/arrow-right';
import ChartsIcon from '@coorpacademy/nova-icons/composition/coorpacademy/charts';
import StarIcon from '@coorpacademy/nova-icons/composition/coorpacademy/star';
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
        className={correction.isCorrect ? style.correctAnswer : style.wrongAnswer}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: correction.answer
        }}
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
            <ChartsIcon className={style.icon} color={positive} />
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
            <StarIcon className={style.icon} color={positive} />
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

const buildClass = (value, success, failed, loading) => {
  if (loading && isNil(value)) return loading;
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

const CorrectionPart = props => {
  const {failed, corrections = [], title, subtitle, stars, rank, gameOver} = props;
  const isLoading = isNil(failed);
  const className = buildClass(
    failed,
    stars && rank ? style.correctionSectionEndSuccess : style.correctionSectionSuccess,
    gameOver ? style.correctionSectionFailGameOver : style.correctionSectionFail,
    style.correctionSectionLoading
  );

  return (
    <div data-name="correctionSection" className={className}>
      <div className={style.titlesWrapper}>
        {isLoading ? <Loader /> : null}
        <h1 data-name="title" className={style.title}>
          {title}
        </h1>
        <h2 className={style.subtitle}>{subtitle}</h2>
        {failed && corrections.length ? <AnswersCorrection corrections={corrections} /> : null}
      </div>
      <IconsPart {...props} />
    </div>
  );
};

const NextQuestionPart = (props, context) => {
  const {cta, type, extraLifeGranted, gameOver, failed = false, lives = 0} = props;
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
    <div className={gameOver ? style.gameOverSubtitle : style.nextStepTitle}>{nextStepTitle}</div>
  ) : null;

  return (
    <Link
      className={classnames(style.nextSection, getLinkStyle({gameOver, extraLifeGranted}))}
      data-name="nextLink"
      data-popin={type}
      data-next={dataNext}
      {...linkProps}
    >
      <div className={style.wrapperNextSection}>
        <div className={style.nextButton}>
          {title}
          <ArrowRight color="inherit" className={style.nextButtonIcon} />
        </div>
        {nextStep}
      </div>
    </Link>
  );
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
    type
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
    />
  ) : null;

  return (
    <div
      className={cta ? style.header : style.headerWithoutCTA}
      data-name="popinHeader"
      data-state={state}
    >
      <div className={style.headerTitle}>
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
  failed: Life.propTypes.failed,
  gameOver: PropTypes.bool,
  lives: Life.propTypes.count,
  extraLifeGranted: PropTypes.bool,
  animated: Life.propTypes.animated,
  stars: PropTypes.string,
  rank: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.oneOf(['popinCorrection', 'popinEnd']).isRequired,
  corrections: AnswersCorrection.propTypes.corrections,
  cta: PropTypes.shape({
    ...Link.propTypes,
    title: PropTypes.string,
    nextStepTitle: PropTypes.string,
    showNextLevel: PropTypes.bool
  })
};

export default PopinHeader;
