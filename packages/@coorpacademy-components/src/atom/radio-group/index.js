import classnames from 'classnames';
import React from 'react';
import get from 'lodash/fp/get';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import Provider from '../provider';
import style from './style.css';

import Item from './item';

const RadioGroup = (props, context) => {
  const {list = [], onChange, color, className} = props;
  const {skin} = context;
  const borderColor = color || get('common.primary', skin);

  const items = map(itemProps => {
    return <Item color={color} {...itemProps} onChange={onChange} key={itemProps.value} />;
  }, list);

  return (
    <div className={classnames([style.container, className])} style={{borderColor}}>
      {items}
    </div>
  );
};

RadioGroup.contextTypes = {
  skin: Provider.childContextTypes.skin
};

RadioGroup.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.shape(Item.PropTypes)),
  onChange: PropTypes.func
};

export default RadioGroup;
