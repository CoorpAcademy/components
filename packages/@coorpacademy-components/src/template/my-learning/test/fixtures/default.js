import LearningPrioritiesProps from '../../../../molecule/dashboard/cards-list/test/fixtures/learning-priority-card-list';
import {COLORS} from '../../../../variables/colors';

const skills = [
  'skillRef1',
  'skillRef2',
  'skillRef3',
  'skillRef4',
  'skillRef5',
  'skillRef6',
  'skillRef7',
  'skillRef8'
];

const selectedSkills = ['skillRef1', 'skillRef2', 'skillRef5'];

export const BANANA_ICON_PROPS = {color: COLORS.cm_orange_800, name: 'banana'};
export const HOT_MUG_ICON_PROPS = {color: COLORS.cm_orange_800, name: 'mug-hot'};

const skillsInformation = {
  skillRef1: {
    availableForReview: true,
    icon: HOT_MUG_ICON_PROPS,
    stats: {
      score: 15.3,
      content: 120,
      contentCompleted: 12,
      questionsToReview: 123,
      learningTime: 8
    }
  },
  skillRef2: {
    availableForReview: true,
    icon: HOT_MUG_ICON_PROPS,
    stats: {
      score: 56.3,
      content: 120,
      contentCompleted: 65,
      questionsToReview: 234,
      learningTime: 5
    }
  },
  skillRef3: {
    availableForReview: true,
    icon: HOT_MUG_ICON_PROPS,
    stats: {
      score: 23.3,
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
      score: 83.3,
      content: 120,
      contentCompleted: 89,
      questionsToReview: 345,
      learningTime: 7
    }
  },
  skillRef5: {
    availableForReview: true,
    icon: HOT_MUG_ICON_PROPS,
    stats: {
      score: 43.3,
      content: 120,
      contentCompleted: 62,
      questionsToReview: 444,
      learningTime: 6
    }
  },
  skillRef6: {
    availableForReview: true,
    icon: HOT_MUG_ICON_PROPS,
    stats: {
      score: 63.3,
      content: 120,
      contentCompleted: 62,
      questionsToReview: 24,
      learningTime: 9
    }
  },
  skillRef7: {
    availableForReview: true,
    icon: HOT_MUG_ICON_PROPS,
    stats: {
      score: 63.33333333,
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
      score: 63.3,
      content: 120,
      contentCompleted: 62,
      questionsToReview: 24,
      learningTime: 9
    }
  }
};

const skillsLocales = {
  skillRef1: 'Creativity and innovation',
  skillRef2: 'Critical thinking and analysis',
  skillRef3: 'Digital culture',
  skillRef4: 'Digital dexterity',
  skillRef5: 'Digital communication',
  skillRef6: 'Active listening',
  skillRef7: 'Active Watching',
  skillRef8: 'Active Working'
};

export const defaultProps = {
  skills,
  selectedSkills,
  skillsInformation,
  skillsLocales,
  isLoading: false,
  onSkillFocusConfirm: () => console.log('confirm'),
  onExploreSkill: skillRef => console.log(skillRef),
  learningPriorities: {
    ...LearningPrioritiesProps.props,
    title: 'Learning priorities',
    subtitle: 'Your top learning priorities defined by your company'
  }
};

export default {
  props: defaultProps
};
