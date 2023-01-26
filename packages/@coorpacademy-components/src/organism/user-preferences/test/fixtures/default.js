export default {
  props: {
    preferences: [
      {
        value: true,
        label: 'Monitoring activity',
        description:
          'Answers on forum, Challenges to a battle, Course finished, Certificate achieved, Coach unlocked',
        onChange: console.log
      },
      {
        value: false,
        label: 'Recommended courses',
        description: 'Recommended courses, Trending Course',
        onChange: console.log
      },
      {
        value: true,
        label: 'Newsletters',
        description: 'Monthly newsletter, Occasional communication',
        onChange: console.log
      },
      {
        value: true,
        label: 'No description',
        onChange: console.log
      }
    ],
    moreInfoAriaLabel: 'show more info',
    groupAriaLabel: 'set Email settings'
  }
};
