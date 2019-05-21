import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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
        className={classnames(props.className, style[props.buttonColor])}
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
  const challengeLabel = translate('is challenging you', {name, courseName});

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
        <div
          className={style.wrapper}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: challengeLabel
          }}
        />
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
  name: PropTypes.string.isRequired,
  courseName: PropTypes.string.isRequired,
  submitReviewCourseValue: Link.propTypes.children.isRequired,
  submitStartBattleValue: Link.propTypes.children.isRequired,
  levelName: Link.propTypes.children.isRequired,
  onClickButtonBattle: PropTypes.func.isRequired,
  onClickButtonCourse: PropTypes.func.isRequired,
  urlAvatar: PropTypes.string.isRequired,
  urlImg: PropTypes.string.isRequired
};

export default App;
