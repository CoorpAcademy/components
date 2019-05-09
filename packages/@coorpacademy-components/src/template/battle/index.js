import React from 'react';
import PropTypes from 'prop-types';
import Provider from '../../atom/provider';
import Cta from '../../atom/cta';
import Link from '../../atom/link';
import Avatar from '../../atom/avatar';
import style from './style.css';

function backgroundImage(url) {
  return {
    background: `linear-gradient(
      rgba(0, 0, 0, 0.55), 
      rgba(0, 0, 0, 0.55)
      ),url(${url})`,
    backgroundSize: 'cover'
  };
}

const Button = props => {
  return (
    <div>
      <Cta
        className={`${props.className} ${style[props.buttonColor]}`}
        submitValue={props.submitValue}
        onClick={props.onClick}
        secondary={props.secondary}
      />
    </div>
  );
};
const App = (props, context) => {
  const {translate} = context;
  const {
    name,
    courseName,
    submitReviewCourseValue,
    submitStartBattleValue,
    levelName,
    onClickButtonBattle,
    onClickButtonCourse,
    urlAvatar,
    urlImg
  } = props;
  const challengeLabel = translate('challenges you on');

  return (
    <div className={style.container}>
      <div className={`${style.image}`} style={backgroundImage(urlImg)}>
        <div className={style.levelContainer}>
          <div className={style.level}>
            <p>{levelName}</p>
          </div>
        </div>
        <div className={style.avt}>
          <Avatar url={urlAvatar} />
        </div>
        <div className={style.wrapper}>
          <p>
            <span>{name} </span>
            {challengeLabel}
          </p>
          <h3>{courseName}</h3>
        </div>
      </div>
      <div className={style.buttons}>
        <Button submitValue={submitReviewCourseValue} onClick={onClickButtonCourse} secondary />
        <Button submitValue={submitStartBattleValue} onClick={onClickButtonBattle} />
      </div>
    </div>
  );
};

App.contextTypes = {
  translate: Provider.childContextTypes.translate
};

App.propTypes = {
  name: PropTypes.string,
  courseName: PropTypes.string,
  submitReviewCourseValue: Link.propTypes.children,
  submitStartBattleValue: Link.propTypes.children,
  levelName: Link.propTypes.children,
  onClickButtonBattle: PropTypes.func,
  onClickButtonCourse: PropTypes.func,
  urlAvatar: PropTypes.string,
  urlImg: PropTypes.string
};

export default App;
