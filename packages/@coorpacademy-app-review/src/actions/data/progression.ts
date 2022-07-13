export type ProgressionFromAPI = {
  _id: string;
  state: {
    isCorrect: boolean;
    step: {
      current: number;
    };
    nextContent: {
      type: 'success' | 'slide';
      ref: 'successExitNode' | string;
    };
    pendingSlides: [];
  };
};

// -----------------------------------------------------------------------------

export const RECEIVE_PROGRESSION = '@@data/progression/RECEIVE_PROGRESSION';
export const ERROR_CREATING_PROGRESSION = '@@data/progression/ERROR_CREATING_PROGRESSION';

// -----------------------------------------------------------------------------

export type ReceiveProgressionPayload = {
  progression: ProgressionFromAPI;
  token: string;
};

// -----------------------------------------------------------------------------

export type ReceiveProgression = {
  type: typeof RECEIVE_PROGRESSION;
  payload: ReceiveProgressionPayload;
};

export type ErrorCreatingProgression = {
  type: typeof ERROR_CREATING_PROGRESSION;
  payload: Error;
};

// -----------------------------------------------------------------------------

export const receiveProgression = (payload: ReceiveProgressionPayload): ReceiveProgression => ({
  type: RECEIVE_PROGRESSION,
  payload
});

export const errorCreatingProgression = (error: Error): ErrorCreatingProgression => ({
  type: ERROR_CREATING_PROGRESSION,
  payload: error
});
