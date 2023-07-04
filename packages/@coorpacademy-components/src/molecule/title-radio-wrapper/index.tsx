import React from 'react';
import RadioWithTitle from '../../atom/radio-with-title';
import SelectMultiple from '../select-multiple';
import ImageUpload from '../../atom/image-upload';
import propTypes, {TitleRadioWrapperProps} from './types';
import style from './style.css';

const buildInput = (childType: string, field: any) => {
  return childType === 'select-multiple' ? (
    <SelectMultiple {...field} />
  ) : (
    <ImageUpload {...field} />
  );
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
