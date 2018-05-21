import React from 'react';
import get from 'lodash/fp/get';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import Provider from '../provider';
import style from './style.css';

import Item from './item';

const RadioGroup = (props, context) => {
  const {list = [], onChange} = props;
  const {skin} = context;
  const defaultColor = get('common.primary', skin);

  const items = map(itemProps => {
    return <Item {...itemProps} onChange={onChange} key={itemProps.value} />;
  }, list);
  return (
    <div className={style.container} style={{borderColor: defaultColor}}>
      {items}
    </div>
  );
};

RadioGroup.contextTypes = {
  skin: Provider.childContextTypes.skin
};

RadioGroup.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape(Item.PropTypes)),
  onChange: PropTypes.func
};

export default RadioGroup;
