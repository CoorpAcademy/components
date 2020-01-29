import last from 'lodash/fp/last';

export const getFileNameFromUrl = url => last(url.split('/'));
