import React from 'react';
import get from 'lodash/fp/get';
import pipe from 'lodash/fp/pipe';
import identity from 'lodash/fp/identity';
import style from './item.css';

const getTargetValueAndCall = fun => pipe(get('target.value'), fun);

const Item = ({name, value, checked, label, onChange = identity}) => {
  return (
    <div className={style.container}>
      <label>
        <input
          type="radio"
          className={style.radio}
          name={name}
          value={value}
          checked={checked}
          onChange={getTargetValueAndCall(onChange)}
        />
        {label}
      </label>
    </div>
  );
};

export default Item;
