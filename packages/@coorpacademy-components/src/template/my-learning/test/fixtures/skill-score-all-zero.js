import {defaultProps, BANANA_ICON_PROPS} from './default';

export default {
  props: {
    ...defaultProps,
    skillsInformation: {
      skillRef1: {
        availableForReview: true,
        icon: BANANA_ICON_PROPS,
        stats: {
          score: 0,
          content: 120,
          contentCompleted: 12,
          questionsToReview: 123,
          learningTime: 8
        }
      },
      skillRef2: {
        availableForReview: true,
        icon: BANANA_ICON_PROPS,
        stats: {
          score: 0,
          content: 120,
          contentCompleted: 65,
          questionsToReview: 234,
          learningTime: 5
        }
      },
      skillRef3: {
        availableForReview: true,
        icon: BANANA_ICON_PROPS,
        stats: {
          score: 0,
          content: 120,
          contentCompleted: 78,
          questionsToReview: 256,
          learningTime: 1
        }
      },
      skillRef4: {
        availableForReview: false,
        icon: BANANA_ICON_PROPS,
        stats: {
          score: 0,
          content: 120,
          contentCompleted: 89,
          questionsToReview: 345,
          learningTime: 7
        }
      },
      skillRef5: {
        availableForReview: true,
        icon: BANANA_ICON_PROPS,
        stats: {
          score: 0,
          content: 120,
          contentCompleted: 62,
          questionsToReview: 444,
          learningTime: 6
        }
      },
      skillRef6: {
        availableForReview: true,
        icon: BANANA_ICON_PROPS,
        stats: {
          score: 0,
          content: 120,
          contentCompleted: 62,
          questionsToReview: 24,
          learningTime: 9
        }
      },
      skillRef7: {
        availableForReview: true,
        icon: BANANA_ICON_PROPS,
        stats: {
          score: 0,
          content: 120,
          contentCompleted: 62,
          questionsToReview: 24,
          learningTime: 9
        }
      },
      skillRef8: {
        availableForReview: false,
        icon: BANANA_ICON_PROPS,
        stats: {
          score: 0,
          content: 120,
          contentCompleted: 62,
          questionsToReview: 24,
          learningTime: 9
        }
      }
    }
  }
};
