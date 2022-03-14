import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/fp';
import DragAndDrop from '../../atom/drag-and-drop';
import CheckboxWithTitle from '../../atom/checkbox-with-title';
import style from './style.css';

const DragAndDropWrapper = props => {
  const {list = [], checkBoxTitle} = props;

  const dragAndDropList = map(dragAndDropProps => {
    return (
      <div className={style.dragAndDrop} key={`dragAndDrop-${dragAndDropProps.title}`}>
        <DragAndDrop {...dragAndDropProps} />
      </div>
    );
  }, list);

  return (
    <div>
      <div className={style.title}>
        <CheckboxWithTitle {...checkBoxTitle} />
      </div>
      <div className={style.group}>{dragAndDropList}</div>
    </div>
  );
};

DragAndDropWrapper.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape(DragAndDrop.propTypes)),
  checkBoxTitle: PropTypes.shape({...CheckboxWithTitle.propTypes})
};

export default DragAndDropWrapper;
