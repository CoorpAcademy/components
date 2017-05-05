export default {
  props: {
    groups: [
      {
        title: 'Platform design',
        subtitle: 'Explanation about what Platform design is and why to set stuffs in this form',
        fields: [
          {
            title: 'Primary color',
            value: '#ececec',
            placeholder: '#ffffff',
            type: 'color',
            description: 'Lorem ipsum dolor sit amet.',
            onChange: () => {}
          },
          {
            title: 'Secondary color',
            value: '#ececec',
            placeholder: '#ffffff',
            type: 'color',
            description: 'Lorem ipsum dolor sit amet.',
            onChange: () => {}
          },
          {
            title: 'Tertirary color',
            value: '#ececec',
            placeholder: '#ffffff',
            type: 'color',
            description: 'Lorem ipsum dolor sit amet.',
            onChange: () => {}
          },
          {
            title: 'Validation color',
            value: '#ececec',
            placeholder: '#ffffff',
            type: 'color',
            description: 'Lorem ipsum dolor sit amet.',
            onChange: () => {}
          },
          {
            title: 'Error color',
            value: '#ff0000',
            placeholder: '#ffffff',
            type: 'color',
            description: 'Lorem ipsum dolor sit amet.',
            onChange: () => {}
          }
        ]
      },
      {
        title: 'Platform logos',
        subtitle: '(SVG files are recommanded for retina display. For any other file types, max height recommanded is xxx px)', // eslint-disable-line max-len
        fieldsLayout: 'grid',
        fields: [
          {
            title: 'Desktop (*)',
            type: 'image',
            uploadLabel: 'Upload',
            previewLabel: 'Preview',
            onChange: () => true
          },
          {
            title: 'Mobile (*)',
            uploadLabel: 'Upload',
            type: 'image',
            previewLabel: 'Preview',
            previewImage: 'https://www.coorpacademy.com/assets/img/logo.svg',
            onChange: () => true
          },
          {
            title: 'Desktop (*)',
            type: 'image',
            uploadLabel: 'Upload',
            previewLabel: 'Preview',
            onChange: () => true
          },
          {
            title: 'Mobile (*)',
            uploadLabel: 'Upload',
            type: 'image',
            previewLabel: 'Preview',
            previewImage: 'https://www.coorpacademy.com/assets/img/logo.svg',
            onChange: () => true
          }
        ]
      }
    ],
    onSubmit: () => {},
    submitValue: 'Save changes',
    onReset: () => {},
    resetValue: 'Reset changes'
  }
};
