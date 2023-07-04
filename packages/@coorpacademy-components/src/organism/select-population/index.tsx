import React from 'react';
import TitleRadioWrapper from '../../molecule/title-radio-wrapper';
import {TitleRadioWrapperProps} from '../../molecule/title-radio-wrapper/types';
import {SelectPopulationProps} from './types';
import style from './style.css';

const SelectPopulation = (props: SelectPopulationProps) => {
  const {items} = props;
  return (
    <ul className={style.container}>
      {items.map((item: TitleRadioWrapperProps, key: number) => {
        return (
          <li key={key} className={style.item}>
            <TitleRadioWrapper {...item} />
          </li>
        );
      })}
    </ul>
  );
};
export default SelectPopulation;
