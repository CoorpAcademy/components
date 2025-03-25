import InputText from '../../../../atom/input-text/test/fixtures/cm-default';

export default {
  props: {
    title: {
      type: 'form-group',
      title: 'Title',
      titleSize: 'lightAndSmallTitleFormGroup',
      required: true
    },
    field: {
      ...InputText.props,
      hint: '0/80 characters',
      title: 'Skill name',
      placeholder: 'Skill name',
      value: '',
      valid: false,
      size: 'large'
    },
    childType: 'inputText'
  }
};
