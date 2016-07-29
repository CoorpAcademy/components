import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import mapKeys from 'lodash/fp/mapKeys';

const extractImage = (image, skin, defaultImage) => {
  const defaultUrl = get(`images[${defaultImage}]`, skin);
  const url = getOr(defaultUrl, `images[${image}]`, skin);
  const style = {
    backgroundImage: `url(${url})`
  };

  mapKeys(key => {
    style[key] = get(`properties[${image}][${key}]`, skin);
  }, get(`properties[${image}]`, skin));

  return style;
};

export {
  extractImage
};
