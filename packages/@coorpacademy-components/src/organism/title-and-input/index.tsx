import React from 'react';
import Title from '../../atom/title';
import Autocomplete from '../../atom/autocomplete';
import SelectMultiple from '../../molecule/select-multiple';
import SelectOpponents from '../select-opponents';
import propTypes, {TitleAndInputProps} from './types';
import style from './style.css';

const buildInput = (
  childType: TitleAndInputProps['childType'],
  field: TitleAndInputProps['field']
) => {
  switch (childType) {
    case 'autoComplete':
      return <Autocomplete {...field} />;
    case 'selectMultiple':
      return <SelectMultiple {...field} />;
    case 'selectOpponents':
      return <SelectOpponents {...field} />;
  }
};

const TitleAndInput = (props: TitleAndInputProps) => {
  const {title, field, childType} = props;
  const input = buildInput(childType, field);
  const styleInput =
    childType === 'selectOpponents' ? style.selectOpponentsContainer : style.inputContainer;
  return (
    <div>
      <Title
        {...title}
        type={'form-group'}
        titleSize={'medium'}
        subtitleSize={'small-without-margin'}
      />
      <div className={styleInput}>{input}</div>
    </div>
  );
};

TitleAndInput.propTypes = propTypes;

export default TitleAndInput;
