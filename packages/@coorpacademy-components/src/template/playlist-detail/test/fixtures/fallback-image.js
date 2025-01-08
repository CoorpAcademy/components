import DefaultProps from './default';

export default {
  props: {
    ...DefaultProps.props,
    coverImages: [
      {
        type: 'video',
        image: null
      },
      {
        type: 'interactive',
        image: null
      },
      {
        type: 'podcast',
        image: null
      },
      {
        type: 'document',
        image: null
      }
    ],
    description: `**Conditions** - complete the Basics levels of the following courses:
 - The tire e-commerce market
 - The mobile revolution 
 - Big Data 
 - The user experience 
 - Connected point of sale
 - Les bases de la rédaction des e-mails en anglais
`
  }
};
