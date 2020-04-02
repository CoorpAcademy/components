const isExternalContent = type => {
  switch (type) {
    case 'scorm':
    case 'video':
    case 'article':
      return true;
    default:
      return false;
  }
};

export default isExternalContent;
