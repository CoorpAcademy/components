export const UI_VIDEO_PLAY = '@@ui/VIDEO_PLAY';
export const UI_VIDEO_PAUSE = '@@ui/VIDEO_PAUSE';
export const UI_VIDEO_ENDED = '@@ui/VIDEO_ENDED';

export const play = lessonId => ({
  type: UI_VIDEO_PLAY,
  payload: {
    lessonId
  }
});

export const pause = lessonId => ({
  type: UI_VIDEO_PAUSE,
  payload: {
    lessonId
  }
});

export const ended = lessonId => ({
  type: UI_VIDEO_ENDED,
  payload: {
    lessonId
  }
});
