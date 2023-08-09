import React from 'react';
import isEmpty from 'lodash/fp/isEmpty';
import RadioWithTitle from '../../atom/radio-with-title';
import SelectMultiple from '../select-multiple';
import ImageUpload from '../../atom/image-upload';
import propTypes, {TitleRadioWrapperProps} from './types';
import style from './style.css';

const getContainerStyle = (field: Record<string, unknown>, childType: string): string => {
  return childType === 'massive-upload' && (field.loading || isEmpty(field.previewContent))
    ? style.containerUpload
    : style.container;
};

const buildInput = (childType: string, field: any) => {
  return childType === 'select-multiple' ? (
    <SelectMultiple {...field} />
  ) : (
    <div
      className={field.loading || isEmpty(field.previewContent) ? style.containerImageUpload : ''}
    >
      <ImageUpload {...field} />
    </div>
  );
};

const TitleRadioWrapper = (props: TitleRadioWrapperProps) => {
  const {radioWithTitle, field, childType} = props;
  return (
    <div className={getContainerStyle(field, childType)}>
      {radioWithTitle ? <RadioWithTitle {...radioWithTitle} /> : null}
      <div className={style.field}>{buildInput(childType, field)}</div>
    </div>
  );
};

TitleRadioWrapper.propTypes = propTypes;

export default TitleRadioWrapper;
