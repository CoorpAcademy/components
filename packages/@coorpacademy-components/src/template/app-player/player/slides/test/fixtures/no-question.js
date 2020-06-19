import Cta from '../../../../../../atom/cta/test/fixtures/primary';
import Footer from '../../footer/test/fixtures/default';
import Header from '../../header/test/fixtures/learner';
import Answer from '../../../../../../molecule/answer/test/fixtures/default';

const {props} = Cta;
const footerProps = Footer.props;
const headerProps = Header.props;
const answerType = Answer.props;

export default {
  props: {
    ...footerProps,
    typeClue: 'answer',
    step: {
      current: 2,
      total: 6
    },
    showNewMedia: false,
    help: 'Select something below',
    cta: {
      ...props,
      submitValue: 'Validate'
    },
    answerType,
    header: headerProps
  }
};
