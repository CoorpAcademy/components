export default {
  props: {
    title: 'Import SCORM file',
    description: 'Drag and drop component',
    uploadLabel: 'Drag & Drop your SCORM file here Or click to upload',
    previewLabel: 'File Preview',
    accept: 'image/*',
    uploadErrorMessage: 'Oh Snap, something went wrong !',
    uploadSuccessMessage: 'Oh yeah! Upload Succeeded!',
    onDrop: files => console.log(files.map(item => item))
  }
};
