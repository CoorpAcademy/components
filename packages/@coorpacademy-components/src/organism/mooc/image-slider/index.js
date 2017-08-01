import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import Slide from '../../../atom/slide';
import Slider from '../../slider';

const ImageSlider = ({slides}) => {
  const myslides = map(slide => <Slide key={slide.title} {...slide} />, slides);

  return (
    <Slider>
      {myslides}
    </Slider>
  );
};

ImageSlider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape(Slide.propTypes))
};

export default ImageSlider;
