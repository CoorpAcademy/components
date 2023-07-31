import withoutUploadImage from './without-upload-image';

const withUploadImageProps = {
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
      onChange: value => console.log(value)
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
    },
    {
      type: 'readonly',
      title: 'Informative input',
      value: 'Some data displayed to the user'
    },
    {
      type: 'doublestep',
      toggleValue: 'Delete',
      confirmValue: 'Confirm',
      confirmDisabled: false,
      cancelValue: 'Cancel',
      description: "You are about to delete some important data. Click 'Confirm' to proceed.",
      textValidation: false,
      isPending: false,
      onClick: () => true
    }
  ]
};
const withoutUploadImageProps = withoutUploadImage.props.slides[0];

export default {
  props: {
    tabProps: [
      {
        title: '1'
      },
      {
        title: '2'
      },
      {
        title: '3'
      }
    ],
    slides: [withUploadImageProps, withoutUploadImageProps, withoutUploadImageProps]
  }
};
