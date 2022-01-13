import {iconAriaLabelError, iconAriaLabelSuccess} from './default';

export default {
  props: {
    tabs: [
      {
        title: '🇫🇷 French',
        leftIcon: 'LocaleInError',
        onClick: () => console.log('click'),
        selected: false,
        iconAriaLabel: iconAriaLabelError
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
        leftIcon: 'LocaleInError',
        onClick: () => console.log('click'),
        selected: false,
        iconAriaLabel: iconAriaLabelError
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
        selected: false,
        iconAriaLabel: iconAriaLabelSuccess
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
