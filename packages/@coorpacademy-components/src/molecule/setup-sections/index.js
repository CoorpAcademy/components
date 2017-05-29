import React from 'react';
import PropTypes from 'prop-types';
import SetupSection from '../setup-section';
import Loader from '../../atom/loader';
import style from './style.css';

const SetupSections = (props, context) => {
  const {sections, loading = false} = props;

  let sectionsView = null;

  if (loading) {
    sectionsView = (
      <div className={style.loading}>
        <Loader />
      </div>
    );
  } else {
    sectionsView = sections.map((section, index) => {
      section.onUp = index === 0 ? null : section.onUp;
      section.onDown = index === sections.length - 1 ? null : section.onDown;

      return (
        <div key={section.id} className={style.section}>
          <SetupSection {...section} />
        </div>
      );
    });
  }

  return (
    <div className={style.wrapper}>
      {sectionsView}
    </div>
  );
};

SetupSections.propTypes = {
  sections: PropTypes.array,
  loading: PropTypes.bool
};
export default SetupSections;
