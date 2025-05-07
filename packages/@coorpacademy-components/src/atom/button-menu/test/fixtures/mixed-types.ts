import {ButtonMenuPropsFixture} from '../../types';

const mixedTypesFixture: ButtonMenuPropsFixture = {
  props: {
    buttons: [
      {
        'data-name': 'link-button',
        label: 'Link Button',
        type: 'defaultLeft',
        onClick: () => console.log('click on link button')
      },
      {
        'data-name': 'select-button',
        label: 'Select Language',
        type: 'select',
        selectProps: {
          title: 'Language',
          options: [
            {value: 'en', name: 'English', selected: true},
            {value: 'fr', name: 'Français', selected: false},
            {value: 'es', name: 'Español', selected: false}
          ],
          onChange: (value) => console.log('selected language:', value)
        }
      },
      {
        'data-name': 'switch-button',
        label: 'Dark Mode',
        type: 'switch',
        switchProps: {
          value: true,
          onChange: (value) => console.log('dark mode:', value)
        }
      }
    ],
    'aria-label': 'button menu with mixed types',
    'data-name': 'mixed-types-menu'
  }
};

export default mixedTypesFixture; 