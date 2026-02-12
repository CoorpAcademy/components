import React from 'react';
import PropTypes from 'prop-types';
import {size} from 'lodash/fp';
import CMPopin from '../../../molecule/cm-popin';
import SlidesPlayer from './slides';
import TourGuideManager, {TourGuideConfigPropType} from './tourguide';
import style from './style.css';

const SlidePlayer = props => {
  const {player, tourguide, popin} = props;
  const backgroundImage = player.backgroundUrl ? `url(${player.backgroundUrl})` : null;

  const hasTourguide = tourguide && size(tourguide.steps) > 0;

  return (
    <div data-name="slidePlayer" className={style.wrapper}>
      <div className={style.playerWrapper}>
        <div className={style.playerBackground} style={{backgroundImage}} />
        <SlidesPlayer {...player} popinError={popin} />
        {popin ? <CMPopin {...popin} /> : null}
      </div>
      {hasTourguide ? <TourGuideManager {...tourguide} /> : null}
    </div>
  );
};

SlidePlayer.propTypes = {
  player: PropTypes.shape(SlidesPlayer.propTypes),
  tourguide: TourGuideConfigPropType,
  popin: PropTypes.shape(CMPopin.propTypes)
};

export default SlidePlayer;
