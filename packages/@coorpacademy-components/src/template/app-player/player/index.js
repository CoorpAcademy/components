import React from 'react';
import PropTypes from 'prop-types';
import CMPopin from '../../../molecule/cm-popin';
import SlidesPlayer from './slides';
import style from './style.css';

const SlidePlayer = props => {
  const {player, popin} = props;
  const backgroundImage = player.backgroundUrl ? `url(${player.backgroundUrl})` : null;
  return (
    <div data-name="slidePlayer" className={style.wrapper}>
      <div className={style.playerWrapper}>
        <div className={style.playerBackground} style={{backgroundImage}} />
        <SlidesPlayer {...player} popinError={popin}/>
        {popin ? <CMPopin {...popin} /> : null}
      </div>
    </div>
  );
};

SlidePlayer.propTypes = {
  player: PropTypes.shape(SlidesPlayer.propTypes),
  popin: PropTypes.shape(CMPopin.propTypes)
};

export default SlidePlayer;
