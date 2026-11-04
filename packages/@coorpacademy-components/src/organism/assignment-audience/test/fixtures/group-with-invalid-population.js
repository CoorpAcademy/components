import groupMode from './group-mode';

export default {
  props: {
    ...groupMode.props,
    invalidLabel: "You can't assign to this population. Remove it to publish.",
    invalidTargets: [
      {
        ref: 'former-group',
        label: 'Former group',
        onRemove: () => console.log('remove former group')
      }
    ]
  }
};
