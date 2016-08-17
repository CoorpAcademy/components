import { checker, createValidate } from '../../util/validation';
import { extractor } from '../../util/image';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    image: checker.string
  }),
  children: checker.none
});

export default ({h}, {skin} = {}) => {
  const extract = extractor(skin);

  const ThemeImage = ({image}) => {
    const desktopStyle = extract(image);

    const extractWithDefault = extractor(skin, image);
    const mobileStyle = extractWithDefault(`${image}-mobile`);
    const retinaStyle = extractWithDefault(`${image}-retina`);

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
