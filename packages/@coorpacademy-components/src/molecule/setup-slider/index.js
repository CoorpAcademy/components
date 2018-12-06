import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import SetupSlide from '../setup-slide';
import SetupCohortItem from '../setup-cohort-item';
import Accordion from '../../organism/accordion/toggler';

const SetupSlider = props => {
  const {tabProps, slides, formatTitle, tabNew, slidesNew} = props;
  const slidesView = map.convert({cap: false})(
    (slide, key) => <SetupSlide key={key} {...slide} />,
    slides
  );
  const slidesViewNew = map.convert({cap: false})(
    (slidenew, key) => <SetupSlide key={key} {...slidenew} />,
    slidesNew
  );
  return (
    <div>
      <Accordion
        tabProps={map.convert({cap: false})(
          (tab, idx) => ({
            ...tab,
            title: formatTitle(tab.title, idx + 1)
          }),
          tabProps
        )}
        type={'all'}
      >
        {slidesView}
      </Accordion>
      <Accordion tabProps={tabNew} type={'all'}>
        {slidesViewNew}
      </Accordion>
    </div>
  );
};

SetupSlider.defaultProps = {
  formatTitle: (title, rowNumber) => `${title}`,
  tabNew: [],
  tabProps: [],
  slides: [],
  slidesNew: []
};

SetupSlider.propTypes = {
  tabProps: PropTypes.arrayOf(PropTypes.shape(Accordion.PropTypes)),
  slides: PropTypes.arrayOf(PropTypes.shape(SetupSlide.propTypes)),
  tabNew: PropTypes.arrayOf(PropTypes.shape(Accordion.PropTypes)),
  slidesNew: PropTypes.arrayOf(PropTypes.shape(SetupCohortItem.propTypes)),
  formatTitle: PropTypes.func
};

export default SetupSlider;
