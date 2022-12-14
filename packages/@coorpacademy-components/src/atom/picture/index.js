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

const toSetAlt = ({alt}) => {
  return alt ? {alt} : {alt: '', 'aria-hidden': true};
};

const Picture = props => {
  const {src, alt} = props;
  if (isNil(src)) {
    return <div className={style.empty} />;
  }
  return <img {...props} {...toSrcSet(props)} {...toSetAlt(props)} />;
};

Picture.propTypes = {
  src: PropTypes.oneOfType([SrcPropType, PropTypes.objectOf(SrcPropType)]),
  alt: PropTypes.string
};

export default Picture;
