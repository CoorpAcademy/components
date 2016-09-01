import get from 'lodash/fp/get';
import {checker, createValidate} from '../../util/validation';

import createLink from '../../atom/link';
import RadialFocusBehaviour from '../../behaviour/effects/radial-focus';

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
  const RadialFocus = RadialFocusBehaviour(treant, options);
  const {h} = treant;
  const {skin, translate} = options;
  const bg = get('images.hero', skin);

  const Hero = (props, children) => {
    const {url, title} = props;
    const text = translate ? translate(title) : title;

    return (
      <div
        className={style.hero}
        style={{
          backgroundImage: `url(${bg})`
        }}
      >
        <RadialFocus>
          <Link
            href={url}
            className={style.cta}
          >
            <div className={style.label}>
              <span>{text}</span>
            </div>
          </Link>
        </RadialFocus>
      </div>
    );
  };

  Hero.validate = createValidate(conditions);
  return Hero;
};
