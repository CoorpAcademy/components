import get from 'lodash/fp/get';
import identity from 'lodash/fp/identity';
import getOr from 'lodash/fp/getOr';
import {checker, createValidate} from '../../util/validation';
import createLink from '../../atom/link';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    url: checker.string,
    title: checker.string
  }).strict,
  children: checker.none
});

export default (treant, options = {}) => {
  const Link = createLink(treant, options);
  const {h} = treant;
  const {skin, translate = identity} = options;
  const bg = get('images.hero', skin);

  const Hero = (props, children) => {
    const {url, title} = props;
    const text = translate(title);
    const backgroundImage = bg ? `url(${bg})` : '';

    return (
      <div
        className={style.hero}
        style={{
          backgroundImage
        }}
      >
        <Link
          href={url}
          className={style.cta}>
          <div
            className={style.label}
            style={{
              color: getOr('#00b0ff', 'common.primary', skin)
            }}
          >
            {text}
            <span
              className={style.bar}
              style={{
                backgroundColor: getOr('#00b0ff', 'common.primary', skin)
              }}
              >
              </span>
          </div>
        </Link>
      </div>
    );
  };

  Hero.validate = createValidate(conditions);
  return Hero;
};
