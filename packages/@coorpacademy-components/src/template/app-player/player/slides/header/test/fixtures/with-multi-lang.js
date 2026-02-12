export default {
  props: {
    type: 'learner',
    content: {
      onClick: () => console.log('onClick learner'),
      title: 'Du management classique au nouveau blablabla',
      details: 'Basic'
    },
    subcontent: {
      title: 'Data-driven strategies and battle tested techniques',
      details: '2/8'
    },
    lives: {
      count: 3
    },
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
