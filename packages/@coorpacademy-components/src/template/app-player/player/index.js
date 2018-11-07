import React from 'react';
import PropTypes from 'prop-types';
import SlidesPlayer from './slides';
import style from './style.css';

const SlidePlayer = props => {
  const backgroundImage = props.backgroundUrl ? `url(${props.backgroundUrl})` : null;
  return (
    <div data-name="slidePlayer" className={style.wrapper}>
      <div className={style.playerWrapper}>
        <div className={style.playerBackground} style={{backgroundImage}} />
        <SlidesPlayer {...props} />
      </div>
    </div>
  );
};

SlidePlayer.propTypes = PropTypes.shape(SlidesPlayer.propTypes);

export default SlidePlayer;
