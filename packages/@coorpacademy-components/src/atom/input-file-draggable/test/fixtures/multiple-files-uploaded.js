export default {
  props: {
    title: 'Upload ZIP',
    uploadLabel: 'Browse',
    previewLabel: 'See details',
    onChange: () => true,
    previewContent: {
      type: 'zip',
      src: ''
    },
    multiple: true,
    filesNumber: 5,
    filesTypes: ''
  }
};
