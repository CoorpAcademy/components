import React from 'react';
import PropTypes from 'prop-types';
import filter from 'lodash/fp/filter';
import get from 'lodash/fp/get';
import isNil from 'lodash/fp/isNil';
import isObject from 'lodash/fp/isObject';
import join from 'lodash/fp/join';
import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';
import toPairs from 'lodash/fp/toPairs';
import * as CustomPropTypes from '../../util/proptypes';
import style from './style.css';

const toSrcSet = ({src}) => {
  if (!isObject(src)) return {};
  return pipe(
    set(
      'srcSet',
      pipe(toPairs, filter(([key, url]) => url), map(([key, url]) => `${url} ${key}`), join(','))(
        src
      )
    ),
    set('src', get('1x', src))
  )({});
};

const Picture = props => {
  if (isNil(props.src)) {
    return <div className={style.empty} />;
  }

  return <img alt="" {...props} {...toSrcSet(props)} />;
};

Picture.propTypes = {
  src: PropTypes.oneOfType([
    PropTypes.string,
    CustomPropTypes.url,
    PropTypes.objectOf(CustomPropTypes.url)
  ])
};

export default Picture;
