import {get, getOr} from 'lodash/fp';

const ImageElement = (skin, defaultImage) => {
  const defaultUrl = get(['images', defaultImage], skin);

  return image => {
    const url = getOr(defaultUrl, ['images', image], skin);

    const style = {
      backgroundImage: url ? `url(${url})` : 'none'
    };

    return url ? style : null;
  };
};

export default ImageElement;
