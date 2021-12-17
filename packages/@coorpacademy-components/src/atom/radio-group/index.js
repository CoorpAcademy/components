import classnames from 'classnames';
import React from 'react';
import {get, map} from 'lodash/fp';
import PropTypes from 'prop-types';
import Provider from '../provider';
import style from './style.css';

import Item from './item';

const themeStyle = {
  setup: style.setup,
  coorpmanager: style.coorpmanager
};

const RadioGroup = (props, context) => {
  const {list = [], onChange, color, className, theme = 'setup'} = props;
  const {skin} = context;
  const borderColor = color || get('common.primary', skin);
  const mainClass = themeStyle[theme];
  const items = map(itemProps => {
    return (
      <Item {...itemProps} color={color} theme={theme} onChange={onChange} key={itemProps.value} />
    );
  }, list);

  return (
    <div className={classnames([mainClass, style.container, className])} style={{borderColor}}>
      {items}
    </div>
  );
};

RadioGroup.contextTypes = {
  skin: Provider.childContextTypes.skin
};

RadioGroup.propTypes = {
  color: PropTypes.string,
  theme: PropTypes.string,
  className: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.shape(Item.propTypes)),
  onChange: PropTypes.func
};

export default RadioGroup;
