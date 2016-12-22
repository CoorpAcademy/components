import React, {PropTypes} from 'react';
import pipe from 'lodash/fp/pipe';
import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
import set from 'lodash/fp/set';
import toPairs from 'lodash/fp/toPairs';
import join from 'lodash/fp/join';
import isObject from 'lodash/fp/isObject';
import isNil from 'lodash/fp/isNil';
import * as CustomPropTypes from '../../util/proptypes';
import style from './style.css';

const toSrcSet = ({src}) => {
  if (!isObject(src)) return {};
  return pipe(
    set('srcset', pipe(
      toPairs,
      map(([key, url]) => `${url} ${key}`),
      join(',')
    )(src)),
    set('src', get('1x', src))
  )({});
};

const Picture = props => {
  if (isNil(props.src)) {
    return <div
      className={style.empty}
    />;
  }

  return (
    <img
      alt=''
      {...props}
      {...toSrcSet(props)}
    />
  );
};

Picture.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(CustomPropTypes.url)
  ])
};

export default Picture;
