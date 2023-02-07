import get from 'lodash/fp/get';
import type {
  Config,
  CorrectionFromAPI,
  ProgressionFromAPI,
  ProgressionState,
  ReviewContent,
  ReviewEngine,
  Services,
  Skill,
  SlideFromAPI,
  SlideIdFromAPI,
  VideoMedia
} from '@coorpacademy/review-services';
import {
  computeNextStepAfterAnswerForReview,
  getConfig,
  updateState
} from '@coorpacademy/progression-engine';
import type {Media} from '@coorpacademy/components/es/molecule/questions/types';
import {qcmDragSlide} from './fixtures/qcm-drag';
import {qcmSlide} from './fixtures/qcm';
import {qcmGraphicSlide} from './fixtures/qcm-graphic';
import {freeTextSlide} from './fixtures/free-text';
import {sliderSlide} from './fixtures/slider';
import {templateSlide} from './fixtures/template';

const content: ReviewContent = {
  ref: 'skill_NyxtYFYir',
  type: 'skill'
};

const engine: ReviewEngine = {
  ref: 'review'
};

const getSlideFixture = (ref: string): SlideFromAPI => {
  switch (ref) {
    case qcmSlide.universalRef:
      return qcmSlide;
    case qcmGraphicSlide.universalRef:
      return qcmGraphicSlide;
    case freeTextSlide.universalRef:
      return freeTextSlide;
    case templateSlide.universalRef:
      return templateSlide;
    case qcmDragSlide.universalRef:
      return qcmDragSlide;
    default:
      return sliderSlide;
  }
};

const fetchSkillResponse: Record<string, Skill> = {
  skill_NyxtYFYir: {
    ref: 'skill_NyxtYFYir',
    name: 'Digital Awareness'
  }
};

const fetchSkillsResponse = [
  {
    skillRef: '_skill-ref',
    slidesToReview: 2,
    name: 'skill-test',
    custom: false
  },
  {
    skillRef: '_skill-ref-2',
    slidesToReview: 2,
    name: 'skill-test-2',
    custom: true
  }
];

const fetchRankResponse = {
  rank: 93
};

export const postProgressionResponse: ProgressionFromAPI = {
  _id: '62b1d1087aa12f00253f40ee',
  content,
  engine,
  state: {
    allAnswers: [],
    isCorrect: true,
    nextContent: {
      ref: freeTextSlide.universalRef,
      type: 'slide'
    },
    pendingSlides: [],
    slides: [],
    step: {
      current: 1
    },
    stars: 0
  }
};

export const progressionSlideWithPendingSlide: ProgressionFromAPI = {
  _id: '62b1d1087aa12f00253f40ee',
  content,
  engine,
  state: {
    allAnswers: [
      {
        slideRef: freeTextSlide.universalRef,
        isCorrect: false,
        answer: ['Wrong']
      },
      {
        slideRef: qcmGraphicSlide.universalRef,
        isCorrect: true,
        answer: ['Faux']
      },
      {
        slideRef: qcmSlide.universalRef,
        isCorrect: false,
        answer: ['Wrong']
      },
      {
        slideRef: sliderSlide.universalRef,
        isCorrect: true,
        answer: ['7']
      },
      {
        slideRef: templateSlide.universalRef,
        isCorrect: true,
        answer: ['Leaderboard', 'utilisateurs', 'étoiles']
      },
      {
        slideRef: freeTextSlide.universalRef,
        isCorrect: true,
        answer: ['Benchmark']
      }
    ],
    isCorrect: true,
    nextContent: {
      ref: qcmSlide.universalRef,
      type: 'slide'
    },
    content: {
      ref: freeTextSlide.universalRef,
      type: 'slide'
    },
    pendingSlides: [qcmSlide.universalRef],
    slides: [
      freeTextSlide.universalRef,
      qcmGraphicSlide.universalRef,
      qcmSlide.universalRef,
      sliderSlide.universalRef,
      templateSlide.universalRef,
      freeTextSlide.universalRef
    ],
    step: {
      current: 7
    },
    stars: 32
  }
};

export const getChoicesCorrection = (ref: string, wrongChoice = false): CorrectionFromAPI => {
  switch (ref) {
    case qcmSlide.universalRef: {
      const correctAnswer = [get('question.content.answers', qcmSlide)];
      return {
        correctAnswer,
        corrections: wrongChoice
          ? [
              {
                answer: get('question.content.answers', qcmSlide),
                isCorrect: false
              }
            ]
          : [{answer: correctAnswer[0], isCorrect: true}]
      };
    }
    case qcmGraphicSlide.universalRef: {
      const correctAnswer = [get('question.content.answers', qcmGraphicSlide)];
      return {
        correctAnswer,
        corrections: wrongChoice
          ? [{answer: get('question.content.answers', qcmGraphicSlide), isCorrect: false}]
          : [{answer: correctAnswer[0], isCorrect: true}]
      };
    }
    case freeTextSlide.universalRef: {
      const correctAnswer = [get('question.content.answers', freeTextSlide)];
      return {
        correctAnswer,
        corrections: wrongChoice
          ? [{answer: 'Nope', isCorrect: false}]
          : [{answer: correctAnswer[0], isCorrect: true}]
      };
    }
    case templateSlide.universalRef: {
      const correctAnswer = [get('question.content.answers', templateSlide)];
      return {
        correctAnswer,
        corrections: wrongChoice
          ? [
              {
                answer: get('question.content.answers', templateSlide),
                isCorrect: false
              }
            ]
          : [{answer: correctAnswer[0], isCorrect: true}]
      };
    }
    default: {
      const correctAnswer = get('question.content.answers', sliderSlide);
      return {
        correctAnswer,
        corrections: wrongChoice
          ? [
              {
                answer: '8',
                isCorrect: false
              }
            ]
          : [{answer: '7', isCorrect: true}]
      };
    }
  }
};

const fetchSlidesToReviewBySkillRefResponse: SlideIdFromAPI[] = [
  {
    slideId: sliderSlide._id
  },
  {
    slideId: templateSlide._id
  },
  {
    slideId: 'sli_Vky4XzUwr'
  },
  {
    slideId: 'sli_V12AXpOPr'
  },
  {
    slideId: 'sli_NkX57xMdS'
  },
  {
    slideId: 'sli_EyL7PDfJ8'
  },
  {
    slideId: 'sli_EkOX-xfOr'
  },
  {
    slideId: 'sli_EkOX-xmpT'
  }
];

const availableContent = [
  {
    ref: content.ref,
    slides: [freeTextSlide, qcmGraphicSlide, qcmSlide, sliderSlide, templateSlide],
    rules: null
  }
];

const getPostAnswer = (progression: ProgressionFromAPI, answer: string[]): ProgressionFromAPI => {
  const reviewConfig: Config = getConfig({ref: 'review', version: '1'});
  const action = [
    computeNextStepAfterAnswerForReview(
      reviewConfig,
      progression.state,
      availableContent,
      getSlideFixture(progression.state.nextContent.ref),
      {
        type: 'answer',
        payload: {answer, content: progression.state.nextContent, godMode: false}
      }
    )
  ];

  const newState: ProgressionState = updateState(reviewConfig, progression.state, action);
  const response: ProgressionFromAPI = {...progression, state: newState};
  return response;
};

type VideoPropsForPlayer = {
  type: string;
  src: Media[];
};

export const appendVideoOptions = (media: VideoMedia): Promise<VideoPropsForPlayer> => {
  const videoSrc = media.src[0];
  const {videoId, mediaRef} = videoSrc;
  return Promise.resolve({
    type: 'video',
    src: [
      {
        mimeType: 'application/jwplayer',
        videoId,
        mediaRef,
        type: 'video',
        jwpOptions: {
          playerId: '7IMa4DCK',
          playerScript: 'https://static.coorpacademy.com/JwPlayer/8.6.3/jwplayer.js',
          licenseKey: 'QDh3Fb2afiIAFI+XwlncwQDhNEwkXetm1y8tzWn3km8=',
          playlist: [
            {
              file: `https://content.jwplatform.com/manifests/${videoId}.m3u8`,
              tracks: [
                {
                  file: `https://content.jwplatform.com/strips/${videoId}-120.vtt`,
                  kind: 'thumbnails'
                }
              ]
            }
          ],
          customProps: {
            playbackRateControls: true,
            playbackRates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
            preload: 'auto',
            autostart: 'true',
            width: '100%',
            height: '343px',
            visualplaylist: false,
            nextUpDisplay: false
          }
        }
      }
    ]
  });
};

export const services: Services = {
  fetchSkill: ref => Promise.resolve(fetchSkillResponse[ref]),
  fetchSkills: () => Promise.resolve(fetchSkillsResponse),
  fetchSlide: ref => Promise.resolve({...getSlideFixture(ref), universalRef: ref, _id: ref}),
  postProgression: () => Promise.resolve(postProgressionResponse),
  postAnswer: (progression: ProgressionFromAPI, _: string, answer: string[]) =>
    Promise.resolve(getPostAnswer(progression, answer)),
  fetchCorrection: ref => Promise.resolve(getChoicesCorrection(ref)),
  fetchRank: () => Promise.resolve(fetchRankResponse),
  fetchSlidesToReviewBySkillRef: () => Promise.resolve(fetchSlidesToReviewBySkillRefResponse)
};
