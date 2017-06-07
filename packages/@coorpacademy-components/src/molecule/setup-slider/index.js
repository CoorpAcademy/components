import React from 'react';
import PropTypes from 'prop-types';
import SetupSlide from '../setup-slide';
import Accordion from '../accordion';

const SetupSlider = props => {
  const {titles = [], slides = []} = props;

  const slidesView = slides.map((slide, key) => <SetupSlide key={key} {...slide} />);

  return (
    <Accordion titles={titles}>
      {slidesView}
    </Accordion>
  );
};

SetupSlider.propTypes = {
  titles: PropTypes.arrayOf(PropTypes.string),
  slides: PropTypes.arrayOf(PropTypes.shape(SetupSlide.propTypes))
};

export default SetupSlider;
