import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import Slide from '../../../atom/slide';
import Slider from '../../../organism/slider';

const ImageSlider = props => {
  const {slides} = props;

  const myslides = map.convert({cap: false})((slide, key) => {
    return <Slide key={key} {...slide} />;
  }, slides);

  return (
    <Slider>
      {myslides}
    </Slider>
  );
};

ImageSlider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      cover: PropTypes.string,
      title: PropTypes.string,
      surtitle: PropTypes.string,
      cta: PropTypes.shape({
        href: PropTypes.url,
        title: PropTypes.string
      })
    })
  )
};

export default ImageSlider;
