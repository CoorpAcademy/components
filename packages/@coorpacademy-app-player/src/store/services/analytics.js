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
  window.dataLayer = window.dataLayer || [];

  if (state.nextContent.type === 'success' || state.nextContent.type === 'failure') {
    const nbExtraLifeUsed =
      state.remainingLifeRequests < 0
        ? 0
        : engineConfig.remainingLifeRequests - state.remainingLifeRequests;
    window.dataLayer.push({
      event: 'finishProgression',
      progression: {
        type: currentProgression.engine.ref,
        state: state.nextContent.type,
        nbExtraLifeUsed
      }
    });
  }
  return window.dataLayer;
};
