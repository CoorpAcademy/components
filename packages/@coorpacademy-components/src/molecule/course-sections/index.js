import React from 'react';
import PropTypes from 'prop-types';
import CourseSection from '../course-section';
import DraggableList from '../draggable-list';
import Loader from '../../atom/loader';
import Title from '../../atom/title';
import style from './style.css';

const Loading = () => (
  <div>
    <Loader theme="coorpmanager" />
  </div>
);

const CourseSections = ({sections, onDrop, isLoading, title}) => {
  if (isLoading) return <Loading />;

  return (
    <div>
      {title ? (
        <div className={style.title}>
          <Title title={title} type={'form-group'} data-name={'course-sections-title'} />
        </div>
      ) : null}
      <DraggableList itemType="course-section" items={sections} onDrop={onDrop} />
    </div>
  );
};

CourseSections.propTypes = {
  title: PropTypes.string,
  sections: PropTypes.arrayOf(PropTypes.shape(CourseSection.propTypes)),
  onDrop: PropTypes.func,
  isLoading: PropTypes.bool
};

export default CourseSections;
