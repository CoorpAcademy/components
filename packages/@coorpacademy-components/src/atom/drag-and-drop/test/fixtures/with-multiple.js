export default {
  props: {
    title: 'Upload ZIP',
    description: 'Drag and drop component with multiple zip',
    uploadLabel: 'Upload ZIP',
    previewLabel: 'See details',
    previewContent: {
      type: 'zip',
      src: '',
      label: 'meta image'
    },
    multiple: true
  }
};
