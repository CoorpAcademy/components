import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import zip from 'lodash/fp/zip';
import pipe from 'lodash/fp/pipe';
import times from 'lodash/fp/times';
import compact from 'lodash/fp/compact';
import flatten from 'lodash/fp/flatten';
import ArrowRight from '@coorpacademy/nova-icons/composition/navigation/arrow-right';
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
  const answers = corrections.map(correction => (
    <span
      key={correction.answer}
      className={correction.isCorrect ? style.correctAnswer : style.wrongAnswer}
    >
      {correction.answer}
    </span>
  ));
  return <p className={style.fullAnswer}>{joinBySeparator(answers)}</p>;
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
const CorrectionPart = props => {
  const {fail = false, corrections = [], title, subtitle} = props;
  const className = fail ? style.correctionSectionFail : style.correctionSectionDefault;

  return (
    <div className={className}>
      <div className={style.titlesWrapper}>
        <h1 className={style.title}>{title}</h1>
        <h2 className={style.subtitle}>{subtitle}</h2>
        {fail && corrections.length ? <AnswersCorrection corrections={corrections} /> : null}
      </div>
      <IconsPart {...props} />
    </div>
  );
};

const NextQuestionPart = (props, context) => {
  const {title, ...linkProps} = props;
  const {skin} = context;
  const mediumColor = get('common.medium', skin);

  return (
    <div className={style.nextSection}>
      <Link {...linkProps} className={style.nextButton}>
        {title}
        <ArrowRight color={mediumColor} className={style.nextButtonIcon} />
      </Link>
      <div className={style.buttonOverlay} />
    </div>
  );
};

NextQuestionPart.contextTypes = {
  skin: Provider.childContextTypes.skin
};

const PopinHeader = props => {
  const {fail = false, title, subtitle, lives, stars, rank, corrections, cta} = props;

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
      <NextQuestionPart {...cta} />
    </div>
  );
};

PopinHeader.propTypes = {
  fail: PropTypes.bool,
  lives: PropTypes.number,
  stars: PropTypes.string,
  rank: PropTypes.string,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  corrections: PropTypes.arrayOf(
    PropTypes.shape({
      answer: PropTypes.string.isRequired,
      isCorrect: PropTypes.bool.isRequired
    })
  ),
  cta: PropTypes.shape({
    title: PropTypes.string,
    href: PropTypes.url
  })
};

export default PopinHeader;
