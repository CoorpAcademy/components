export const emptySkillFocusProps = {
  skills: {
    all: [
      {
        skillTitle: 'Creativity and innovation',
        data: 15.3,
        courses: 120,
        coursesCompleted: 12,
        questionsAnswered: 123,
        learningHours: 8,
        filterAvailable: []
      },
      {
        skillTitle: 'Critical thinking and analysis',
        data: 56.3,
        courses: 120,
        coursesCompleted: 65,
        questionsAnswered: 234,
        learningHours: 5,
        filterAvailable: []
      },
      {
        skillTitle: 'Digital culture',
        data: 23.3,
        courses: 120,
        coursesCompleted: 78,
        questionsAnswered: 256,
        learningHours: 1,
        filterAvailable: []
      },
      {
        skillTitle: 'Digital dexterity',
        data: 83.3,
        courses: 120,
        coursesCompleted: 89,
        questionsAnswered: 345,
        learningHours: 7,
        filterAvailable: []
      },
      {
        skillTitle: 'Digital communication',
        data: 43.3,
        courses: 120,
        coursesCompleted: 62,
        questionsAnswered: 444,
        learningHours: 6,
        filterAvailable: ['Available for review', 'Available for explore']
      },
      {
        skillTitle: 'Active listening',
        data: 63.3,
        courses: 120,
        coursesCompleted: 62,
        questionsAnswered: 24,
        learningHours: 9,
        filterAvailable: ['Available for review']
      },
      {
        skillTitle: 'Active Watching',
        data: 63.3,
        courses: 120,
        coursesCompleted: 62,
        questionsAnswered: 24,
        learningHours: 9,
        filterAvailable: []
      },
      {
        skillTitle: 'Active Working',
        data: 63.3,
        courses: 120,
        coursesCompleted: 62,
        questionsAnswered: 24,
        learningHours: 9,
        filterAvailable: []
      }
    ],
    focus: [
      {
        skillTitle: 'Creativity and innovation',
        data: 15.3,
        courses: 120,
        coursesCompleted: 12,
        questionsAnswered: 123,
        learningHours: 8
      },
      {
        skillTitle: 'Critical thinking and analysis',
        data: 56.3,
        courses: 120,
        coursesCompleted: 65,
        questionsAnswered: 234,
        learningHours: 5
      },
      {
        skillTitle: 'Digital culture',
        data: 23.3,
        courses: 120,
        coursesCompleted: 78,
        questionsAnswered: 256,
        learningHours: 1
      },
      {
        skillTitle: 'Digital dexterity',
        data: 83.3,
        courses: 120,
        coursesCompleted: 89,
        questionsAnswered: 345,
        learningHours: 7
      },
      {
        skillTitle: 'Digital communication',
        data: 43.3,
        courses: 120,
        coursesCompleted: 62,
        questionsAnswered: 444,
        learningHours: 6
      },
      {
        skillTitle: 'Active listening',
        data: 63.3,
        courses: 120,
        coursesCompleted: 62,
        questionsAnswered: 24,
        learningHours: 9
      }
    ]
  },
  filters: ['Available for review', 'Available for explore'],
  isLoadng: false,
  onSkillFocusConfirm: () => console.log('confirm'),
  onReviewSkill: () => console.log('review'),
  onExploreSkill: () => console.log('explore')
};

export default {
  props: emptySkillFocusProps
};
