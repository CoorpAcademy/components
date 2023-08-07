export default {
  props: {
    radioWithTitle: {
      title: {
        type: 'form-group',
        title: 'Upload a list of specific users',
        subtitle: 'Using an Excel file (mandatory column: email address)'
      },
      checked: true,
      onChange: (value: boolean) => {
        console.log('on change', value);
      }
    },
    field: {
      description: 'JPG or PNG, smaller than 5mb',
      uploadLabel: 'Browse',
      previewLabel: 'File Preview',
      labelButtonLink: 'here',
      labelLink: 'Need the template? Download it',
      hrefLink: 'https://setup.coorpacademy.com/assets/templates/import-users-template.xlsx',
      previewContent: {
        type: 'xlsx',
        src: 'https://static.coorpacademy.com/content/digital/raw/meta_inc-1677774948417._logo-1-1677774948417.pdf',
        label: 'opponents-error-report.xlsx'
      },
      loading: false
    },
    childType: 'massive-upload'
  }
};
