export default {
  props: {
    title: 'Your Progress',
    subtitle: 'To unlock your rewards, you need to complete this certification',
    mandatoryModules: 6,
    completedModules: 2,
    progression: 37,
    sections: [
      {
        type: 'diploma',
        downloadUrl: 'https://onboarding.coorpacademy.com/diplomas/cert_q1dFPSqgyS'
      },
      {
        type: 'stars',
        stars: 250
      }
    ]
  }
};
