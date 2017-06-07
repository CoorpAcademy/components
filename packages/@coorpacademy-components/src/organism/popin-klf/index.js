import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import stopPropagation from '../../util/bubbling';
import Lives from '../../molecule/lives';
import style from './style.css';

const PopinKlf = (props, context) => {
  const {skin} = context;

  const {
    type,
    answerDescPart1,
    answerDescPart2,
    keyPoint,
    remaining = 3,
    total = 3,
    answerCoreDesc,
    didyouknow,
    dykDesc,
    assistance,
    lessonHref,
    nextHref,
    ctaLesson,
    ctaNext,
    onClick,
    closeOnClick,
    good,
    bad
  } = props;

  const primary = getOr('#00B0FF', ['common', 'primary'], skin);

  function createMarkup() {
    return {__html: bad};
  }

  const resultView = type ? (
    <div className={style.answergood}>{good}</div>
  ) : (
    <div className={style.answerwrong}>{bad}</div>
  );

  return (
     <div className={style.default} onClick={closeOnClick}>
      <div className={style.popin} onClick={stopPropagation}>
        <div className={style.header} onClick={closeOnClick}>
          {resultView}
          <div className={style.lives}>
            <Lives remaining={remaining} total={total} />
          </div>
          <div className={style.answerDesc}>
            <div className={style.answerDescPart1}>
              {answerDescPart1}
            </div>
            <div className={style.answerDescPart2}>
              {answerDescPart2}
            </div>
          </div>
        </div>
        <div className={style.content} onClick={closeOnClick}>
          <div className={style.answerCoreTitle}>{keyPoint}</div>
          <div className={style.answerCoreDesc}>
            {answerCoreDesc}
          </div>
          <div className={style.dykTitle}>
            {didyouknow}
          </div>
          <div className={style.dykDesc}>
            <span className={style.dykicon}/>
            <p>{dykDesc}</p>
          </div>
          <a
            className={style.assistance}
            onClick={onClick}
            href={assistance}
          >
            <span className={style.assistanceIco}/>
          </a>
        </div>
        <div className={style.footer} onClick={closeOnClick}>
          <a
            className={style.lesson}
            href={lessonHref}
            onClick={onClick}
            style={{
              color: primary
            }}
          ><span className={style.video} /> {ctaLesson}</a>
          <a
            className={style.next}
            onClick={onClick}
            href={nextHref}
            style={{
              backgroundColor: primary
            }}
          >{ctaNext} <span className={style.arrow} /></a>
        </div>
      </div>
    </div>
  );
};

PopinKlf.contextTypes = {
  
};

PopinKlf.propTypes = {
  type: PropTypes.string,
  remaining: PropTypes.string,
  total: PropTypes.number,
  content: PropTypes.number,
  answerDescPart1: PropTypes.string,
  answerDescPart2: PropTypes.string,
  keyPoint: PropTypes.string,
  answerCoreDesc: PropTypes.string,
  didyouknow: PropTypes.string,
  dykDesc: PropTypes.string,
  closeOnClick: PropTypes.func,
  onClick: PropTypes.func,
  ctaLesson: PropTypes.string,
  ctaNext: PropTypes.string,
  lessonHref: PropTypes.string,
  ctaHref: PropTypes.string,
  assistance: PropTypes.string,
  good: PropTypes.string,
  bad: PropTypes.string
};

export default PopinKlf;