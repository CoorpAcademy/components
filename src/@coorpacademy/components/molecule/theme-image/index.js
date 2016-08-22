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
    const defaultStyle = extract(image);

    const extractWithDefault = extractor(skin, image);
    const mobileStyle = extractWithDefault(`${image}-mobile`);
    const tabletStyle = extractWithDefault(`${image}-tablet`);
    const desktopStyle = extractWithDefault(`${image}-desktop`);

    return (
      <div>
        <div
          className={style.default}
          style={defaultStyle}
        />

        <div
          className={style.desktop}
          style={desktopStyle}
        />

        <div
          className={style.tablet}
          style={tabletStyle}
        />

        <div
          className={style.mobile}
          style={mobileStyle}
        />
      </div>
    );
  };

  ThemeImage.validate = createValidate(conditions);
  return ThemeImage;
};
