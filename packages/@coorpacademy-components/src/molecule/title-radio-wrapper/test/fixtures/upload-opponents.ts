export default {
  props: {
    radioWithTitle: {
      title: {
        type: 'form-group',
        title: 'Upload a list of specific users',
        subtitle: 'Using an Excel file (mandatory column: email address)'
      },
      checked: false,
      onChange: (value: boolean) => {
        console.log('on change', value);
      }
    },
    field: {
      description: 'XLSX or XLS, smaller than 5mb',
      uploadLabel: 'Browse',
      previewLabel: 'File Preview',
      labelButtonLink: 'here',
      labelLink: 'Need the template? Download it',
      hrefLink: 'https://setup.coorpacademy.com/assets/templates/import-users-template.xlsx',
      previewContent: {},
      loading: false
    },
    childType: 'massive-upload'
  }
};
