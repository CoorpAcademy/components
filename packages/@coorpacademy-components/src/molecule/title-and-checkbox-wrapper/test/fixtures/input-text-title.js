import InputText from '../../../../atom/input-text-with-title/test/fixtures/error';

export default {
  props: {
    sectionTitle: {title: 'This is title'},
    child: {
      ...InputText.props,
      childType: 'input-text'
    }
  }
};
