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

  const dragLeaveHandler = useCallback(
    id => {
      setDragTo(null);
    },
    [setDragTo]
  );

  const dropHandler = useCallback(
    id => {
      if (onDrop && dragFrom) onDrop(dragFrom, id);

      setDragTo(null);
      setDragFrom(null);
    },
    [onDrop, setDragTo, setDragFrom, dragFrom]
  );

  if (loading) return <Loading />;

  return (
    <div>
      <DraggableList itemType="setup-section" items={sections} />
    </div>
  );
};

SetupSections.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape(SetupSection.propTypes)),
  loading: PropTypes.bool,
  onDrop: PropTypes.func
};

export default SetupSections;
