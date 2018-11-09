import React from 'react';
import PropTypes from 'prop-types';
import SlidesPlayer from './slides';
import style from './style.css';

const SlidePlayer = props => {
  const {player} = props;
  const backgroundImage = player.backgroundUrl ? `url(${player.backgroundUrl})` : null;
  return (
    <div data-name="slidePlayer" className={style.wrapper}>
      <div className={style.playerWrapper}>
        <div className={style.playerBackground} style={{backgroundImage}} />
        <SlidesPlayer {...player} />
      </div>
    </div>
  );
};

SlidePlayer.propTypes = {
  player: PropTypes.shape(SlidesPlayer.propTypes)
};

export default SlidePlayer;
