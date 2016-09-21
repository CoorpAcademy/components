import FormGroup from '../../../../molecule/form-group/test/fixtures/default';

const {group} = FormGroup.props;

export default {
  props: {
    form: {
      groups: [group, group, group]
    }
  }
};
