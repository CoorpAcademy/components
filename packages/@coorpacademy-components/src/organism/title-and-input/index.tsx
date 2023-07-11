import React from 'react';
import has from 'lodash/fp/has';
import Title from '../../atom/title';
import Autocomplete from '../../atom/autocomplete';
import SelectMultiple from '../../molecule/select-multiple';
import SelectOpponents from '../select-opponents';
import propTypes, {TitleAndInputProps} from './types';
import style from './style.css';

const buildInput = (field: any) => {
  const {type} = field;

  switch (type) {
    case 'autoComplete':
      return <Autocomplete {...field} />;
    case 'selectMultiple':
      return <SelectMultiple {...field} />;
    default:
      return <SelectOpponents {...field} />;
  }
};

const TitleAndInput = (props: TitleAndInputProps) => {
  const {title, field} = props;
  const input = buildInput(field);
  const styleInput = has('items', field) ? style.selectOpponentContainer : style.inputContainer;
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
