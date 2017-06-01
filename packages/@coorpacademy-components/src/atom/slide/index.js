import React from 'react';
import PropTypes from 'prop-types';
import Cta from '../cta';
import style from './style.css';

const Slide = props => {
  const {cover, title, surtitle, cta, light, alignment = 'center'} = props;

  const imgCover = cover;

  cta.light = light;

  return (
    <div
      className={style.hero}
      style={{
        backgroundImage: imgCover
      }}
    >
      <div
        className={light ? style.light : style.content}
        style={{
          textAlign: alignment
        }}
      >
        <h2 className={style.surtitle}>{surtitle}</h2>
        <h1 className={style.title}>{title}</h1>
        <Cta {...cta} />
      </div>
    </div>
  );
};

Slide.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  surtitle: PropTypes.string,
  light: PropTypes.bool,
  cta: PropTypes.shape(Cta.propTypes),
  alignment: PropTypes.oneOf(['center', 'left', 'right'])
};

export default Slide;
