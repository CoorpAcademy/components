export default {
  props: {
    fields: [
      {
        type: 'select',
        title: 'Text position',
        options: [
          {
            name: 'Left',
            value: 'Pouet',
            selected: false
          },
          {
            name: 'Center',
            value: 'Pouet2',
            selected: true
          },
          {
            name: 'Right',
            value: 'Pouet3',
            selected: false
          }
        ],
        onChange: value => console.log(value) // eslint-disable-line no-console
      },
      {
        type: 'switch',
        title: 'Light color',
        value: false
      },
      {
        title: 'Image (*)',
        type: 'image',
        uploadLabel: 'Upload',
        previewLabel: 'Preview',
        onChange: () => true
      }
    ]
  }
};
