import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import SetupSlide from '../setup-slide';
import Accordion from '../accordion';

const SetupSlider = props => {
  const {titles = [], slides = []} = props;

  const slidesView = map.convert({cap: false})(
    (slide, key) => <SetupSlide key={key} {...slide} />,
    slides
  );

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
