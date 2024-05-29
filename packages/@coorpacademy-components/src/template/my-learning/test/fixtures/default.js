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
    availableForReview: true,
    stats: {
      score: 15.3,
      courses: 120,
      coursesCompleted: 12,
      questionsAnswered: 123,
      learningHours: 8
    }
  },
  skillRef2: {
    availableForReview: true,
    stats: {
      score: 56.3,
      courses: 120,
      coursesCompleted: 65,
      questionsAnswered: 234,
      learningHours: 5
    }
  },
  skillRef3: {
    availableForReview: true,
    stats: {
      score: 23.3,
      courses: 120,
      coursesCompleted: 78,
      questionsAnswered: 256,
      learningHours: 1
    }
  },
  skillRef4: {
    availableForReview: false,
    stats: {
      score: 83.3,
      courses: 120,
      coursesCompleted: 89,
      questionsAnswered: 345,
      learningHours: 7
    }
  },
  skillRef5: {
    availableForReview: true,
    stats: {
      score: 43.3,
      courses: 120,
      coursesCompleted: 62,
      questionsAnswered: 444,
      learningHours: 6
    }
  },
  skillRef6: {
    availableForReview: true,
    stats: {
      score: 63.3,
      courses: 120,
      coursesCompleted: 62,
      questionsAnswered: 24,
      learningHours: 9
    }
  },
  skillRef7: {
    availableForReview: true,
    stats: {
      score: 63.3,
      courses: 120,
      coursesCompleted: 62,
      questionsAnswered: 24,
      learningHours: 9
    }
  },
  skillRef8: {
    availableForReview: false,
    stats: {
      score: 63.3,
      courses: 120,
      coursesCompleted: 62,
      questionsAnswered: 24,
      learningHours: 9
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
