import React from 'react';
import PropTypes from 'prop-types';
import CourseSection from '../course-section';
import DraggableList from '../draggable-list';
import Loader from '../../atom/loader';

const Loading = () => (
  <div>
    <Loader theme="coorpmanager" />
  </div>
);

const CourseSections = ({sections, onDrop, isLoading}) => {
  if (isLoading) return <Loading />;

  return (
    <div>
      <DraggableList itemType="course-section" items={sections} onDrop={onDrop} />
    </div>
  );
};

CourseSections.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape(CourseSection.propTypes)),
  onDrop: PropTypes.func,
  isLoading: PropTypes.bool
};

export default CourseSections;
