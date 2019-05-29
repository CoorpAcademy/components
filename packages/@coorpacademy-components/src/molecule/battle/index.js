import React from 'react';
import PropTypes from 'prop-types';
import Provider from '../../atom/provider';
import Link from '../../atom/link';
import Avatar from '../../atom/avatar';
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
  return (
    <div>
      <Cta submitValue={props.submitValue} onClick={props.onClick} secondary={props.secondary} />
    </div>
  );
};
const Battle = (props, context) => {
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
  const challengeLabel = translate('is challenging you', {
    name: `<strong>${name}</strong>`,
    courseName: `<p><strong>${courseName}</strong></p>`
  });

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

Battle.contextTypes = {
  translate: Provider.childContextTypes.translate
};

Button.propTypes = {
  onClick: Cta.propTypes.onClick,
  submitValue: Cta.propTypes.submitValue,
  secondary: Cta.propTypes.secondary
};

Battle.propTypes = {
  name: PropTypes.string.isRequired,
  courseName: PropTypes.string.isRequired,
  submitReviewCourseValue: Button.propTypes.submitValue.isRequired,
  submitStartBattleValue: Button.propTypes.submitValue.isRequired,
  levelName: Link.propTypes.children.isRequired,
  onClickButtonBattle: Button.propTypes.onClick.isRequired,
  onClickButtonCourse: Button.propTypes.onClick.isRequired,
  urlAvatar: Avatar.propTypes.url.isRequired,
  urlImg: PropTypes.string.isRequired
};

export default Battle;
