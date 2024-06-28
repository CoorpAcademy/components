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

const selectedSkills = ['skillRef1', 'skillRef2', 'skillRef3', 'skillRef4'];

const skillsInformation = {
  skillRef1: {
    availableForReview: false,
    stats: {
      score: 15.3,
      content: 120,
      contentCompleted: 12,
      questionsToReview: 123,
      learningTime: 8
    }
  },
  skillRef2: {
    availableForReview: false,
    stats: {
      score: 56.3,
      content: 120,
      contentCompleted: 65,
      questionsToReview: 234,
      learningTime: 5
    }
  },
  skillRef3: {
    availableForReview: false,
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
    stats: {
      score: 83.3,
      content: 120,
      contentCompleted: 89,
      questionsToReview: 345,
      learningTime: 7
    }
  },
  skillRef5: {
    availableForReview: false,
    stats: {
      score: 43.3,
      content: 120,
      contentCompleted: 62,
      questionsToReview: 444,
      learningTime: 6
    }
  },
  skillRef6: {
    availableForReview: false,
    stats: {
      score: 63.3,
      content: 120,
      contentCompleted: 62,
      questionsToReview: 24,
      learningTime: 9
    }
  },
  skillRef7: {
    availableForReview: false,
    stats: {
      score: 63.3,
      content: 120,
      contentCompleted: 62,
      questionsToReview: 24,
      learningTime: 9
    }
  },
  skillRef8: {
    availableForReview: false,
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
  isLoadng: false,
  onSkillFocusConfirm: () => console.log('confirm'),
  onReviewSkill: () => console.log('review'),
  onExploreSkill: () => console.log('explore')
};

export default {
  props: defaultProps
};
