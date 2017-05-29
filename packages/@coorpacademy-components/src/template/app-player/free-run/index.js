import React from 'react';
import PropTypes from 'prop-types';
import SlidesHeader from '../../../molecule/slides/slides-header';
import SlidesPlayer from '../../../molecule/slides/slides-player';
import style from './style.css';

const FreeRunPlayer = props => {
  const {header, player} = props;

  return (
    <div className={style.wrapper}>
      <SlidesHeader {...header} />
      <div className={style.playerWrapper}>
        <SlidesPlayer {...player} />
      </div>
    </div>
  );
};

FreeRunPlayer.propTypes = {
  header: PropTypes.shape(SlidesHeader.propTypes),
  player: PropTypes.shape(SlidesPlayer.propTypes)
};
export default FreeRunPlayer;
