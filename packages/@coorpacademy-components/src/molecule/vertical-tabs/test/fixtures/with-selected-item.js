import {iconAriaLabelError, iconAriaLabelSuccess} from './default';

export default {
  props: {
    tabs: [
      {
        title: '🇫🇷 French',
        leftIcon: 'BlueValidatedCircle',
        onClick: () => console.log('click'),
        selected: true,
        iconAriaLabel: iconAriaLabelSuccess
      },
      {
        title: '🇪🇸 Spanish',
        leftIcon: 'BlueValidatedCircle',
        onClick: () => console.log('click'),
        selected: false,
        iconAriaLabel: iconAriaLabelSuccess
      },
      {
        title: '🇮🇹 Italian',
        leftIcon: 'BlueValidatedCircle',
        onClick: () => console.log('click'),
        selected: false,
        iconAriaLabel: iconAriaLabelSuccess
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
        leftIcon: '',
        onClick: () => console.log('click'),
        selected: false
      },
      {
        title: '🇹🇷 Turkish',
        leftIcon: '',
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
        leftIcon: '',
        onClick: () => console.log('click'),
        selected: false
      },
      {
        title: '🇹🇷 Turkish',
        leftIcon: '',
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
        leftIcon: '',
        onClick: () => console.log('click'),
        selected: false
      },
      {
        title: '🇹🇷 Turkish',
        leftIcon: 'LocaleInError',
        onClick: () => console.log('click'),
        selected: false,
        iconAriaLabel: iconAriaLabelError
      }
    ],
    'aria-label': 'Languages list'
  }
};
