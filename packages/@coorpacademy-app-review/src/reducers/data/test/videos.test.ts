import test from 'ava';
import {NEXT_SLIDE} from '../../../actions/ui/next-slide';
import {SET_VIDEO_PROPS, ShowVideoAction, SHOW_VIDEO} from '../../../actions/api/fetch-video-props';
import reducer, {VideoPropsState} from '../videos';
import {VideoPropsForPlayer} from '../../../types/common';

const videoProps: VideoPropsForPlayer = {
  type: 'video',
  src: [
    {
      mimeType: 'application/jwplayer',
      videoId: '12345',
      jwpOptions: {
        playerId: '7IMa4DCK',
        playerScript: 'https://static.coorpacademy.com/JwPlayer/8.6.3/jwplayer.js'
      },
      loading: false,
      type: 'video'
    }
  ]
};

test('should have initial value', t => {
  const state = reducer({}, {} as ShowVideoAction);
  t.deepEqual(state, {});
});

test('should set the value of Video Props for a slide when SET_VIDEO_PROPS action was dispatched', t => {
  const state = reducer(
    {},
    {
      type: SET_VIDEO_PROPS,
      payload: {
        slideId: 'sli_with_media',
        props: videoProps
      }
    }
  );
  t.deepEqual(state, {
    sli_with_media: videoProps
  });
});

test('should return same state when NEXT_SLIDE action is called but no video belongs to the currentSlideRef', t => {
  const initialState = {
    anserewed_slide_with_media: videoProps
  };
  const state = reducer(initialState, {
    type: NEXT_SLIDE,
    payload: {
      currentSlideRef: 'slide_without_media',
      nextSlideRef: 'next_slide',
      animationType: 'restack',
      totalCorrectAnswers: 0,
      answeredSlides: []
    }
  });
  t.deepEqual(state, initialState);
});

test('should hide a video when NEXT_SLIDE action is called and currentSlideRef has video', t => {
  const initialState = {
    current_slide: videoProps
  };
  const state = reducer(initialState, {
    type: NEXT_SLIDE,
    payload: {
      currentSlideRef: 'current_slide',
      nextSlideRef: 'next_slide',
      animationType: 'restack',
      totalCorrectAnswers: 0,
      answeredSlides: []
    }
  });
  t.deepEqual(state, {
    current_slide: {
      type: 'video',
      src: [
        {
          mimeType: 'application/jwplayer',
          videoId: '12345',
          jwpOptions: {
            playerId: '7IMa4DCK',
            playerScript: 'https://static.coorpacademy.com/JwPlayer/8.6.3/jwplayer.js'
          },
          loading: true,
          type: 'video'
        }
      ]
    }
  });
});

test('should return same state when SHOW_VIDEO action is called but no video belongs to the currentSlideRef', t => {
  const initialState = {
    anserewed_slide_with_media: videoProps
  };
  const state = reducer(initialState, {
    type: SHOW_VIDEO,
    payload: {
      slideId: 'slide_without_media'
    }
  });
  t.deepEqual(state, initialState);
});

test('should show a video when SHOW_VIDEO action is called and slideId has video', t => {
  const initialState: VideoPropsState = {
    current_slide: {
      type: 'video',
      src: [
        {
          mimeType: 'application/jwplayer',
          videoId: '12345',
          jwpOptions: {
            playerId: '7IMa4DCK',
            playerScript: 'https://static.coorpacademy.com/JwPlayer/8.6.3/jwplayer.js'
          },
          loading: true,
          type: 'video'
        }
      ]
    }
  };
  const state = reducer(initialState, {
    type: SHOW_VIDEO,
    payload: {
      slideId: 'current_slide'
    }
  });
  t.deepEqual(state, {
    current_slide: {
      type: 'video',
      src: [
        {
          mimeType: 'application/jwplayer',
          videoId: '12345',
          jwpOptions: {
            playerId: '7IMa4DCK',
            playerScript: 'https://static.coorpacademy.com/JwPlayer/8.6.3/jwplayer.js'
          },
          loading: false,
          type: 'video'
        }
      ]
    }
  });
});
