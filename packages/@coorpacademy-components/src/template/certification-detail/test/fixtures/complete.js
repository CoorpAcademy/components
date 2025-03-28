import {defaultProps} from './default';

export default {
  props: {
    ...defaultProps,
    tag: 'Passport',
    badgeUrl: 'https://onboarding-staging.coorpacademy.com/api/v1/goals/cert_gNzNSfjCqQ.svg',
    diplomaUrl: 'https://onboarding.coorpacademy.com/diplomas/cert_q1dFPSqgyS',
    description: `**Conditions** - complete the Basics levels of the following courses:
 - The tire e-commerce market
 - The mobile revolution 
 - Big Data 
 - The user experience 
 - Connected point of sale
 - Les bases de la rédaction des e-mails en anglais
`,
    metrics: {
      ...defaultProps.metrics,
      progression: 100,
      mandatoryModules: 6
    }
  }
};
