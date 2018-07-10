import Default from './vimeo';

export default {
  props: {
    ...Default.props,
    mimeType: 'application/kontiki',
    onPlay: () => console.log('on play kontiki')
  }
};
