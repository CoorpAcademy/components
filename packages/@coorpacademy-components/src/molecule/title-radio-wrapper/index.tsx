import React from 'react';
import RadioWithTitle from '../../atom/radio-with-title';
import DragAndDrop from '../../atom/drag-and-drop';
import SelectMultiple from '../select-multiple';
import {propTypes, TitleRadioWrapperProps} from './types';

const TitleRadioWrapper = (props: TitleRadioWrapperProps) => {
  const {radioWithTitle, field} = props;
  // eslint-disable-next-line no-console
  console.log(props);
  return (
    <div>
      <div>{radioWithTitle ? <RadioWithTitle {...radioWithTitle} /> : null}</div>
      <div>
        {field.childType === 'selectMultiple' ? (
          <SelectMultiple {...field} />
        ) : (
          <DragAndDrop {...field} />
        )}
      </div>
    </div>
  );
};

TitleRadioWrapper.propTypes = propTypes;

export default TitleRadioWrapper;
