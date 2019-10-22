import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import Slide from '../../../atom/slide';
import Card from '../../../molecule/card';
import Slider from '../../slider';

const ImageSlider = ({slides = [], card}) => {
  const myslides = map(slide => <Slide key={slide.title} {...slide} />, slides);
  const allSlides = [myslides];

  if (card) {
    const heroCard = <Card key={card.title} {...card} />;
    allSlides.splice(0, 0, heroCard);
  }

  return <Slider>{allSlides}</Slider>;
};

ImageSlider.propTypes = {
  card: PropTypes.shape(Card.propTypes),
  slides: PropTypes.arrayOf(PropTypes.shape(Slide.propTypes))
};

export default ImageSlider;
