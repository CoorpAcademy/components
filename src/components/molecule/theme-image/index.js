import get from 'lodash/fp/get';
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
    const bg = get(`images[${props.image}]`, skin);
    const height = get(`sizes[${props.image}].height`, skin);
    const margin = get(`sizes[${props.image}].margin`, skin);

    const styleOptions = {
      backgroundImage: `url(${bg})`,
      height,
      margin
    };

    return <div
      className={style.default}
      style={styleOptions}
    />;
  };

  ThemeImage.validate = createValidate(conditions);
  return ThemeImage;
};
