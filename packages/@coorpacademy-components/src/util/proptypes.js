import PropTypes from 'prop-types';
import includes from 'lodash/fp/includes';
import split from 'lodash/fp/split';
import every from 'lodash/fp/every';
import stringMatching from 'extended-proptypes/lib/validators/stringMatching';

import _ColorPropType from 'extended-proptypes/lib/validators/color';
import _HexPropType from 'extended-proptypes/lib/validators/hex';

const URL_REGEXP =
  /^(http(s)?:\/\/.)[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)$/;
export const UrlPropType = stringMatching(URL_REGEXP);

const PATH_REGEXP = /^\/([-a-zA-Z0-9@:%_\\+.~#?&//=]*)$/;
export const PathPropType = stringMatching(PATH_REGEXP);

export const SrcPropType = PropTypes.oneOfType([UrlPropType, PathPropType]);

export const ImagePropType = (propValue, key, componentName) => {
  if (
    every(value =>
      includes(value, ['image/jpeg', 'image/png', 'image/svg+xml', 'image/*', 'application/pdf'])
    )(split(',')(propValue[key]))
  )
    return;
  return new Error(
    `Invalid prop value: ${propValue[key]}, at component: ${componentName}. Expected a valid image type: image/jpeg, image/png, image/* image/svg+xml or application/pdf.`
  );
};

export const ColorPropType = _ColorPropType;
export const HexPropType = _HexPropType;
