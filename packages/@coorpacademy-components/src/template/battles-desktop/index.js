import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../atom/link';
import Battle from '../battle';
import style from './style.css';

const Battles = props => {
  const battles = props.battles;
  return (
    <ul className={style.cards}>
      {battles.map(battle => (
        <li key={battle.name} className={style.cards__item}>
          <div className={style.card}>
            <Battle
              name={battle.name}
              courseName={battle.courseName}
              levelName={battle.levelName}
              urlAvatar={battle.urlAvatar}
              urlImg={battle.urlImg}
              submitReviewCourseValue={battle.submitReviewCourseValue}
              submitStartBattleValue={battle.submitStartBattleValue}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

Battles.propTypes = {
  battles: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      courseName: PropTypes.string,
      borderColor: PropTypes.string,
      submitReviewCourseValue: Link.propTypes.children,
      submitStartBattleValue: Link.propTypes.children,
      levelName: Link.propTypes.children,
      onClickButtonBattle: PropTypes.func,
      onClickButtonCourse: PropTypes.func,
      urlAvatar: PropTypes.string,
      urlImg: PropTypes.string
    })
  )
};

export default Battles;
