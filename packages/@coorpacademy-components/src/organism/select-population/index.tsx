import React from 'react';
import TitleRadioWrapper from '../../molecule/title-radio-wrapper';
import {TitleRadioWrapperProps} from '../../molecule/title-radio-wrapper/types';
import {SelectPopulationProps} from './types';

const SelectPopulation = (props: SelectPopulationProps) => {
  const {items} = props;
  // eslint-disable-next-line no-console
  console.log(items);
  return (
    <ul>
      {items.map((item: TitleRadioWrapperProps, key: number) => {
        return (
          <li key={key}>
            <TitleRadioWrapper {...item} />
          </li>
        );
      })}
    </ul>
  );
};
export default SelectPopulation;
