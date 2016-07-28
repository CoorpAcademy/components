import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import { checker, createValidate } from '../../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    image: checker.string
  }),
  children: checker.none
});

export default (engine, options) => {
  const {h} = engine;
  const {skin} = options;

  const ThemeImage = props => {
    const desktop = get(`images[${props.image}]`, skin);
    const retina = getOr(desktop, `images[${props.image}-retina]`, skin);
    const mobile = getOr(desktop, `images[${props.image}-mobile]`, skin);
    const height = get(`sizes[${props.image}].height`, skin);
    const margin = get(`sizes[${props.image}].margin`, skin);

    const styleOptions = {
      height,
      margin
    };

    return (
      <div>
        <div
          className={style.desktop}
          style={{
            backgroundImage: `url(${desktop})`,
            ...styleOptions
          }}
        />

        <div
          className={style.mobile}
          style={{
            backgroundImage: `url(${mobile})`,
            ...styleOptions
          }}
        />

        <div
          className={style.retina}
          style={{
            backgroundImage: `url(${retina})`,
            ...styleOptions
          }}
        />
      </div>
    );
  };

  ThemeImage.validate = createValidate(conditions);
  return ThemeImage;
};
