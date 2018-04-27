import React from 'react';
import PropTypes from 'prop-types';
import SlidesPlayer from './slides/slides-player';
import Header from './player-header';
import style from './style.css';

const SlidePlayer = props => {
  const {header, player} = props;
  const backgroundImage = player.backgroundUrl ? `url(${player.backgroundUrl})` : null;
  return (
    <div data-name="slidePlayer" className={style.wrapper}>
      <Header {...header} />
      <div className={style.wrapperImg}>
        <div className={style.img} style={{backgroundImage}} />
      </div>
      <div className={style.playerWrapper}>
        <SlidesPlayer {...player} />
      </div>
    </div>
  );
};

SlidePlayer.propTypes = {
  header: PropTypes.shape(Header.propTypes),
  player: PropTypes.shape(SlidesPlayer.propTypes),
  IsIE: PropTypes.bool
};

export default SlidePlayer;
