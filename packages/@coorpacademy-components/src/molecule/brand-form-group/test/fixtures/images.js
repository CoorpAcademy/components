export default {
  props: {
    title: 'Platform logos',
    subtitle: '(SVG files are recommanded for retina display. For any other file types, max height recommanded is xxx px)', // eslint-disable-line max-len
    fieldsLayout: 'grid',
    fields: [{
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
    }]
  }
};
