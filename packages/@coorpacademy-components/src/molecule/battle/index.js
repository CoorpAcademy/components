import React from 'react';
import PropTypes from 'prop-types';
import Provider from '../../atom/provider';
import Link from '../../atom/link';
import Cta from '../../atom/cta';
import style from './style.css';

function backgroundImage(url) {
  return {
    background: `linear-gradient(
      rgba(0, 0, 0, 0.65), 
      rgba(0, 0, 0, 0.65)
      ),url(${url})`,
    backgroundSize: 'cover'
  };
}

const Button = props => {
  const {onClick, submitValue, secondary = false} = props;
  return (
    <div>
      <Cta submitValue={submitValue} onClick={onClick} secondary={secondary} />
    </div>
  );
};
const Battle = props => {
  const {
    submitReviewCourseValue,
    submitStartBattleValue,
    levelName,
    onClickButtonBattle,
    onClickButtonCourse,
    urlImg
  } = props;

  return (
    <div className={style.container}>
      <div className={`${style.image}`} style={backgroundImage(urlImg)}>
        <div className={style.levelContainer}>
          <div className={style.level}>
            <p>{levelName}</p>
          </div>
        </div>
        <div className={style.avt}>{props.children}</div>
      </div>
      <div className={style.buttons}>
        <Button submitValue={submitReviewCourseValue} onClick={onClickButtonCourse} secondary />
        <Button submitValue={submitStartBattleValue} onClick={onClickButtonBattle} />
      </div>
    </div>
  );
};

Battle.contextTypes = {
  translate: Provider.childContextTypes.translate
};

Button.propTypes = {
  onClick: Cta.propTypes.onClick,
  submitValue: Cta.propTypes.submitValue
};

Battle.propTypes = {
  id: PropTypes.string.isRequired,
  submitReviewCourseValue: Button.propTypes.submitValue.isRequired,
  submitStartBattleValue: Button.propTypes.submitValue.isRequired,
  levelName: Link.propTypes.children.isRequired,
  onClickButtonBattle: Button.propTypes.onClick.isRequired,
  onClickButtonCourse: Button.propTypes.onClick.isRequired,
  urlImg: PropTypes.string.isRequired
};

export default Battle;
