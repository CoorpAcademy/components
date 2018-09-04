export default {
  props: {
    onUpload: () => {},
    onInputTextChange: () => {},
    onInputFileChange: () => {},
    inputTextValue: '',
    placeholder: 'Enter your video link here',
    file: null,
    uploadedLink: 'jwplayer.com/some/video/link/goes/here',
    previewContent: {
      type: 'video',
      src: 'https://www.w3schools.com/tags/movie.mp4'
    }
  }
};
