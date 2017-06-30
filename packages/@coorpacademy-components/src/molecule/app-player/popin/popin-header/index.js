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
  const answers = corrections.map(correction =>
    <span
      key={correction.answer}
      className={correction.isCorrect ? style.correctAnswer : style.wrongAnswer}
    >
      {correction.answer}
    </span>
  );
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

const IconsPart = props => {
  const {lives, fail, stars, rank} = props;
  const livesIcon =
    lives !== undefined && <Life fail={fail} count={lives} className={style.life} />;
  const starsIcon = stars !== undefined && <p className={style.icon}>{stars}</p>;
  const rankIcon = rank !== undefined && <p className={style.icon}>{rank}</p>;

  return (
    <div className={style.lifeWrapper}>
      {livesIcon}
      {starsIcon}
      {rankIcon}
    </div>
  );
};

const buildClass = (value, success, fail, loading) => {
  if (loading && isNil(value)) return loading;
  return value ? success : fail;
};

const CorrectionPart = props => {
  const {fail, corrections = [], title, subtitle} = props;
  const isLoading = isNil(fail);
  const className = buildClass(
    !fail,
    style.correctionSectionSuccess,
    style.correctionSectionFail,
    style.correctionSectionLoading
  );

  return (
    <div className={className}>
      <div className={style.titlesWrapper}>
        {isLoading ? <Loader /> : null}
        <h1 className={style.title}>{title}</h1>
        <h2 className={style.subtitle}>{subtitle}</h2>
        {fail && corrections.length ? <AnswersCorrection corrections={corrections} /> : null}
      </div>
      <IconsPart {...props} />
    </div>
  );
};

const NextQuestionPart = (props, context) => {
  const isLoading = isNil(props);
  const {title, ...linkProps} = props || {};
  const {skin} = context;
  const mediumColor = get('common.medium', skin);

  return (
    <div className={isLoading ? style.nextSectionLoading : style.nextSection}>
      {isLoading
        ? null
        : <Link {...linkProps} className={style.nextButton}>
            {title}
            <ArrowRight color={mediumColor} className={style.nextButtonIcon} />
          </Link>}
      <div className={style.buttonOverlay} />
    </div>
  );
};

const PopinHeader = (props, context) => {
  const {fail, title, subtitle, lives, stars, rank, corrections, cta} = props;

  return (
    <div className={style.header}>
      <CorrectionPart
        title={title}
        subtitle={subtitle}
        lives={lives}
        stars={stars}
        rank={rank}
        fail={fail}
        corrections={corrections}
      />
      {NextQuestionPart(cta, context)}
    </div>
  );
};

PopinHeader.contextTypes = {
  skin: Provider.childContextTypes.skin
};

PopinHeader.propTypes = {
  fail: PropTypes.bool,
  lives: PropTypes.number,
  stars: PropTypes.string,
  rank: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  corrections: AnswersCorrection.propTypes.corrections,
  cta: PropTypes.shape({
    title: PropTypes.string,
    href: PropTypes.url
  })
};

export default PopinHeader;
