import type {Dispatch} from 'redux';
import get from 'lodash/fp/get';
import type {SlideMedia} from '@coorpacademy/review-services';
import type {ThunkOptions, VideoPropsForPlayer} from '../../types/common';
import type {StoreState} from '../../reducers';

export const SET_VIDEO_PROPS = '@@slide/SET_VIDEO_PROPS' as const;
export const SHOW_VIDEO = '@@slide/SHOW_VIDEO' as const;

export type VideoPropsPayload = {
  slideId: string;
  props: VideoPropsForPlayer;
};

export type SetVideoPropsAction = {
  type: typeof SET_VIDEO_PROPS;
  payload: VideoPropsPayload;
};
export const setVideoProps = (payload: VideoPropsPayload): SetVideoPropsAction => ({
  type: SET_VIDEO_PROPS,
  payload
});

export type ShowVideoAction = {
  type: typeof SHOW_VIDEO;
  payload: {slideId: string};
};
export const showVideo = (slideId: string): ShowVideoAction => ({
  type: SHOW_VIDEO,
  payload: {slideId}
});

export const fetchPropsVideo =
  (slideId: string) =>
  async (
    dispatch: Dispatch,
    getState: () => StoreState,
    {appendVideoOptions}: ThunkOptions
  ): Promise<void> => {
    const state = getState();
    const slideFromAPI = get(['data', 'slides', slideId], state);
    if (!slideFromAPI) {
      return;
    }

    const slideMedia = get(['question', 'medias', '0'], slideFromAPI) as SlideMedia;
    if (slideMedia && slideMedia.type === 'video') {
      const videoProps = get(['data', 'videos', slideId], state);
      if (videoProps) {
        dispatch(showVideo(slideId));
        return;
      }

      const props = await appendVideoOptions(slideMedia);
      props.src[0].loading = false; // set to false to not show it until the next slide is unstack
      dispatch(
        setVideoProps({
          slideId,
          props
        })
      );
    }
    return;
  };
