import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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

export default Draggable;
