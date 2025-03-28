import IconEditor from '../../../icon-editor/test/fixtures/default';

export default {
  props: {
    title: {
      type: 'form-group',
      title: 'Skill icon',
      titleSize: 'small-and-light',
      required: true
    },
    field: {
      ...IconEditor.props,
      size: 'large'
    },
    childType: 'iconEditor'
  }
};
