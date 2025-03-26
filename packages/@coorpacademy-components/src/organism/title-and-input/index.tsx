import React from 'react';
import Title from '../../atom/title';
import Autocomplete from '../../atom/autocomplete';
import InputText from '../../atom/input-text';
import InputTextarea from '../../atom/input-textarea';
import Select from '../../atom/select';
import SelectMultiple from '../../molecule/select-multiple';
import SelectOpponents from '../select-opponents';
import propTypes, {TitleAndInputProps} from './types';
import style from './style.css';

export const inputStyle: Record<string, string> = {
  default: style.defaultWidth,
  medium: style.mediumWidth,
  large: style.largeWidth
};

const buildInput = (
  childType: TitleAndInputProps['childType'],
  field: TitleAndInputProps['field']
) => {
  switch (childType) {
    case 'autoComplete':
      return <Autocomplete {...field} />;
    case 'inputText':
      return <InputText {...field} />;
    case 'inputTextArea':
      return <InputTextarea {...field} />;
    case 'select':
      return <Select {...field} />;
    case 'selectMultiple':
      return <SelectMultiple {...field} />;
    case 'selectOpponents':
      return <SelectOpponents {...field} />;
  }
};

const TitleAndInput = (props: TitleAndInputProps) => {
  const {title, field, childType} = props;
  const {titleSize = 'medium', subtitleSize = 'small-without-margin', type = 'form-group'} = title;
  const titleProps = {
    ...title,
    titleSize,
    subtitleSize,
    type
  };
  const input = buildInput(childType, field);
  const {size = 'default'} = field;
  const styleInput =
    childType === 'selectOpponents' ? style.selectOpponentsContainer : inputStyle[size];

  return (
    <div>
      <Title {...titleProps} />
      <div className={styleInput}>{input}</div>
    </div>
  );
};

TitleAndInput.propTypes = propTypes;

export default TitleAndInput;
