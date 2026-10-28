import everyoneOn from './everyone-on-with-sources';

export default {
  props: {
    ...everyoneOn.props,
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
