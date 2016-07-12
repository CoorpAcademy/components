import get from 'lodash/fp/get';
import { checker, createValidate } from '../../../util/validation';
import style from './hero.css';
import RadialFocusBehaviour from '../../behaviour/effects/radial-focus';

const conditions = checker.shape({
  props: checker.shape({
    url: checker.string,
    theme: checker.string.optional,
    title: checker.string
  }),
  children: checker.none
});

export default (engine, options = {}) => {
  const RadialFocus = RadialFocusBehaviour(engine, options);

  const Hero = (props, children) => {
    const {h} = engine;
    const {skin, translate} = options;
    const {url, theme, title} = props;
    const text = translate ? translate(title) : title;

    const defaultBG = get('images.tree', skin);
    const themeBG = theme && get('images.dashboard[theme]', skin);

    return (
      <div
        className={style.hero}
        style={{
          backgroundImage: `url(${themeBG || defaultBG})`
        }}
      >
        <RadialFocus>
          <a
            href={url}
            className={style.cta}
          >
            <div className={style.label}>
              <span>{text}</span>
            </div>
          </a>
        </RadialFocus>
      </div>
    );
  };

  Hero.validate = createValidate(conditions);
  return Hero;
};
