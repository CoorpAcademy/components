export default {
  props: {
    modified: false,
    title: 'Drag & Drop',
    description: 'Drag and drop component with a video',
    uploadLabel: 'Upload',
    previewLabel: 'File Preview',
    previewContent: {
      type: 'video',
      src: 'https://www.w3schools.com/tags/movie.mp4'
    },
    onReset: () => console.log('reset')
  }
};
