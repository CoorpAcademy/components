import React from 'react';
import PropTypes from 'prop-types';
import SetupSlide from '../setup-slide';
import style from './style.css';

const SetupSlider = props => {
  const {slides = []} = props;

  const slidesView = slides.map((slide, key) => (
    <div key={key} className={style.slide}>
      <SetupSlide {...slide} />
    </div>
  ));

  return (
    <div>
      {slidesView}
    </div>
  );
};

SetupSlider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape(SetupSlide.propTypes))
};
export default SetupSlider;
