export const TOURGUIDE_TRACK_STARTED = 'ui/tourguide/track-started';
export const TOURGUIDE_TRACK_STEP_VIEWED = 'ui/tourguide/track-step-viewed';
export const TOURGUIDE_TRACK_COMPLETED = 'ui/tourguide/track-completed';
export const TOURGUIDE_TRACK_DISMISSED = 'ui/tourguide/track-dismissed';

export const trackTourguideStarted = (group, stepTracking) => ({
  type: TOURGUIDE_TRACK_STARTED,
  payload: {group, ...stepTracking}
});

export const trackTourguideStepViewed = (group, stepTracking) => ({
  type: TOURGUIDE_TRACK_STEP_VIEWED,
  payload: {group, ...stepTracking}
});

export const trackTourguideCompleted = (group, stepTracking) => ({
  type: TOURGUIDE_TRACK_COMPLETED,
  payload: {group, ...stepTracking}
});

export const trackTourguideDismissed = (group, stepTracking) => ({
  type: TOURGUIDE_TRACK_DISMISSED,
  payload: {group, ...stepTracking}
});
