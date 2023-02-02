export default {
  props: {
    title: 'Massive Import',
    subtitle:
      'Both files (csv & zip) are required for bulk upload and must match each other (the csv contains the metadata of the content in the zip)',
    subtitleSize: 'small',
    fields: [
      {
        uploadLabel: 'Browse',
        description: 'ZIP',
        onChange: () => true,
        title: 'Upload ZIP',
        type: 'image',
        buttonAriaLabel: 'Browse file to upload Bulk ZIP'
      },
      {
        uploadLabel: 'Browse',
        description: 'CSV',
        onChange: () => true,
        title: 'Upload CSV',
        type: 'image',
        buttonAriaLabel: 'Browse file to upload CSV Bulk Metadata',
        labelButtonLink: 'here',
        labelLink: 'Need the template? Download it',
        hrefLink: 'https://setup.coorpacademy.com/assets/templates/import-users-template.xlsx'
      }
    ],
    fieldsLayout: 'grid'
  }
};
