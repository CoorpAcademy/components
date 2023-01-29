import upload from '../../../../molecule/brand-form-group/test/fixtures/massive-import'
export default {
  props: {
    isLoading: false,
    wizardHeader: {
      title: 'Massive Import',
      onClick: () => console.log('Close')
    },
    steps: [
      {
        title: 'Import',
        done: false,
        current: true
      },
      {
        title: 'Inspect',
        done: false
      }
    ],
    content: {
      groups: [{
        title: 'Massive Import',
        subtitle:
          'Both files (csv & zip) are required for bulk upload and must match each other (the csv contains the metadata of the content in the zip)',
        subtitleSize: 'small',
        fields: upload.props.fields,
        fieldsLayout: 'grid'
      }],
      type: 'form'
    },
    nextStep: {
      label: 'Next Step',
      onClick: () => console.log('Next Step')
    }
  }
};
