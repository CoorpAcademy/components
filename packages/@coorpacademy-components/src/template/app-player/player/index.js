import React from 'react';
import PropTypes from 'prop-types';
import SlidesPlayer from '../../../molecule/slides/slides-player';
import Header from './player-header';
import style from './style.css';

const SlidePlayer = props => {
  const {header, player} = props;

  return (
    <div data-name="slidePlayer" className={style.wrapper}>
      <Header {...header} />
      <div className={style.playerWrapper}>
        <SlidesPlayer {...player} />
      </div>
    </div>
  );
};

SlidePlayer.propTypes = {
  header: PropTypes.shape(Header.propTypes),
  player: PropTypes.shape(SlidesPlayer.propTypes)
};

export default SlidePlayer;
