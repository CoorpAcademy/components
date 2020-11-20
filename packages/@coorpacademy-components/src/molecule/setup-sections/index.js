import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SetupSection from '../setup-section';
import Loader from '../../atom/loader';
import style from './style.css';

const preventDefault = e => e.preventDefault();
const stopPropagation = e => e.stopPropagation();

const Draggable = props => {
  const {id, dragging = false, onDragStart, onDragOver, onDragLeave, onDrop, children} = props;

  const dragStartHandler = useCallback(
    e => {
      stopPropagation(e);
      onDragStart(id);
    },
    [id, onDragStart]
  );
  const dragOverHandler = useCallback(
    e => {
      preventDefault(e);
      onDragOver(id);
    },
    [id, onDragOver]
  );
  const dragLeaveHandler = useCallback(
    e => {
      preventDefault(e);
      onDragLeave(id);
    },
    [id, onDragLeave]
  );
  const dropHandler = useCallback(
    e => {
      preventDefault(e);
      onDrop(id);
    },
    [id, onDrop]
  );

  return (
    <div
      className={classnames(dragging ? style.dragging : null, style.section, style.draggable)}
      onDragStart={dragStartHandler}
      onDragOver={dragOverHandler}
      onDragLeave={dragLeaveHandler}
      onDrop={dropHandler}
      draggable
    >
      {children}
    </div>
  );
};
Draggable.propTypes = {
  id: PropTypes.string,
  dragging: PropTypes.bool,
  onDragStart: PropTypes.func,
  onDragOver: PropTypes.func,
  onDragLeave: PropTypes.func,
  onDrop: PropTypes.func,
  children: PropTypes.element
};

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

  const sectionsView = sections.map((section, index) => (
    <Draggable
      key={section.id}
      id={section.id}
      dragging={dragTo === section.id}
      onDragStart={dragStartHandler}
      onDragOver={dragOverHandler}
      onDragLeave={dragLeaveHandler}
      onDrop={dropHandler}
    >
      <SetupSection
        {...section}
        key={section.id}
        onUp={index === 0 ? null : section.onUp}
        onDown={index === sections.length - 1 ? null : section.onDown}
      />
    </Draggable>
  ));
  return <div>{sectionsView}</div>;
};

SetupSections.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape(SetupSection.propTypes)),
  loading: PropTypes.bool,
  onDrop: PropTypes.func
};

export default SetupSections;
