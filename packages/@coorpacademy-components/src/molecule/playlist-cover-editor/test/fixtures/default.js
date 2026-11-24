export default {
  props: {
    title: 'Playlist image (optional)',
    description: 'Use a custom image instead of the course mosaic.',
    previewLabel: 'Playlist card preview',
    removeLabel: 'Remove image',
    onRemove: () => {},
    upload: {uploadLabel: 'Upload image', filesTypes: 'image/jpeg,image/png,image/gif'},
    card: {type: 'playlist', title: 'Marketing expert', coverImages: []}
  }
};
