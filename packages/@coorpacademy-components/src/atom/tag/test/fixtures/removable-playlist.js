import fixture from './removable-value';

export default {
  props: {
    ...fixture.props,
    label: 'Leadership essentials',
    removeAction: {...fixture.props.removeAction, label: 'Remove Leadership essentials'}
  }
};
