import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import SetupCohortItem from '../setup-cohort-item';
import Accordion from '../../organism/accordion/toggler';

const SetupCohort = props => {
  const {tabProps, slides = [], formatTitle, handleToFetch} = props;
  const slidesView = map.convert({cap: false})(
    (slide, key) => <SetupCohortItem key={key} {...slide} />,
    slides
  );
  return (
    <div>
      <Accordion
        handleToFetch={handleToFetch}
        tabProps={map.convert({cap: false})(
          (tab, idx) => ({
            ...tab,
            lastRow: idx + 1 === tabProps.length,
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

SetupCohort.defaultProps = {
  formatTitle: (title, rowNumber, tabPropsLength) =>
    `${rowNumber !== tabPropsLength ? `Cohort ${rowNumber} : ${title}` : title}`,
  handleToFetch: key => {}
};

SetupCohort.propTypes = {
  tabProps: PropTypes.arrayOf(PropTypes.shape(Accordion.PropTypes)),
  slides: PropTypes.arrayOf(PropTypes.shape(SetupCohortItem.propTypes)),
  formatTitle: PropTypes.func,
  handleToFetch: PropTypes.func
};

export default SetupCohort;
