import React, {PropTypes} from 'react';
import getOr from 'lodash/fp/getOr';
import Cta from '../cta';
import style from './style.css';

const Slide = (props, context) => {
  const skin = context;
  const {
    cover,
    title,
    surtitle,
    cta,
    light,
    alignment = 'center'
  } = props;

  const imgCover = cover;

  cta.light = light;

  return (
    <div className={style.hero}
      style={{
        background: `${imgCover} no-repeat center center fixed`,
        backgroundSize: 'cover'
      }}
    >
      <div className={light ? style.light : style.content}
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

Slide.contextTypes = {
  skin: React.PropTypes.object
};

Slide.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  surtitle: PropTypes.string,
  light: PropTypes.bool,
  cta: PropTypes.object,
  alignment: PropTypes.oneOf(['center', 'left', 'right'])
};

export default Slide;
