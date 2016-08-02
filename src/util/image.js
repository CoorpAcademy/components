import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';

const extractor = (skin, defaultImage) => image => {
  const defaultUrl = get(['images', defaultImage], skin);
  const url = getOr(defaultUrl, ['images', image], skin);

  const defaultProperties = get(['properties', defaultImage], skin);
  const properties = getOr(defaultProperties, ['properties', image], skin);

  const style = url ? {
    backgroundImage: `url(${url})`,
    ...properties
  } : null;

  return style;
};

export {
  extractor
};
