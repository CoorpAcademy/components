export const iconAriaLabelError = 'Locale with errors icon';
export const iconAriaLabelSuccess = 'Validated locale icon';

export default {
  props: {
    tabs: [
      {
        title: '🇫🇷 French',
        leftIcon: 'BlueValidatedCircle',
        onClick: () => console.log('click'),
        selected: false,
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
      }
    ],
    'aria-label': 'Languages list'
  }
};
