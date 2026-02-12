export default {
  props: {
    type: 'microlearning',
    content: {
      onClick: () => console.log('onClick microlearning'),
      title: 'Du management classique au nouveau blablabla'
    },
    lives: {
      count: 1
    },
    mode: 'scorm',
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
    },
    help: {
      onClick: () => console.log('onClick help'),
      title: 'Help'
    }
  }
};
