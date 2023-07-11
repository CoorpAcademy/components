import React from 'react';
import map from 'lodash/fp/map';
import TitleRadioWrapper from '../../molecule/title-radio-wrapper';
import {TitleRadioWrapperProps} from '../../molecule/title-radio-wrapper/types';
import propTypes, {SelectOpponentsProps} from './types';
import style from './style.css';

// @ts-expect-error (need to get the index)
const mapWithIndex = map.convert({cap: false});

const SelectOpponents = (props: SelectOpponentsProps) => {
  const {items} = props;
  return (
    <ul className={style.container}>
      {mapWithIndex((item: TitleRadioWrapperProps, key: number) => {
        return (
          <li key={key} className={style.item}>
            <TitleRadioWrapper {...item} />
          </li>
        );
      }, items)}
    </ul>
  );
};

SelectOpponents.propTypes = propTypes;

export default SelectOpponents;
