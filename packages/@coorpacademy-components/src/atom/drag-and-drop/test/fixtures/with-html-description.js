export default {
  props: {
    title: 'Upload file',
    description:
      '<div style="font-family:\'Gilroy\'; color: #555; font-size: 13px; line-height: 1.4;">Upload your files here<br/>• Supported formats: <code style="background: #e9ecef; padding: 2px 4px; border-radius: 3px;">.jpg, .png, .gif</code><br/>• Maximum size: <strong>10MB</strong></div>',
    uploadLabel: 'Browse',
    previewLabel: 'See preview',
    loading: false,
    modified: false,
    disabled: false,
    buttonAriaLabel: 'Browse file to upload'
  }
};
