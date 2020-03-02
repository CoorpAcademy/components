export default {
  props: {
    title: 'Import SCORM file',
    buttonTitle: 'Or select a file',
    description: 'Drag and drop component',
    uploadLabel: 'Drag & Drop your SCORM file here',
    previewLabel: 'File Preview',
    accept: 'image/*',
    uploadErrorMessage: 'Oh Snap, something went wrong !',
    uploadSuccessMessage: 'Oh yeah! Upload Succeeded!',
    onDrop: () => console.log('file dropped')
  }
};
