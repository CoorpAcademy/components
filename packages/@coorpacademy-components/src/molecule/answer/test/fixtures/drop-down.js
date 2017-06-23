import DropDown from '../../../../molecule/questions/drop-down/test/fixtures/default';

const answerProps = DropDown.props;

export default {
  props: {
    answer: {
      type: 'dropDown',
      ...answerProps
    }
  }
};
