export default {
  props: {
    title: 'Your Progress',
    subtitle: 'To unlock your rewards, you need to complete this certification',
    completedCourses: 6,
    completedModules: 13,
    progression: 37,
    sections: [
      {
        type: 'diploma',
        onDownload: () => console.log('click on download diploma')
      },
      {
        type: 'badge',
        badgeUrl:
          'https://static.coorpacademy.com/content/onboarding/raw/badge-reward-1685105201663.png',
        onDownload: () => console.log('click on download badge')
      },
      {
        type: 'stars',
        stars: 250
      }
    ]
  }
};
