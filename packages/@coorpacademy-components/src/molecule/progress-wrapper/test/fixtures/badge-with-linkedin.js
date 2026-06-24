// Self-contained badge image (gold medal) so the story/snapshot renders without network.
const badgeImage =
  "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3E%3Ccircle%20cx='50'%20cy='50'%20r='44'%20fill='%23FFCE0A'%20stroke='%23F5A623'%20stroke-width='5'/%3E%3Cpath%20d='M50%2026l7%2018%2019%201-15%2012%205%2019-16-11-16%2011%205-19-15-12%2019-1z'%20fill='%23fff'/%3E%3C/svg%3E";

export default {
  props: {
    title: 'Your Progress',
    subtitle: 'To unlock your rewards, you need to complete this certification',
    completedModules: 6,
    mandatoryModules: 6,
    progression: 100,
    sections: [
      {
        type: 'diploma',
        downloadUrl: 'https://onboarding.coorpacademy.com/diplomas/cert_q1dFPSqgyS'
      },
      {
        type: 'badge',
        downloadUrl: badgeImage,
        linkedinShareUrl:
          'https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fonboarding.coorpacademy.com%2Fcertifications%2Fcert_gNzNSfjCqQ',
        onLinkedinShareClick: () => {}
      },
      {
        type: 'stars',
        stars: 250
      }
    ]
  }
};
