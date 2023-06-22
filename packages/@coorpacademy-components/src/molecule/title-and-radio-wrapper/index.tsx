import React from 'react';
import PropTypes from 'prop-types';
import SelectMultiple from '../select-multiple';
import RadioWithTitle from '../../atom/radio-with-title';
import DragAndDropWrapper from '../drag-and-drop-wrapper';
import style from './style.css';
import {TitleAndRadioWrapperProps} from './types';

const CHILD: {[key: string]: any} = {
  'select-multiple': SelectMultiple,
  'drag-and-drop-wrapper': DragAndDropWrapper
};

const TitleAndRadioWrapper = (props: TitleAndRadioWrapperProps) => {
  const {radioWithTitle, child} = props;
  const Child = CHILD[child.childType];
  // eslint-disable-next-line no-console
  console.log('child');
  // eslint-disable-next-line no-console
  console.log(child);
  return (
    <div>
      <RadioWithTitle {...radioWithTitle} />
      <div className={style.child}>
        <Child {...child} />
      </div>
    </div>
  );
};

TitleAndRadioWrapper.propTypes = {
  radioWithTitle: PropTypes.shape(RadioWithTitle.propTypes),
  child: PropTypes.oneOfType([
    PropTypes.shape({
      ...SelectMultiple.propTypes,
      childType: PropTypes.oneOf(['select-multiple'])
    }),
    PropTypes.shape({
      ...DragAndDropWrapper.propTypes,
      childType: PropTypes.oneOf(['drag-and-drop-wrapper'])
    })
  ])
};
export default TitleAndRadioWrapper;
