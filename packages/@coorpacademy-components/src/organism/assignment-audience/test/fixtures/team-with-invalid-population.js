import teamMode from './team-mode';

export default {
  props: {
    ...teamMode.props,
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
