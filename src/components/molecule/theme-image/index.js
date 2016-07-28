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

const imageSetup = (image, skin) => {
  const desktop = get(`images[${image}]`, skin);
  const retina = getOr(desktop, `images[${image}-retina]`, skin);
  const mobile = getOr(desktop, `images[${image}-mobile]`, skin);

  const height = get(`sizes[${image}].height`, skin);
  const margin = get(`sizes[${image}].margin`, skin);

  const heightRetina = get(`sizes[${image}-retina].height`, skin);
  const marginRetina = get(`sizes[${image}-retina].margin`, skin);

  const heightMobile = get(`sizes[${image}-mobile].height`, skin);
  const marginMobile = get(`sizes[${image}-mobile].margin`, skin);

  const desktopStyle = {
    backgroundImage: `url(${desktop})`,
    height,
    margin
  };

  const retinaStyle = {
    backgroundImage: `url(${retina})`,
    height: heightRetina,
    margin: marginRetina
  };

  const mobileStyle = {
    backgroundImage: `url(${mobile})`,
    height: heightMobile,
    margin: marginMobile
  };

  return {
    desktop,
    retina,
    mobile,
    desktopStyle,
    mobileStyle,
    retinaStyle
  };
};

export default (engine, options = {}) => {
  const {h} = engine;
  const {skin} = options;

  const ThemeImage = props => {
    const {
      desktop,
      retina,
      mobile,
      desktopStyle,
      mobileStyle,
      retinaStyle
    } = imageSetup(props.image, skin);

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
