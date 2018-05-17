export default {
  props: {
    title: 'Platform design',
    subtitle: 'Explanation about what Platform design is and why to set stuffs in this form',
    fields: [
      {
        title: 'Primary color',
        name: 'primary-color',
        value: '#ececec',
        placeholder: '#ffffff',
        type: 'color',
        description: 'Lorem ipsum dolor sit amet.',
        onChange: () => {}
      },
      {
        title: 'Secondary color',
        name: 'secondary-color',
        value: '#ececec',
        placeholder: '#ffffff',
        type: 'color',
        description: 'Lorem ipsum dolor sit amet.',
        onChange: () => {}
      },
      {
        title: 'Tertirary color',
        name: 'tertirary-color',
        value: '#ececec',
        placeholder: '#ffffff',
        type: 'color',
        description: 'Lorem ipsum dolor sit amet.',
        onChange: () => {}
      },
      {
        title: 'Validation color',
        name: 'validation-color',
        value: '#ececec',
        placeholder: '#ffffff',
        type: 'color',
        description: 'Lorem ipsum dolor sit amet.',
        onChange: () => {}
      },
      {
        title: 'Error color',
        name: 'error-color',
        value: '#ff0000',
        placeholder: '#ffffff',
        type: 'color',
        description: 'Lorem ipsum dolor sit amet.',
        onChange: () => {}
      }
    ]
  }
};
