import React from 'react';
import RadioWithTitle from '../../atom/radio-with-title';
import DragAndDrop from '../../atom/drag-and-drop';
import SelectMultiple from '../select-multiple';
import propTypes, {TitleRadioWrapperProps} from './types';

const buildInput = (childType: string, field: any) => {
  switch (childType) {
    case 'selectMultiple':
      return <SelectMultiple {...field} />;
    default:
      return <DragAndDrop {...field} />;
  }
};

const TitleRadioWrapper = (props: TitleRadioWrapperProps) => {
  const {radioWithTitle, field, childType} = props;
  return (
    <div>
      <div>{radioWithTitle ? <RadioWithTitle {...radioWithTitle} /> : null}</div>
      <div>{buildInput(childType, field)}</div>
    </div>
  );
};

TitleRadioWrapper.propTypes = propTypes;

export default TitleRadioWrapper;
