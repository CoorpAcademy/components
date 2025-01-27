import {defaultProps} from './default';

export default {
  props: {
    ...defaultProps,
    tag: 'Passport',
    badgeUrl: '',
    diplomaUrl: '',
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
      mandatoryModules: 6,
      stars: 0
    }
  }
};
