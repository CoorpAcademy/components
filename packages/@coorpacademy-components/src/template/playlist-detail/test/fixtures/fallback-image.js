import DefaultProps from './default';

export default {
  props: {
    ...DefaultProps.props,
    coverImages: [
      {
        type: 'video',
        image: null
      },
      {
        type: 'interactive',
        image: null
      },
      {
        type: 'podcast',
        image: null
      },
      {
        type: 'document',
        image: null
      }
    ]
  }
};
