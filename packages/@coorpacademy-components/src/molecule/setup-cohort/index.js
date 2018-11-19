import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import SetupSlide from '../setup-cohort-item';
import Accordion from '../../organism/accordion/toggler';
const SetupSlider = props => {
  const {tabProps, slides = []} = props;
  const slidesView = map.convert({cap: false})(
    (slide, key) => <SetupSlide key={key} {...slide} />,
    slides
  );
  return (
    <div>
      <Accordion tabProps={tabProps} type={'all'}>
        {slidesView}
      </Accordion>
    </div>
    
  );
};

SetupSlider.propTypes = {
  tabProps: PropTypes.arrayOf(PropTypes.shape(Accordion.PropTypes)),
  slides: PropTypes.arrayOf(PropTypes.shape(SetupSlide.propTypes))
};

export default SetupSlider;
