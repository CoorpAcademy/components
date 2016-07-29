import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import mapKeys from 'lodash/fp/mapKeys';

const extractImage = (image, skin, defaultImage) => {
  const defaultUrl = get(`images[${defaultImage}]`, skin);
  const url = getOr(defaultUrl, `images[${image}]`, skin);
  const style = {
    backgroundImage: `url(${url})`
  };

  const props = url === defaultUrl ? defaultImage : image;

  mapKeys(key => {
    style[key] = get(`properties[${props}][${key}]`, skin);
  }, get(`properties[${props}]`, skin));

  return style;
};

export {
  extractImage
};
