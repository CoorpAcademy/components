export default {
  props: {
    tabs: [
      {
        title: '🇫🇷 French',
        leftIcon: 'LocaleInError',
        onClick: () => console.log('click'),
        selected: false
      },
      {
        title: '🇪🇸 Spanish',
        leftIcon: 'BlueValidatedCircle',
        onClick: () => console.log('click'),
        selected: false
      },
      {
        title: '🇮🇹 Italian',
        leftIcon: 'LocaleInError',
        onClick: () => console.log('click'),
        selected: false
      },
      {
        title: '🇩🇪 German',
        leftIcon: '',
        onClick: () => console.log('click'),
        selected: false
      },
      {
        title: '🇷🇺 Russian',
        leftIcon: '',
        onClick: () => console.log('click'),
        selected: false
      },
      {
        title: '🇵🇱 Polish',
        leftIcon: 'BlueValidatedCircle',
        onClick: () => console.log('click'),
        selected: false
      },
      {
        title: '🇹🇷 Turkish',
        leftIcon: '',
        onClick: () => console.log('click'),
        selected: false
      }
    ],
    'aria-label': 'Languages list'
  }
};
