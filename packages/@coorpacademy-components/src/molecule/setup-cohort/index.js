import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import SetupCohortItem from '../setup-cohort-item';
import Accordion from '../../organism/accordion/toggler';

const SetupCohort = props => {
  const {tabProps = [], slides = [], formatTitle, tabNew = [], slidesNew = []} = props;
  const slidesView = map.convert({cap: false})(
    (slide, key) => <SetupCohortItem key={key} {...slide} />,
    slides
  );
  const slidesViewNew = map.convert({cap: false})(
    (slidenew, key) => <SetupCohortItem key={key} {...slidenew} />,
    slidesNew
  );
  return (
    <div>
      {tabProps.length > 0 ? (
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
      ) : (
        ''
      )}
      <Accordion tabProps={tabNew} type={'all'}>
        {slidesViewNew}
      </Accordion>
    </div>
  );
};

SetupCohort.defaultProps = {
  formatTitle: (title, rowNumber) => `Cohort ${rowNumber} : ${title}`
};

SetupCohort.propTypes = {
  tabProps: PropTypes.arrayOf(PropTypes.shape(Accordion.PropTypes)),
  slides: PropTypes.arrayOf(PropTypes.shape(SetupCohortItem.propTypes)),
  tabNew: PropTypes.arrayOf(PropTypes.shape(Accordion.PropTypes)),
  slidesNew: PropTypes.arrayOf(PropTypes.shape(SetupCohortItem.propTypes)),
  formatTitle: PropTypes.func
};

export default SetupCohort;
