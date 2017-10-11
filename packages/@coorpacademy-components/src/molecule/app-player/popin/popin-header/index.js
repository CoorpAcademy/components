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
import ArrowRight from '@coorpacademy/nova-icons/composition/navigation/arrow-right';
import ChartsIcon from '@coorpacademy/nova-icons/composition/coorpacademy/charts';
import StarIcon from '@coorpacademy/nova-icons/composition/coorpacademy/star';
import Heart from '@coorpacademy/nova-icons/solid/vote-and-rewards/vote-heart';
import HeartBroken from '@coorpacademy/nova-icons/composition/coorpacademy/broken-heart';
import classnames from 'classnames';
import Loader from '../../../../atom/loader';
import Life from '../../../../atom/life';
import Link from '../../../../atom/link';
import Provider from '../../../../atom/provider';
import style from './style.css';

const separator = index => <span key={index} className={style.answerSeparator}>/</span>;

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
      >
        {correction.answer}
      </span>
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

const Rank = ({rank}, {skin}) => {
  const positive = get('common.positive', skin);
  if (isNil(rank)) return null;
  return (
    <div className={style.centerContent}>
      <div className={style.iconBubble}>
        <ChartsIcon className={style.icon} color={positive} />
      </div>
      <span className={style.iconText}>{rank}</span>
    </div>
  );
};

Rank.contextTypes = {
  skin: Provider.childContextTypes.skin
};

const Stars = ({stars}, {skin}) => {
  const positive = get('common.positive', skin);
  if (isNil(stars)) return null;

  return (
    <div className={style.centerContent}>
      <div className={style.iconBubble}>
        <StarIcon className={style.icon} color={positive} />
      </div>
      <span data-name="iconText" className={style.iconText}>{stars}</span>
    </div>
  );
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

const IconsPart = props => {
  const {lives, fail, stars, rank, animated, revival} = props;
  return (
    <div className={style.iconsWrapper}>
      <Lifes lives={lives} fail={fail} animated={animated} revival={revival} />
      <Stars stars={stars} />
      <Rank rank={rank} />
    </div>
  );
};

const buildClass = (value, success, fail, loading) => {
  if (loading && isNil(value)) return loading;
  return value ? fail : success;
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
        <h1 data-name="title" className={style.title}>{title}</h1>
        <h2 className={style.subtitle}>{subtitle}</h2>
        {fail && corrections.length ? <AnswersCorrection corrections={corrections} /> : null}
      </div>
      <IconsPart {...props} />
    </div>
  );
};

const NextQuestionPart = (props, context) => {
  const {cta, extraLife, revival, fail} = props;
  const {title, ...linkProps} = cta || {};
  const {active: isExtraLife} = extraLife;
  const isGameOver = !revival && (fail || isExtraLife);

  let dataNext;
  if (fail) {
    if (isEmpty(extraLife)) {
      dataNext = 'redo-content';
    } else if (revival) {
      dataNext = 'continue-used-extra-life';
    } else if (isExtraLife) {
      dataNext = 'game-over-with-extra-life';
    } else {
      dataNext = 'game-over-without-extra-life';
    }
  } else if (isEmpty(extraLife)) {
    dataNext = 'home';
  } else {
    dataNext = 'continue-success';
  }

  return (
    <Link
      className={classnames(
        style.nextSection,
        isGameOver && style.gameOver,
        (isEmpty(extraLife) || revival) && style.oneMoreLife
      )}
      data-name="nextLink"
      {...linkProps}
    >

      <div data-name="nextButton" data-next={dataNext} className={style.nextButton}>
        {title}
        <ArrowRight color="inherit" className={style.nextButtonIcon} />
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
      {exhausted
        ? <HeartBroken color={negative} outline={white} outlineWidth={3} className={style.heart} />
        : <Heart color={negative} outline={white} outlineWidth={4} className={style.heart} />}
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
  const RemainingLifePart = isExtraLife || exhausted
    ? <RemainingLife extraLife={extraLife} revival={revival} />
    : null;

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
        <NextQuestionPart cta={cta} extraLife={extraLife} revival={revival} fail={fail} />

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
    title: PropTypes.string
  })
};

export default PopinHeader;
