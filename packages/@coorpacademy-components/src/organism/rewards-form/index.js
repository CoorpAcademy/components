import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import InputTextWithTiteledCheckbox from '../../molecule/input-text-with-titeled-checkbox';
import DragAndDropWrapper from '../../molecule/drag-and-drop-wrapper';
import style from './style.css';

const ITEM = {
  'input-text': InputTextWithTiteledCheckbox,
  'drag-and-drop': DragAndDropWrapper
};

const RewardsForm = ({items}) => {
  const itemsView = items.map(({type, ...item}, index) => {
    const Component = ITEM[type];
    return (
      <li
        key={index}
        className={classnames(style.item, type === 'input-text' && style.inputText)}
        data-name={`reward-${index}`}
      >
        <Component {...item} />
      </li>
    );
  });
  return <ul className={style.list}>{itemsView}</ul>;
};

RewardsForm.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({...InputTextWithTiteledCheckbox.propTypes}),
      PropTypes.shape({...DragAndDropWrapper.propTypes})
    ])
  )
};

export default RewardsForm;
