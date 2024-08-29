import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import Draggable from '../draggable';
import SetupSection from '../setup-section';
import CourseSection from '../course-section';
import ListItem from '../../organism/list-item';
import LearningPrioritySetupItem from '../learning-priority-setup-item';

const ITEMS = {
  'setup-section': SetupSection,
  'course-section': CourseSection,
  'list-item': ListItem,
  'learning-priority-setup-item': LearningPrioritySetupItem
};

const DraggableList = ({items, onDrop, itemType}) => {
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

  const Item = ITEMS[itemType];
  const itemsView = items.map((item, index) => (
    <Draggable
      key={item.id}
      id={item.id}
      dragging={dragTo === item.id}
      onDragStart={dragStartHandler}
      onDragOver={dragOverHandler}
      onDragLeave={dragLeaveHandler}
      onDrop={dropHandler}
    >
      <Item {...item} key={item.id} order={index} />
    </Draggable>
  ));
  return <div>{itemsView}</div>;
};

DraggableList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape(SetupSection.propTypes),
      PropTypes.shape(CourseSection.propTypes),
      PropTypes.shape(ListItem.propTypes),
      PropTypes.shape(LearningPrioritySetupItem.propTypes)
    ])
  ),
  onDrop: PropTypes.func,
  itemType: PropTypes.string
};

export default DraggableList;
