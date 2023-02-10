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
  SlideIdFromAPI
} from '@coorpacademy/review-services';
import {
  computeNextStepAfterAnswerForReview,
  getConfig,
  updateState
} from '@coorpacademy/progression-engine';
import {
  freeTextSlide,
  freeTextWithYoutube,
  qcmDragSlide,
  qcmGraphicSlide,
  qcmGraphicWithVimeo,
  qcmSlide,
  qcmSlideWithOmniplayer,
  sliderSlide,
  sliderWithUptale,
  templateSlide,
  templateWithMp4Player
} from './fixtures';

export const SKILL_REF_FOR_DEFAULT_SLIDES = 'skill_NyxtYFYir';
export const SKILL_REF_FOR_MANY_MEDIA = 'skill_many_media';

const getContent = (ref: string): ReviewContent => ({
  ref,
  type: 'skill'
});

const engine: ReviewEngine = {
  ref: 'review'
};

const getSlides = (skillRef: string): SlideFromAPI[] => {
  switch (skillRef) {
    case SKILL_REF_FOR_MANY_MEDIA:
      return [
        freeTextWithYoutube,
        qcmGraphicWithVimeo,
        qcmSlideWithOmniplayer,
        sliderWithUptale,
        templateWithMp4Player
      ];

    case SKILL_REF_FOR_DEFAULT_SLIDES:
    default:
      return [freeTextSlide, qcmGraphicSlide, qcmSlide, sliderSlide, templateSlide];
  }
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
  [SKILL_REF_FOR_DEFAULT_SLIDES]: {
    ref: SKILL_REF_FOR_DEFAULT_SLIDES,
    name: 'Digital Awareness'
  },
  [SKILL_REF_FOR_MANY_MEDIA]: {
    ref: SKILL_REF_FOR_MANY_MEDIA,
    name: 'Testing many media'
  }
};

const fetchSkillsResponse = [
  {
    skillRef: SKILL_REF_FOR_DEFAULT_SLIDES,
    slidesToReview: 2,
    name: 'Default slides',
    custom: false
  },
  {
    skillRef: SKILL_REF_FOR_MANY_MEDIA,
    slidesToReview: 2,
    name: 'Many media',
    custom: true
  }
];

const fetchRankResponse = {
  rank: 93
};

export const postProgressionResponse = (skillRef: string): ProgressionFromAPI => ({
  _id: '62b1d1087aa12f00253f40ee',
  content: getContent(skillRef),
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
});

export const progressionSlideWithPendingSlide = (skillRef: string): ProgressionFromAPI => ({
  _id: '62b1d1087aa12f00253f40ee',
  content: getContent(skillRef),
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
});

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

const availableContent = (
  skillRef: string
): Array<{ref: string; slides: SlideFromAPI[]; rules: null}> => [
  {
    ref: skillRef,
    slides: getSlides(skillRef),
    rules: null
  }
];

const getPostAnswer = (progression: ProgressionFromAPI, answer: string[]): ProgressionFromAPI => {
  const reviewConfig: Config = getConfig({ref: 'review', version: '1'});
  const action = [
    computeNextStepAfterAnswerForReview(
      reviewConfig,
      progression.state,
      availableContent(progression.content.ref),
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

export const services: Services = {
  fetchSkill: ref => Promise.resolve(fetchSkillResponse[ref]),
  fetchSkills: () => Promise.resolve(fetchSkillsResponse),
  fetchSlide: ref => Promise.resolve({...getSlideFixture(ref), universalRef: ref, _id: ref}),
  postProgression: (skillRef: string) => Promise.resolve(postProgressionResponse(skillRef)),
  postAnswer: (progression: ProgressionFromAPI, _: string, answer: string[]) =>
    Promise.resolve(getPostAnswer(progression, answer)),
  fetchCorrection: ref => Promise.resolve(getChoicesCorrection(ref)),
  fetchRank: () => Promise.resolve(fetchRankResponse),
  fetchSlidesToReviewBySkillRef: () => Promise.resolve(fetchSlidesToReviewBySkillRefResponse)
};
