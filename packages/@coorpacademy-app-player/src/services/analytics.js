// eslint-disable-next-line import/prefer-default-export
export const sendViewedMediaAnalytics = (resource, location) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'mediaViewed',
    mediaType: resource.type,
    location
  });
  return window.dataLayer;
};

export const sendProgressionAnalytics = nextContent => {
  window.dataLayer = window.dataLayer || [];
  if (nextContent.type === 'success' || nextContent.type === 'failure') {
    window.dataLayer.push({
      event: 'finishProgression',
      progression: {
        type: 'microlearning',
        state: nextContent.type
      }
    });
  }
  return window.dataLayer;
};
