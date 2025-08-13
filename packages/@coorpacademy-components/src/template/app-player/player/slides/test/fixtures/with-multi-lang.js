import Default from './default';

export default {
  props: {
    ...Default.props,
    header: {
      ...Default.props.header,
      multiLang: {
        currentLang: 'en',
        onClick: code => console.log(`onClick ${code}`),
        supportedLangs: [
          {code: 'fr', label: 'French'},
          {code: 'en', label: 'English'},
          {code: 'es', label: 'Spanish'},
          {code: 'it', label: 'Italian'},
          {code: 'de', label: 'German'}
        ]
      }
    }
  }
};
