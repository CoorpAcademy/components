import PropTypes from 'prop-types';
import stringMatching from 'extended-proptypes/lib/validators/stringMatching';

export ColorPropType from 'extended-proptypes/lib/validators/color';

export HexPropType from 'extended-proptypes/lib/validators/hex';

const URL_REGEXP = /^(http(s)?:\/\/.)[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)$/;
export const UrlPropType = stringMatching(URL_REGEXP);

const PATH_REGEXP = /^\/([-a-zA-Z0-9@:%_\\+.~#?&//=]*)$/;
export const PathPropType = stringMatching(PATH_REGEXP);

export const SrcPropType = PropTypes.oneOfType([UrlPropType, PathPropType]);
