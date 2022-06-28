// -----------------------------------------------------------------------------

export const START_FETCHING = '@@ui/START_FETCHING';
export const STOP_FETCHING = '@@ui/STOP_FETCHING';

// -----------------------------------------------------------------------------

export type StartFetching = {
  type: typeof START_FETCHING;
};

export type StopFetching = {
  type: typeof STOP_FETCHING;
};

// -----------------------------------------------------------------------------

export const startFetching = (): StartFetching => ({type: START_FETCHING});
export const stopFetching = (): StopFetching => ({type: STOP_FETCHING});
