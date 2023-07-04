import React from 'react';
import RadioWithTitle from '../../atom/radio-with-title';
import DragAndDrop from '../../atom/drag-and-drop';
import SelectMultiple from '../select-multiple';
import propTypes, {TitleRadioWrapperProps} from './types';
import style from './style.css';

const buildInput = (childType: string, field: any) => {
  switch (childType) {
    case 'select-multiple':
      return <SelectMultiple {...field} />;
    default:
      return <DragAndDrop {...field} />;
  }
};

const TitleRadioWrapper = (props: TitleRadioWrapperProps) => {
  const {radioWithTitle, field, childType} = props;
  return (
    <div className={style.container}>
      {radioWithTitle ? <RadioWithTitle {...radioWithTitle} /> : null}
      <div className={style.field}>{buildInput(childType, field)}</div>
    </div>
  );
};

TitleRadioWrapper.propTypes = propTypes;

export default TitleRadioWrapper;
