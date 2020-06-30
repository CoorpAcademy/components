export default {
  props: {
    state: 'default',
    title: 'Import SCORM file',
    buttonTitle: 'Or select a file',
    backLabel: 'Change the type of external content',
    onBack: () => console.log('back'),
    message: 'Drag & Drop your file here',
    orLabel: 'Or',
    dragAndDropMessage: 'Drop you file to import',
    accept: 'image/*',
    uploadErrorMessage: 'Oh Snap, something went wrong !',
    onDrop: () => console.log('file dropped')
  }
};
