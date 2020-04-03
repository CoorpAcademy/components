import includes from 'lodash/fp/includes';

const isExternalContent = type => includes(type, ['scorm', 'video', 'article']);

export default isExternalContent;
