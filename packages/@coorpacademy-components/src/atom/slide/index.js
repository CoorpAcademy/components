import React from 'react';
import PropTypes from 'prop-types';
import Cta from '../cta';
import style from './style.css';

const Slide = props => {
  const {cover, title, subtitle, cta, light, alignment = 'center'} = props;

  const imgCover = cover;
  const ctaView = cta ? <Cta {...cta} light={light} /> : null;

  return (
    <div
      className={style.hero}
      style={{
        backgroundImage: `url(${imgCover})`
      }}
    >
      <div
        className={light ? style.light : style.content}
        style={{
          textAlign: alignment
        }}
      >
        <h2 className={style.subtitle} data-name="subtitle">
          {subtitle}
        </h2>
        <h1 className={style.title} data-name="title">
          {title}
        </h1>
        {ctaView}
      </div>
    </div>
  );
};

Slide.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  light: PropTypes.bool,
  cta: PropTypes.shape(Cta.propTypes),
  alignment: PropTypes.oneOf(['center', 'left', 'right'])
};

export default Slide;
