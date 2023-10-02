import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/fp';
import InputFileDraggable from '../../atom/input-file-draggable';
import style from './style.css';

const DragAndDropWrapper = props => {
  const {list = [], 'data-name': dataName} = props;

  const dragAndDropList = map(dragAndDropProps => {
    return (
      <li className={style.dragAndDrop} key={`dragAndDrop-${dragAndDropProps.title}`}>
        <InputFileDraggable {...dragAndDropProps} />
      </li>
    );
  }, list);

  return (
    <div>
      <ul className={style.group} data-name={dataName}>
        {dragAndDropList}
      </ul>
    </div>
  );
};

DragAndDropWrapper.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape(InputFileDraggable.propTypes)),
  'data-name': PropTypes.string
};

export default DragAndDropWrapper;
