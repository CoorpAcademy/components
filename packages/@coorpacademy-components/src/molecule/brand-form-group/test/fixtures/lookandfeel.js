export default {
  props: {
    title: 'Platform design',
    subtitle: 'Explanation about what Platform design is and why to set stuffs in this form',
    fields: [
      {
        title: 'Primary color',
        name: 'primary-color',
        placeholder: '#FFFFFF',
        type: 'color',
        error: '',
        description: 'CTA buttons, icons, hovers, menu backgrounds...',
        value: '#00B0FF',
        options: [],
        modified: false,
        onChange: () => {}
      },
      {
        title: 'Validation color',
        name: 'good-color',
        placeholder: '#FFFFFF',
        type: 'color',
        error: '',
        description: 'Success messages',
        value: '#66BB6A',
        options: [],
        modified: false,
        onChange: () => {}
      },
      {
        title: 'Error color',
        name: 'error-color',
        placeholder: '#FFFFFF',
        type: 'color',
        error: '',
        description: 'Error messages',
        value: '#F73F52',
        options: [],
        modified: false,
        onChange: () => {}
      },
      {
        title: 'Lives color',
        name: 'life-color',
        placeholder: '#FFFFFF',
        type: 'color',
        error: '',
        description: 'Slides lives',
        value: '#F73F52',
        options: [],
        modified: false,
        onChange: () => {}
      }
    ]
  }
};
