import type {Dispatch} from 'redux';
import get from 'lodash/fp/get';
import type {SlideFromAPI, SlideMedia, VideoMedia} from '@coorpacademy/review-services';
import type {ThunkOptions} from '../../types/common';
import type {StoreState} from '../../reducers';

export const SET_VIDEO_PROPS = '@@slide/SET_VIDEO_PROPS' as const;

export type VideoPropsPayload = {
  slideId: string;
  props: unknown;
};

export type SetVideoPropsAction = {
  type: typeof SET_VIDEO_PROPS;
  payload: VideoPropsPayload;
};
export const setVideoProps = (payload: VideoPropsPayload): SetVideoPropsAction => ({
  type: SET_VIDEO_PROPS,
  payload
});

export const fetchPropsVideo =
  (slideFromAPI: SlideFromAPI) =>
  async (
    dispatch: Dispatch,
    getState: () => StoreState,
    {appendVideoOptions}: ThunkOptions
  ): Promise<void> => {
    const slideMedia = get('question.medias.0', slideFromAPI) as SlideMedia;
    if (slideMedia && slideMedia.type === 'video') {
      const props = (await appendVideoOptions(slideMedia)) as VideoMedia;
      console.log('-----------> props for player', props);
      dispatch(
        setVideoProps({
          slideId: slideFromAPI._id,
          props
        })
      );
    }
    return;
  };
