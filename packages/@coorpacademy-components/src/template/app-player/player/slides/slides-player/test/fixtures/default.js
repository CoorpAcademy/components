import Cta from '../../../../../../../atom/cta/test/fixtures/primary';
import Footer from '../../../slides-footer/test/fixtures/default';
import Answer from '../../../../../../../molecule/answer/test/fixtures/default';

const {props} = Cta;
const footerProps = Footer.props;
const answerType = Answer.props;

export default {
  props: {
    typeClue: 'answer',
    step: {
      current: 2,
      total: 6
    },
    showNewMedia: false,
    question:
      'Amongst these businesses, which have suffered setbacks for not knowing how to putting users first?',
    help: 'Select something below',
    cta: {
      ...props,
      submitValue: 'Validate'
    },
    backgroundUrl:
      'http://666a658c624a3c03a6b2-25cda059d975d2f318c03e90bcf17c40.r92.cf1.rackcdn.com/unsplash_527bf56961712_1.JPG',
    answerType,
    ...footerProps
  }
};
