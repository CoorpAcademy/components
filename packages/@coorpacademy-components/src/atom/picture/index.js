import pipe from 'lodash/fp/pipe';
import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
import set from 'lodash/fp/set';
import toPairs from 'lodash/fp/toPairs';
import join from 'lodash/fp/join';
import isObject from 'lodash/fp/isObject';
import isNil from 'lodash/fp/isNil';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    src: checker.oneOfType([
      checker.string,
      checker.objectOf(checker.url)
    ]).optional
  }),
  children: checker.none
});

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

export default ({h}, options = {}) => {
  const Picture = (props = {}) => {
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

  Picture.validate = createValidate(conditions);
  return Picture;
};
