import React, {PropTypes} from 'react';
import style from './style.css';
import Slide from '../../atom/Slide';

const Slider = props => {
  const {
    slides
  } = props;

  const myslides = slides.map((slide, index) => {
    return (
      <li><Slide {...slides[index]} /></li>
    );
  });

  return (
    <div className={style.slidesWrapper}>
       <ul className={style.slidecontent}>
        {myslides}
       </ul>
    </div>
  );
};

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape({
    cover: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    cta: PropTypes.shape({
      href: PropTypes.url,
      title: PropTypes.string
    })
  }))
};

export default Slider;
