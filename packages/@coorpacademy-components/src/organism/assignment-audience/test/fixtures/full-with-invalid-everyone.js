import combined from './combined';

export default {
  props: {
    ...combined.props,
    invalidLabel: "You can't assign to everyone. Remove it to publish.",
    invalidTargets: [
      {
        ref: 'ALL',
        label: 'Everyone',
        onRemove: () => console.log('remove Everyone')
      }
    ]
  }
};
