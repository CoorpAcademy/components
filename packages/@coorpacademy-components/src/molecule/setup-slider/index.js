import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/fp';
import SetupSlide from '../setup-slide';
import Accordion from '../../organism/accordion/toggler';
import {wrapperStyle} from './style.css';

const SetupSlider = props => {
  const {tabProps = [], slides = []} = props;
  const slidesView = map.convert({cap: false})(
    (slide, key) => <SetupSlide {...slide} key={key} />,
    slides
  );
  return (
    <div className={wrapperStyle}>
      <Accordion tabProps={tabProps} type={'all'} theme={'setup'}>
        {slidesView}
      </Accordion>
    </div>
  );
};

SetupSlider.propTypes = {
  tabProps: PropTypes.arrayOf(PropTypes.shape(Accordion.propTypes)),
  slides: PropTypes.arrayOf(PropTypes.shape(SetupSlide.propTypes))
};

export default SetupSlider;
