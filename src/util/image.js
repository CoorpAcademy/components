import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';

const extractImage = (image, skin, defaultImage) => {
  const defaultUrl = get(['images', defaultImage], skin);
  const url = getOr(defaultUrl, ['images', image], skin);

  const defaultProperties = get(['properties', defaultImage], skin);
  const properties = getOr(defaultProperties, ['properties', image], skin);

  const style = {
    backgroundImage: `url(${url})`,
    ...properties
  };

  return style;
};

export {
  extractImage
};
