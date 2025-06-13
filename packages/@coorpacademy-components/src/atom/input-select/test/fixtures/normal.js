export default {
  props: {
    options: [
      {value: 'en', label: 'English'},
      {value: 'fr', label: 'Français'},
      {value: 'es', label: 'Español'},
      {value: 'de', label: 'Deutsch'},
      {value: 'it', label: 'Italiano'},
      {value: 'ar', label: 'العربية'},
      {value: 'zh', label: '中文'},
      {value: 'ru', label: 'Русский'},
      {value: 'pt', label: 'Português'},
      {value: 'ja', label: '日本語'}
    ],
    value: 'en',
    onChange: value => console.log('Selected:', value),
    placeholder: 'Language',
    'aria-label': 'Language select'
  }
};
