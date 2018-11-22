import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import SetupSlide from '../setup-cohort-item';
import Accordion from '../../organism/accordion/toggler';

const SetupSlider = props => {
  const {tabProps, slides = [], formatTitle,handleToFetch} = props;
  const slidesView = map.convert({cap: false})(
    (slide, key) => <SetupSlide key={key} {...slide} />,
    slides
  );
  return (
    <div>
      <Accordion
        handleToFetch
        tabProps={map.convert({cap: false})(
          (tab, idx) => ({
            ...tab,
            title: formatTitle(tab.title, idx + 1, tabProps.length)
          }),
          tabProps
        )}
        moreIconType={'arrowDown'}
        lessIconType={'arrowUp'}
        type={'all'}
      >
        {slidesView}
      </Accordion>
    </div>
  );
};

SetupSlider.defaultProps = {
  formatTitle: (title, rowNumber, tabPropsLength) =>
    `${rowNumber !== tabPropsLength ? `Cohort ${rowNumber} : ${title}` : title}`
};

SetupSlider.propTypes = {
  tabProps: PropTypes.arrayOf(PropTypes.shape(Accordion.PropTypes)),
  slides: PropTypes.arrayOf(PropTypes.shape(SetupSlide.propTypes)),
  formatTitle: PropTypes.func,
  handleToFetch: PropTypes.func,
};

export default SetupSlider;
