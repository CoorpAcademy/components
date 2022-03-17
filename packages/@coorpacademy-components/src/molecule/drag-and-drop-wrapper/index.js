import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/fp';
import DragAndDrop from '../../atom/drag-and-drop';
import CheckboxWithTitle from '../../atom/checkbox-with-title';
import style from './style.css';

const DragAndDropWrapper = props => {
  const {list = [], checkBoxTitle, 'data-name': dataName} = props;

  const dragAndDropList = map(dragAndDropProps => {
    return (
      <li className={style.dragAndDrop} key={`dragAndDrop-${dragAndDropProps.title}`}>
        <DragAndDrop {...dragAndDropProps} />
      </li>
    );
  }, list);

  return (
    <div>
      <div className={style.title}>
        <CheckboxWithTitle {...checkBoxTitle} />
      </div>
      <ul className={style.group} data-name={dataName}>
        {dragAndDropList}
      </ul>
    </div>
  );
};

DragAndDropWrapper.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape(DragAndDrop.propTypes)),
  checkBoxTitle: PropTypes.shape({...CheckboxWithTitle.propTypes}),
  'data-name': PropTypes.string
};

export default DragAndDropWrapper;
