export default {
  props: {
    title: 'Your Progress',
    subtitle: 'To unlock your rewards, you need to complete this certification',
    completedModules: 13,
    mandatoryModules: 6,
    progression: 100,
    sections: [
      {
        type: 'diploma',
        downloadUrl: 'https://onboarding.coorpacademy.com/diplomas/cert_q1dFPSqgyS'
      },
      {
        type: 'badge',
        downloadUrl: 'https://onboarding-staging.coorpacademy.com/api/v1/goals/cert_gNzNSfjCqQ.svg'
      },
      {
        type: 'stars',
        stars: 250
      }
    ]
  }
};
