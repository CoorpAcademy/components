export default {
  props: {
    title: 'Populations',
    type: 'selectMultiple',
    description: 'The cohorte which will receive the battle',
    required: true,
    options: [
      {
        value: 'connect',
        name: 'Connect users',
        selected: true
      },
      {
        value: 'coorpacademy',
        name: 'Coorpacademy users',
        selected: false
      },
      {
        value: 'fr',
        name: 'country-fr',
        selected: true
      },
      {
        value: 'ekino',
        name: 'Ekino users',
        selected: false
      },
      {
        value: 'user',
        name: 'Simple users',
        selected: false
      },
      {
        value: 'default-digital',
        name: 'Default for digital',
        selected: false
      },
      {
        value: 'chanel',
        name: 'Chanel users',
        selected: false
      },
      {
        value: 'adaptive-pop',
        name: 'adaptive-pop',
        selected: false
      },
      {
        value: 'co',
        name: 'provider-co',
        selected: false
      },
      {
        value: 'latin',
        name: 'latin',
        selected: false
      },
      {
        value: 'organization_A',
        name: 'organization_A',
        selected: false
      },
      {
        value: 'organization_B',
        name: 'organization_B',
        selected: false
      },
      {
        value: 'organization_C',
        name: 'organization_C',
        selected: false
      },
      {
        value: 'ALL',
        name: 'ALL',
        selected: false
      }
    ],
    multiple: true,
    theme: 'setup',
    modified: true,
    onChange: value => {
      console.log(value);
    },
    onError: () => true
  }
};
