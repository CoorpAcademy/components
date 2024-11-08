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
        downloadUrl: 'https://onboarding.coorpacademy.com/diplomas/cert_q1dFPSqgyS'
      },
      {
        type: 'badge',
        downloadUrl:
          'https://static.coorpacademy.com/content/onboarding/raw/badge-reward-1685105201663.png'
      },
      {
        type: 'stars',
        stars: 250
      }
    ]
  }
};
