export const UI_VIDEO_PLAY = '@@ui/VIDEO_PLAY';
export const UI_VIDEO_PAUSE = '@@ui/VIDEO_PAUSE';
export const UI_VIDEO_ENDED = '@@ui/VIDEO_ENDED';

export const play = payload => ({
  type: UI_VIDEO_PLAY,
  payload
});

export const pause = payload => ({
  type: UI_VIDEO_PAUSE,
  payload
});

export const ended = payload => ({
  type: UI_VIDEO_ENDED,
  payload
});
