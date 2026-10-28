import combined from './combined';

export default {
  props: {
    ...combined.props,
    disabled: true,
    invalidLabel: "You can't assign to this population. Remove it to publish.",
    invalidTargets: [
      {
        ref: 'former-team',
        label: 'Former team',
        onRemove: () => console.log('remove former team')
      }
    ]
  }
};
