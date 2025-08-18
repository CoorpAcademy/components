import multiLangProps from './with-multi-lang';

export default {
  props: {
    ...multiLangProps.props,
    multiLang: {
      currentLang: 'fr',
      onClick: code => console.log(`onClick ${code}`),
      supportedLangs: [{code: 'fr', label: 'French'}]
    }
  }
};
