import React from 'react';
import map from 'lodash/fp/map';
import TitleAndCheckBoxWrapper from '../../molecule/title-and-checkbox-wrapper';
import propTypes, {SelectOpponentsProps, TitleAndCheckBoxWrapperProps} from './types';
import style from './style.css';

// @ts-expect-error (need to get the index)
const mapWithIndex = map.convert({cap: false});

const SelectOpponents = (props: SelectOpponentsProps) => {
  const {items} = props;
  return (
    <ul className={style.container}>
      {mapWithIndex((item: TitleAndCheckBoxWrapperProps, key: number) => {
        return (
          <li
            key={`select-opponents-item-${key}`}
            className={item.child.childType === 'image-upload' ? style.itemImageUpload : style.item}
          >
            <TitleAndCheckBoxWrapper {...item} />
          </li>
        );
      }, items)}
    </ul>
  );
};

SelectOpponents.propTypes = propTypes;

export default SelectOpponents;
