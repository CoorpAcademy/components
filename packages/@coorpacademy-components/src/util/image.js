import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';

export default (skin, defaultImage) => {
  const defaultUrl = get(['images', defaultImage], skin);
  const defaultProperties = get(['properties', defaultImage], skin);

  return image => {
    const url = getOr(defaultUrl, ['images', image], skin);
    const properties = getOr(defaultProperties, ['properties', image], skin);

    const style = {
      backgroundImage: `url(${url})`,
      ...properties
    };

    return url ? style : null;
  };
};
