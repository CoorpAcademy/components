import React, {PropTypes} from 'react';
import getOr from 'lodash/fp/getOr';
import Cta from '../cta';
import style from './style.css';

const Slide = (props, context) => {
  const skin = context;
  const {
    cover,
    title,
    subtitle,
    cta,
    light,
    alignment = 'center'
  } = props;

  const imgCover = cover;

  cta.light = light;

  return (
    <div className={style.hero}
      style={{
        backgroundImage: imgCover
      }}
    >
      <div className={light ? style.light : style.content}
        style={{
          textAlign: alignment
        }}
      >
        <h2 className={style.subtitle}>{subtitle}</h2>
        <h1 className={style.title}>{title}</h1>
        <Cta {...cta} />
      </div>
    </div>
  );
};

Slide.contextTypes = {
  skin: React.PropTypes.object
};

Slide.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  light: PropTypes.bool,
  cta: PropTypes.object,
  alignment: PropTypes.oneOf(['center', 'left', 'right'])
};

export default Slide;
