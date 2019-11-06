import React from 'react';
import PropTypes from 'prop-types';
import {filter, get, isNil, isObject, join, map, pipe, set, toPairs} from 'lodash/fp';
import {SrcPropType} from '../../util/proptypes';
import style from './style.css';

const toSrcSet = ({src}) => {
  if (!isObject(src)) return {};
  return pipe(
    set(
      'srcSet',
      pipe(
        toPairs,
        filter(([key, url]) => url),
        map(([key, url]) => `${url} ${key}`),
        join(',')
      )(src)
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
  src: PropTypes.oneOfType([SrcPropType, PropTypes.objectOf(SrcPropType)])
};

export default Picture;
