import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import SetupSlide from '../setup-slide';
import Accordion from '../../organism/accordion/toggler';

const SetupSlider = props => {
  const {tabProps, slides = []} = props;

  const slidesView = map.convert({cap: false})(
    (slide, key) => <SetupSlide key={key} {...slide} />,
    slides
  );

  return (
    <Accordion tabProps={tabProps} type={'all'}>
      {slidesView}
    </Accordion>
  );
};

SetupSlider.propTypes = {
  tabProps: PropTypes.arrayOf(PropTypes.shape(Accordion.PropTypes)),
  slides: PropTypes.arrayOf(PropTypes.shape(SetupSlide.propTypes))
};

export default SetupSlider;
