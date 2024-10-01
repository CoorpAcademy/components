import DefaultProps from './default';

export default {
  props: {
    ...DefaultProps.props,
    coverImages: [
      {
        type: 'video',
        url: null
      },
      {
        type: 'interactive',
        url: null
      },
      {
        type: 'podcast',
        url: null
      },
      {
        type: 'document',
        url: null
      }
    ]
  }
};
