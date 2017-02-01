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
    cta
  } = props;

  const imgCover = cover;

  return (
    <div className={style.hero}
      style={{
        backgroundImage: imgCover
      }}
    >
      <div className={style.content}>
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
  cta: PropTypes.shape({
    href: PropTypes.url,
    title: PropTypes.string
  })
};

export default Slide;
