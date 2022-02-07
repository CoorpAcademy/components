import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import DraggableList from '../draggable-list';
import SetupSection from '../setup-section';
import Loader from '../../atom/loader';
import style from './style.css';

const Loading = () => (
  <div className={style.loading}>
    <Loader />
  </div>
);

const SetupSections = ({sections, loading, onDrop}) => {
  if (loading) return <Loading />;

  return (
    <div>
      <DraggableList itemType="setup-section" items={sections} onDrop={onDrop} />
    </div>
  );
};

SetupSections.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape(SetupSection.propTypes)),
  loading: PropTypes.bool,
  onDrop: PropTypes.func
};

export default SetupSections;
