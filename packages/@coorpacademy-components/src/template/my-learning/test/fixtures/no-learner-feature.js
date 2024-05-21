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
    
  const skillsStats = {
    skillRef1: {
      score: 15.3,
      courses: 120,
      coursesCompleted: 12,
      questionsAnswered: 123,
      learningHours: 8
    },
    skillRef2: {
      score: 56.3,
      courses: 120,
      coursesCompleted: 65,
      questionsAnswered: 234,
      learningHours: 5
    },
    skillRef3: {
      score: 23.3,
      courses: 120,
      coursesCompleted: 78,
      questionsAnswered: 256,
      learningHours: 1
    },
    skillRef4: {
      score: 83.3,
      courses: 120,
      coursesCompleted: 89,
      questionsAnswered: 345,
      learningHours: 7
    },
    skillRef5: {
      score: 43.3,
      courses: 120,
      coursesCompleted: 62,
      questionsAnswered: 444,
      learningHours: 6
    },
    skillRef6: {
      score: 63.3,
      courses: 120,
      coursesCompleted: 62,
      questionsAnswered: 24,
      learningHours: 9
    },
    skillRef7: {
      score: 63.3,
      courses: 120,
      coursesCompleted: 62,
      questionsAnswered: 24,
      learningHours: 9
    },
    skillRef8: {
      score: 63.3,
      courses: 120,
      coursesCompleted: 62,
      questionsAnswered: 24,
      learningHours: 9
    }
  };
  
  const skillsFilters = {
    skillRef1: {
      review: true
    },
    skillRef2: {
      review: true
    },
    skillRef3: {
      review: false
    },
    skillRef4: {
      review: false
    },
    skillRef5: {
      review: false
    },
    skillRef6: {
      review: false
    },
    skillRef7: {
      review: false
    },
    skillRef8: {
      review: false
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
  
  export const noLearnerFeatureProps = {
    skills,
    skillsStats,
    skillsFilters,
    skillsLocales,
    learnerFeature: false,
    isLoadng: false,
    onSkillFocusConfirm: () => console.log('confirm'),
    onReviewSkill: () => console.log('review'),
    onExploreSkill: () => console.log('explore')
  };
  
  export default {
    props: noLearnerFeatureProps
  };
  