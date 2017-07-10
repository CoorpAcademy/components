import stringMatching from 'extended-proptypes/lib/validators/stringMatching';

export color from 'extended-proptypes/lib/validators/color';

export hex from 'extended-proptypes/lib/validators/hex';

const URL_REGEXP = /^(http(s)?:\/\/.)[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)$/;
export const url = stringMatching(URL_REGEXP);

const PATH_REGEXP = /^\/([-a-zA-Z0-9@:%_\\+.~#?&//=]*)$/;
export const path = stringMatching(PATH_REGEXP);
