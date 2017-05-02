import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';

export default (skin, defaultImage) => {
  const defaultUrl = get(['images', defaultImage], skin);

  return image => {
    const url = getOr(defaultUrl, ['images', image], skin);

    const style = {
      backgroundImage: url ? `url(${url})` : 'none'
    };

    return url ? style : null;
  };
};
