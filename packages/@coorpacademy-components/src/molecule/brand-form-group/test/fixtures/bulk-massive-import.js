export default {
  props: {
    title: 'Upload your content',
    subtitle:
      'Both files (csv & zip) are required for bulk upload and must match each other (the csv contains the metadata of the content in the zip)',
    subtitleSize: 'small',
    fields: [
      {
        title: 'Upload ZIP',
        type: 'bulkUpload',
        onChange: () => true,
        description: 'Drag and drop component with multiple zip',
        uploadLabel: 'Upload ZIP',
        disableHoverTooltip: true,
        previewLabel: 'See details',
        previewContent: {
          type: 'zip',
          src: '',
          label: 'meta image'
        },
        buttonAriaLabel: 'Browse file to upload Bulk ZIP',
        multiple: true,
        filesNumber: 94
      },
      {
        uploadLabel: 'Browse',
        disableHoverTooltip: true,
        description: 'CSV',
        onChange: () => true,
        title: 'Upload CSV',
        type: 'bulkUpload',
        buttonAriaLabel: 'Browse file to upload CSV Bulk Metadata',
        labelButtonLink: 'here',
        labelLink: 'Need the template? Download it',
        hrefLink: 'https://setup.coorpacademy.com/assets/templates/import-users-template.xlsx'
      }
    ],
    fieldsLayout: 'bulkLayout'
  }
};
