import fixture from './upload-done';

export default {
  props: {
    ...fixture.props,
    upload: {...fixture.props.upload, expanded: true, toggleLabel: 'Hide rows'}
  }
};
