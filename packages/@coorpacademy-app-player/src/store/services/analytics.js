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

export const sendProgressionAnalytics = (currentProgression, engineConfig) => {
  const state = currentProgression.state;
  /* istanbul ignore next */
  window.dataLayer = window.dataLayer || [];

  if (state.nextContent.type === 'success' || state.nextContent.type === 'failure') {
    window.dataLayer.push({
      event: 'finishProgression',
      progression: {
        type: currentProgression.engine.ref,
        state: state.nextContent.type,
        extraLife: engineConfig.remainingLifeRequests - state.remainingLifeRequests
      }
    });
  }
  return window.dataLayer;
};
