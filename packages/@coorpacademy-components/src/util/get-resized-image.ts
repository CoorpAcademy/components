import {PixelRatio, ImageResizeMode} from 'react-native';

import buildUrlQueryParams from './build-query-string';

const MEDIAS_API = 'https://api.coorpacademy.com/api-service/medias';

type MediaAPIQueryParams = {
  url: string;
  m: ImageResizeMode | 'crop';
  q: number;
  w?: number;
  h?: number;
};

const getResizedImage = (
  url: string,
  {
    maxWidth,
    maxHeight,
    resizeMode
  }: {
    maxWidth?: number;
    maxHeight?: number;
    resizeMode?: ImageResizeMode | undefined;
  }
) => {
  if (!maxWidth && !maxHeight) {
    return url;
  }

  let queryParams: MediaAPIQueryParams = {
    url,
    m: !resizeMode || resizeMode === 'cover' ? 'crop' : 'contain',
    q: 90
  };

  if (maxWidth) {
    queryParams = {
      ...queryParams,
      w: PixelRatio.getPixelSizeForLayoutSize(maxWidth)
    };
  }

  if (maxHeight) {
    queryParams = {
      ...queryParams,
      h: PixelRatio.getPixelSizeForLayoutSize(maxHeight)
    };
  }

  const queryString = buildUrlQueryParams(queryParams);

  return `${MEDIAS_API}?${queryString}`;
};

export default getResizedImage;
