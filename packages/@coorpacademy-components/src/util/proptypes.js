import stringMatching from 'extended-proptypes/lib/validators/stringMatching';

const URL_REGEXP = /(http(s)?:\/\/.)[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)$/;
export const url = stringMatching(URL_REGEXP);

export color from 'extended-proptypes/lib/validators/color';
