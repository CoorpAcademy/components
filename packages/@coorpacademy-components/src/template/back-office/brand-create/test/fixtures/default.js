import CreateForm from '../../../../../molecule/brand-create-form/test/fixtures/default';
import Header from '../../../../../organism/setup-header/test/fixtures/default';

const {props} = CreateForm;

export default {
  props: {
    header: Header.props,
    ...props
  }
};
