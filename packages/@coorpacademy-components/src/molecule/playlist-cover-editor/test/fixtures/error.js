import fixture from './default';

export default {
  props: {
    ...fixture.props,
    upload: {...fixture.props.upload, error: 'Upload failed', errorButtonLabel: 'Try again'}
  }
};
