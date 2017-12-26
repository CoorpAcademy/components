import React from 'react';
import PropTypes from 'prop-types';
import compact from 'lodash/fp/compact';
import isEmpty from 'lodash/fp/isEmpty';
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
import Heart from '@coorpacademy/nova-icons/solid/vote-and-rewards/vote-heart';
import HeartBroken from '@coorpacademy/nova-icons/composition/coorpacademy/broken-heart';
import classnames from 'classnames';
import Loader from '../../../../atom/loader';
import Life from '../../../../atom/life';
import Link from '../../../../atom/link';
import Animation, {EASE_OUT_CUBIC} from '../../../../hoc/animation';
import Transition from '../../../../hoc/transition';
import AnimationScheduler, {AnimationAdapter} from '../../../../hoc/animation-scheduler';
import Provider from '../../../../atom/provider';
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

const Rank = ({fail, rank, animated, onAnimationEnd}, {skin}) => {
  const positive = get('common.positive', skin);
  if (fail || isNil(rank)) return null;
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
  fail: PropTypes.bool,
  rank: PropTypes.string,
  animated: Animation.propTypes.animated,
  onAnimationEnd: Animation.propTypes.onAnimationEnd
};

Rank.contextTypes = {
  skin: Provider.childContextTypes.skin
};

const Stars = ({fail, stars, animated, onAnimationEnd}, {skin}) => {
  const positive = get('common.positive', skin);
  if (fail || isNil(stars)) return null;

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
  fail: PropTypes.bool,
  stars: PropTypes.string,
  animated: Animation.propTypes.animated,
  onAnimationEnd: Animation.propTypes.onAnimationEnd
};

Stars.contextTypes = {
  skin: Provider.childContextTypes.skin
};

const Lifes = ({lives, fail, animated, revival}) => {
  if (isNil(lives)) return null;

  return (
    <Life fail={fail} count={lives} animated={animated} revival={revival} className={style.life} />
  );
};

Lifes.propTypes = {
  lives: Life.propTypes.count,
  fail: Life.propTypes.fail,
  animated: Life.propTypes.animated,
  revival: Life.propTypes.revival
};

const IconsPart = props => {
  const {lives, fail, stars, rank, animated, revival} = props;
  return (
    <AnimationScheduler animated>
      <div className={style.iconsWrapper}>
        <Lifes lives={lives} fail={fail} animated={animated} revival={revival} />

        <AnimationAdapter name="stars">
          <Stars stars={stars} fail={fail} />
        </AnimationAdapter>
        <AnimationAdapter name="rank" after="stars">
          <Rank rank={rank} fail={fail} />
        </AnimationAdapter>
      </div>
    </AnimationScheduler>
  );
};

IconsPart.propTypes = {
  lives: Lifes.propTypes.lives,
  fail: Lifes.propTypes.fail,
  stars: Stars.propTypes.stars,
  rank: Rank.propTypes.rank,
  animated: AnimationScheduler.propTypes.animated,
  revival: PropTypes.bool
};

const buildClass = (value, success, fail, loading) => {
  if (loading && isNil(value)) return loading;
  return value ? fail : success;
};

const getLinkStyle = ({isGameOver, extraLife, revival}) => {
  if (isEmpty(extraLife) || revival) {
    return style.oneMoreLife;
  } else if (isGameOver) {
    return style.gameOver;
  } else {
    return null;
  }
};

const CorrectionPart = props => {
  const {fail, corrections = [], title, subtitle, stars, rank, extraLife} = props;
  const {active: isExtraLife} = extraLife;
  const isLoading = isNil(fail);
  const className = buildClass(
    fail,
    stars && rank ? style.correctionSectionEndSuccess : style.correctionSectionSuccess,
    isExtraLife ? style.correctionSectionFailGameOver : style.correctionSectionFail,
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
        {fail && corrections.length ? <AnswersCorrection corrections={corrections} /> : null}
      </div>
      <IconsPart {...props} />
    </div>
  );
};

const NextQuestionPart = (props, context) => {
  const {cta, extraLife, revival, fail, lives} = props;
  const {title, type = 'correction', nextStepTitle, ...linkProps} = cta || {};
  const {active: isExtraLife} = extraLife;
  const isGameOver = !lives && !revival && (fail || isExtraLife);

  let dataNext;
  if (fail) {
    if (!lives) {
      if (isEmpty(extraLife)) {
        dataNext = 'redo-content';
      } else if (revival) {
        dataNext = 'continue-used-extra-life';
      } else if (isExtraLife) {
        dataNext = 'game-over-with-extra-life';
      } else {
        dataNext = 'game-over-without-extra-life';
      }
    } else {
      dataNext = 'continue-failure';
    }
  } else if (isEmpty(extraLife)) {
    if (type === 'next-level') {
      dataNext = 'next-level';
    } else {
      dataNext = 'home';
    }
  } else {
    dataNext = 'continue-success';
  }

  const nextStep = nextStepTitle ? (
    <div className={style.nextStepTitle}>{nextStepTitle}</div>
  ) : null;

  return (
    <Link
      className={classnames(style.nextSection, getLinkStyle({isGameOver, extraLife, revival}))}
      data-name="nextLink"
      data-next={dataNext}
      {...linkProps}
    >
      <div className={style.wrapperNextSection}>
        <div data-name="nextButton" data-next={dataNext} className={style.nextButton}>
          {title}
          <ArrowRight color="inherit" className={style.nextButtonIcon} />
        </div>
        {nextStep}
      </div>
    </Link>
  );
};

const RemainingLife = (props, {skin}) => {
  const {extraLife, revival} = props;
  const {sentence, active: isExtraLife, exhausted} = extraLife;
  const negative = get('common.negative', skin);
  const white = get('common.white', skin);

  return (
    <div
      className={classnames(
        style.remainingLifeRequestsSentence,
        isExtraLife && style.askLife,
        revival && style.oneMoreLifegained,
        exhausted && style.exhaustedLife
      )}
    >
      {exhausted ? (
        <HeartBroken color={negative} outline={white} outlineWidth={3} className={style.heart} />
      ) : (
        <Heart color={negative} outline={white} outlineWidth={4} className={style.heart} />
      )}
      {sentence}
    </div>
  );
};

RemainingLife.contextTypes = {
  skin: Provider.childContextTypes.skin
};

const PopinHeader = (props, context) => {
  const {
    animated,
    fail,
    title,
    subtitle,
    lives,
    stars,
    rank,
    corrections,
    cta,
    revival,
    extraLife = {}
  } = props;

  const state = buildClass(fail, 'success', 'fail', null);
  const {active: isExtraLife, exhausted} = extraLife;
  const RemainingLifePart =
    isExtraLife || exhausted ? <RemainingLife extraLife={extraLife} revival={revival} /> : null;

  return (
    <div
      className={classnames(
        style.header,
        isExtraLife && style.gameOverHeader,
        revival && style.revivalHeader,
        exhausted && style.exhaustedLifeHeader
      )}
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
          fail={fail}
          extraLife={extraLife}
          revival={revival}
          corrections={corrections}
        />
        <NextQuestionPart
          cta={cta}
          extraLife={extraLife}
          revival={revival}
          fail={fail}
          lives={lives}
        />
      </div>
      {RemainingLifePart}
    </div>
  );
};

PopinHeader.contextTypes = {
  skin: Provider.childContextTypes.skin
};

PopinHeader.propTypes = {
  fail: Life.propTypes.fail,
  extraLife: PropTypes.shape({
    active: PropTypes.bool,
    sentence: PropTypes.string,
    exhausted: PropTypes.bool
  }),
  lives: Life.propTypes.count,
  revival: PropTypes.bool,
  animated: Life.propTypes.animated,
  stars: PropTypes.string,
  rank: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  corrections: AnswersCorrection.propTypes.corrections,
  cta: PropTypes.shape({
    ...Link.propTypes,
    title: PropTypes.string,
    type: PropTypes.type,
    nextStepTitle: PropTypes.string
  })
};

export default PopinHeader;
