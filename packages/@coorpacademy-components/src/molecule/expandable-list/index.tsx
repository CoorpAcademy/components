import React from 'react';
import ExpandableItem from '../expandable-item';
import {propTypes, Props} from './types';
import styles from './style.css';

const ExpandableList = ({items}: Props) => {
  return (
    <ul className={styles.list} data-name="expandable-item">
      {items.map((item, index) => {
        return (
          <li
            key={`menu-link-item-${index}`}
            id={`menu-link-item-${index}`}
            className={styles.item}
          >
            <ExpandableItem {...item} />
          </li>
        );
      })}
    </ul>
  );
};

ExpandableList.propTypes = propTypes;

export default ExpandableList;
