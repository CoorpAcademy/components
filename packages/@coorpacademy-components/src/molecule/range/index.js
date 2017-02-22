import React, {PropTypes} from 'react';
import getOr from 'lodash/fp/getOr';
import style from './style.css';

const getOrBlank = getOr('');

const _Range = (props, context) => {
  const {skin} = context;
  const {
    onChange
  } = props;

  return (
    <div className={style.default}>
      range
      <div className={style.rail} />
      <div className={style.track} />
      <div className={style.handle1} />
      <div className={style.handle2} />
    </div>
  );
};

_Range.contextTypes = {
  skin: React.PropTypes.object
};

_Range.propTypes = {
  onChange: PropTypes.func
};

export default _Range;
