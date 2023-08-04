export default {
  props: {
    title: 'Drag & Drop With XLSX',
    description: 'Drag and drop component with a xlsx',
    uploadLabel: 'Upload Excel file',
    previewLabel: 'File Preview',
    previewContent: {
      type: 'xlsx',
      src: 'https://static.coorpacademy.com/content/digital/raw/meta_inc-1677774948417._logo-1-1677774948417.pdf',
      label: 'opponents-error-report.xlsx'
    },
    onReset: () => console.log('reset')
  }
};
