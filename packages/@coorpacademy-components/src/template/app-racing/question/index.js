import React from 'react';
import PropTypes from 'prop-types';
import SlidesPlayer from '../../app-player/player/slides/slides-player';
import style from './style.css';

const Question = props => {
  return (
    <div className={style.wrapper}>
      <SlidesPlayer questionBackgroundColor="transparent" {...props} />
    </div>
  );
};

Question.propTypes = {
  player: PropTypes.shape(SlidesPlayer.propTypes)
};

export default Question;
