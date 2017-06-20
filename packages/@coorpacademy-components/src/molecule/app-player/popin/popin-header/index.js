import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import ArrowRight from '@coorpacademy/nova-icons/composition/navigation/arrow-right';
import Provider from '../../../../atom/provider';
import Life from '../../../../atom/life';
import Link from '../../../../atom/link';
import style from './style.css';

const WrongAnswer = ({text}) => <p className={style.wrongAnswer}>{text}</p>;

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
  const {fail = false, wrongAnswer, title, subtitle} = props;
  const className = fail ? style.correctionSectionFail : style.correctionSectionDefault;

  return (
    <div className={className}>
      <div className={style.titlesWrapper}>
        <h1 className={style.title}>{title}</h1>
        <h2 className={style.subtitle}>{subtitle}</h2>
        {fail && wrongAnswer ? <WrongAnswer text={wrongAnswer} /> : null}
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
    </div>
  );
};

NextQuestionPart.contextTypes = {
  skin: Provider.childContextTypes.skin
};

const PopinHeader = props => {
  const {fail = false, title, subtitle, lives, stars, rank, wrongAnswer, cta} = props;

  return (
    <div className={style.header}>
      <CorrectionPart
        title={title}
        subtitle={subtitle}
        lives={lives}
        stars={stars}
        rank={rank}
        fail={fail}
        wrongAnswer={wrongAnswer}
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
  wrongAnswer: PropTypes.string,
  cta: PropTypes.shape({
    title: PropTypes.string,
    href: PropTypes.url
  })
};

export default PopinHeader;
