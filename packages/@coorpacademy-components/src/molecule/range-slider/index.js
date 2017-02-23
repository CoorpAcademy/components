import React, {PropTypes} from 'react';
import getOr from 'lodash/fp/getOr';
import style from './style.css';

const getOrBlank = getOr('');

const RangeSlider = (props, context) => {
  const {skin} = context;
  const {
    onChange
  } = props;

  return (
    <div className={style.default}>
      range
      <div className={style.rail} />
      <div className={style.track} />
      <div className={style.handle} />
      <div className={style.handle} />
    </div>
  );
};

RangeSlider.contextTypes = {
  skin: React.PropTypes.object
};

RangeSlider.propTypes = {
  onChange: PropTypes.func
};

export default RangeSlider;
