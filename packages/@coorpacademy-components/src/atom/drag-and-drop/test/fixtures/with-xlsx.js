export default {
  props: {
    title: 'Drag & Drop With XLSX',
    description: 'XLSX or XLS, smaller than 5mb',
    uploadLabel: 'Browse',
    previewLabel: 'File Preview',
    previewContent: {
      type: 'xlsx',
      src: 'https://setup.coorpacademy.com/assets/templates/import-users-template.xlsx',
      label: 'opponents-error-report.xlsx'
    },
    onReset: () => console.log('reset')
  }
};
