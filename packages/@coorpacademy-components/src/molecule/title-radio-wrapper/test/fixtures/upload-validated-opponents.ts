import fixtureDragAndDropWithXlsx from '../../../../atom/drag-and-drop/test/fixtures/with-xlsx';

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
      ...fixtureDragAndDropWithXlsx.props,
      title: '',
      labelButtonLink: 'here',
      labelLink: 'Need the template? Download it',
      hrefLink: 'https://setup.coorpacademy.com/assets/templates/import-users-template.xlsx',
      loading: false
    },
    childType: 'massive-upload'
  }
};
