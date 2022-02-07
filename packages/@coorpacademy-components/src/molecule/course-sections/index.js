import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import CourseSection from '../course-section';
import Draggable from '../draggable';
import Loader from '../../atom/loader';

const Loading = () => (
  <div>
    <Loader theme="coorpmanager" />
  </div>
);

const CourseSections = ({sections, onDrop, loading}) => {
  const [dragTo, setDragTo] = useState(null);
  const [dragFrom, setDragFrom] = useState(null);

  const dragStartHandler = useCallback(
    id => {
      setDragFrom(id);
    },
    [setDragFrom]
  );

  const dragOverHandler = useCallback(
    id => {
      if (dragTo === id) return;
      setDragTo(id);
    },
    [dragTo, setDragTo]
  );

  const dragLeaveHandler = useCallback(() => {
    setDragTo(null);
  }, [setDragTo]);

  const dropHandler = useCallback(
    id => {
      if (onDrop && dragFrom) onDrop(dragFrom, id);

      setDragTo(null);
      setDragFrom(null);
    },
    [onDrop, setDragTo, setDragFrom, dragFrom]
  );

  const sectionView = sections.map(section => {
    const {title: id} = section;
    return (
      <Draggable
        key={id}
        id={id}
        dragging={dragTo === id}
        onDragStart={dragStartHandler}
        onDragOver={dragOverHandler}
        onDragLeave={dragLeaveHandler}
        onDrop={dropHandler}
      >
        <CourseSection {...section} key={id} />
      </Draggable>
    );
  });
  return loading ? <Loading /> : <div>{sectionView}</div>;
};

CourseSections.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape(CourseSection)),
  onDrop: PropTypes.func,
  loading: PropTypes.bool
};

export default CourseSections;
