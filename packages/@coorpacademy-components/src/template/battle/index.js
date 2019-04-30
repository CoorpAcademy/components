import React from 'react';
import PropTypes from 'prop-types';
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
const App = props => {
  return (
    <div className={style.container}>
      <div className={`${style.image}`} style={backgroundImage(props.urlImg)}>
        <div style={{width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
          <div className={style.level}>
            <p>{props.levelName}</p>
          </div>
        </div>
        <div className={style.avt}>
          <Avatar avatar={props.avatar} />
        </div>
        <div className={style.wrapper}>
          <p>
            <span>{props.name} </span>
            is challenging you
          </p>
          <h3>{`${props.courseName}`}</h3>
        </div>
      </div>
      <div className={style.buttons}>
        <Button
          submitValue={props.submitReviewCourseValue}
          onClick={props.onClickButtonCourse}
          secondary
        />
        <Button submitValue={props.submitStartBattleValue} onClick={props.onClickButtonBattle} />
      </div>
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string,
  courseName: PropTypes.string,
  submitReviewCourseValue: Link.propTypes.children,
  submitStartBattleValue: Link.propTypes.children,
  levelName: Link.propTypes.children,
  onClickButtonBattle: PropTypes.func,
  onClickButtonCourse: PropTypes.func,
  avatar: PropTypes.string,
  urlImg: PropTypes.string
};

export default App;
