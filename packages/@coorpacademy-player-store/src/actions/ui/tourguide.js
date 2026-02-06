export const SHOW_TOURGUIDE = 'ui/tourguide/show';
export const HIDE_TOURGUIDE = 'ui/tourguide/hide';
export const SET_TOURGUIDE_STEP = 'ui/tourguide/set-step';

export const showTourguide = (step, forceStart = false) => ({
  type: SHOW_TOURGUIDE,
  payload: {step, forceStart}
});

export const hideTourguide = () => ({
  type: HIDE_TOURGUIDE
});

export const setTourguideStep = step => ({
  type: SET_TOURGUIDE_STEP,
  payload: {step}
});
