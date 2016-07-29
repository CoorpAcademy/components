import { checker, createValidate } from '../../../util/validation';
import { extractImage } from '../../../util/image';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    image: checker.string
  }),
  children: checker.none
});

export default (engine, options = {}) => {
  const {h} = engine;
  const {skin} = options;

  const ThemeImage = props => {
    const image = props.image;
    const desktopStyle = extractImage(image, skin);
    const mobileStyle = extractImage(`${image}-mobile`, skin, image);
    const retinaStyle = extractImage(`${image}-retina`, skin, image);

    return (
      <div>
        <div
          className={style.desktop}
          style={desktopStyle}
        />

        <div
          className={style.mobile}
          style={mobileStyle}
        />

        <div
          className={style.retina}
          style={retinaStyle}
        />
      </div>
    );
  };

  ThemeImage.validate = createValidate(conditions);
  return ThemeImage;
};
