import React from 'react';
import PropTypes from 'prop-types';
import InputTextWithTitle from '../../atom/input-text-with-title';
import CourseSection from '../course-section';
import DraggableList from '../draggable-list';
import Loader from '../../atom/loader';
import Title from '../../atom/title';
import TitleAndCheckBoxWrapper from '../title-and-checkbox-wrapper';
import style from './style.css';

const Loading = () => (
  <div className={style.loaderContainer}>
    <Loader className={style.loader} theme="coorpmanager" />
  </div>
);

const CourseSections = ({
  sections,
  onDrop,
  isLoading,
  title,
  mandatoryCoursesInput,
  inputTitle
}) => {
  if (isLoading) return <Loading />;

  const child = {...mandatoryCoursesInput, childType: 'input-text'};
  const sectionTitle = {title: inputTitle, 'data-name': 'mandatory-courses-input-title'};
  return (
    <div>
      {mandatoryCoursesInput && sectionTitle ? (
        <TitleAndCheckBoxWrapper child={child} sectionTitle={sectionTitle} />
      ) : null}
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
  inputTitle: PropTypes.string,
  title: PropTypes.string,
  sections: PropTypes.arrayOf(PropTypes.shape(CourseSection.propTypes)),
  onDrop: PropTypes.func,
  isLoading: PropTypes.bool,
  mandatoryCoursesInput: PropTypes.shape(InputTextWithTitle.propTypes)
};

export default CourseSections;
