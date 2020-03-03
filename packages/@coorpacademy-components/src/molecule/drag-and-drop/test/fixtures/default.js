export default {
  props: {
    type: 'default',
    title: 'Import SCORM file',
    buttonTitle: 'Or select a file',
    message: 'Drag & Drop your SCORM file here',
    dragAndDropMessage: 'Drop you file to import',
    accept: 'image/*',
    uploadErrorMessage: 'Oh Snap, something went wrong !',
    onDrop: () => console.log('file dropped')
  }
};
