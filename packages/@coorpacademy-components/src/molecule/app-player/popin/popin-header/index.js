import React from 'react';
import PropTypes from 'prop-types';
import compact from 'lodash/fp/compact';
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

const Lifes = ({lives, fail, animated}) => {
  if (isNil(lives)) return null;

  return <Life fail={fail} count={lives} animated={animated} className={style.life} />;
};

const IconsPart = props => {
  const {lives, fail, stars, rank, animated} = props;
  return (
    <div className={style.iconsWrapper}>
      <Lifes lives={lives} fail={fail} animated={animated} />
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
  const {fail, corrections = [], title, subtitle, stars, rank, jokers} = props;
  const isLoading = isNil(fail);
  const className = buildClass(
    fail,
    stars && rank ? style.correctionSectionEndSuccess : style.correctionSectionSuccess,
    jokers > 0 ? style.correctionSectionFail : style.correctionSectionFailGameOver,
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

const NextQuestionPart = props => {
  const {title, isJoker, ...linkProps} = props || {};
  const className = isJoker ? style.nextSectionGameOver : style.nextSection;

  return (
    <Link className={className} data-name="nextLink" {...linkProps}>
      <div data-name="nextButton" className={style.nextButton}>
        {title}
        <ArrowRight color="inherit" className={style.nextButtonIcon} />
      </div>
    </Link>
  );
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
    jokers,
    jokerContent
  } = props;

  const state = buildClass(fail, 'success', 'fail', null);
  const jokerView = jokers === 0
    ? <div className={style.jokerContent}>
        <Heart color="#f73f52" width="20px" className={style.heart} />
        {jokerContent}
      </div>
    : null;

  return (
    <div className={style.header} data-name="popinHeader" data-state={state}>
      <div className={style.headerTitle}>
        <CorrectionPart
          title={title}
          subtitle={subtitle}
          lives={lives}
          animated={animated}
          stars={stars}
          rank={rank}
          fail={fail}
          jokers={jokers}
          corrections={corrections}
        />
        {NextQuestionPart(cta, context)}
      </div>
      {jokerView}
    </div>
  );
};

PopinHeader.contextTypes = {
  skin: Provider.childContextTypes.skin
};

PopinHeader.propTypes = {
  fail: Life.propTypes.fail,
  jokers: PropTypes.bool,
  lives: Life.propTypes.count,
  animated: Life.propTypes.animated,
  stars: PropTypes.string,
  rank: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  jokerContent: PropTypes.string,
  corrections: AnswersCorrection.propTypes.corrections,
  cta: PropTypes.shape({
    ...Link.propTypes,
    title: PropTypes.string
  })
};

export default PopinHeader;
