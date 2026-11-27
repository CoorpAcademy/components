export default {
  props: {
    type: 'survey',
    title: 'Your feedback matters',
    campaign: {
      endAt: '2026-12-19T00:00:00+01:00',
      language: 'en',
      status: 'Survey open',
      until: 'Until'
    },
    message:
      'Help us improve your experience with Coorpacademy | Go1. The survey takes about 3 minutes.',
    cta: [
      {
        label: 'Share my feedback',
        ariaLabel: 'Share my feedback — Opens in a new tab',
        link: {
          href: 'https://forms.cloud.microsoft/r/j3fZf1LbJh',
          target: '_blank',
          rel: 'noopener noreferrer'
        }
      }
    ]
  }
};
