import pipe from 'lodash/fp/pipe';
import map from 'lodash/fp/map';
import toPairs from 'lodash/fp/toPairs';
import join from 'lodash/fp/join';
import isNil from 'lodash/fp/isNil';
import isEmpty from 'lodash/fp/isEmpty';
import get from 'lodash/fp/get';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    src: checker.string.optional,
    images: checker.objectOf(checker.url).optional
  }),
  children: checker.none
});

const toSet = pipe(
  toPairs,
  map(([key, url]) => `${url} ${key}`),
  join(',')
);

export default ({h}, options = {}) => {
  const ResponsiveImage = ({src, images}) => {
    if (!isNil(images) && !isEmpty(images)) {
      return (
        <img
          src={get('1x', images)}
          srcset={toSet(images)}
          alt=''
        />
      );
    }

    if (src) {
      return <img src={src}/>;
    }

    return <div className={style.empty}/>;
  };

  ResponsiveImage.validate = createValidate(conditions);
  return ResponsiveImage;
};
