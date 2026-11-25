import fixture from './removable-value';

export default {
  props: {
    ...fixture.props,
    removeAction: {...fixture.props.removeAction, disabled: true}
  }
};
