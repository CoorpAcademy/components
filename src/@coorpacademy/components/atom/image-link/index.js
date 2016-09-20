import pipe from 'lodash/fp/pipe';
import map from 'lodash/fp/map';
import get from 'lodash/fp/get';
import set from 'lodash/fp/set';
import toPairs from 'lodash/fp/toPairs';
import join from 'lodash/fp/join';
import isObject from 'lodash/fp/isObject';
import isNil from 'lodash/fp/isNil';
import {checker, createValidate} from '../../util/validation';
import identity from 'lodash/fp/identity';
import {pushToHistory} from '../../util/navigation';

const conditions = checker.shape({
  props: checker.shape({
    className: checker.string.optional,
    href: checker.string,
    src: checker.oneOfType([
      checker.string,
      checker.objectOf(checker.url)
    ]).optional
  }).strict
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

export default (treant, options = {}) => {
  const {h} = treant;
  const {history: {createHref = identity} = {}} = options;
  const onClick = pushToHistory(options);

  const ImageLink = (props) => {
    if(isNil(props.src)) {
      return <div
        className={style.empty}
      />;
    }

    return (
      <a
        {...props}
        href={createHref(props.href)}
        onClick={onClick(props)}
      >
        <img
          alt=''
          {...props}
          {...toSrcSet(props)}
        />      
      </a>
    );
  };

  ImageLink.validate = createValidate(conditions);
  return ImageLink;
};
