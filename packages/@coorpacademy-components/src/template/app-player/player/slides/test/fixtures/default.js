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
    question:
      'Amongst these businesses, which have suffered setbacks for not knowing how to putting users first?',
    help: 'Select something below',
    cta: {
      ...props,
      submitValue: 'Validate'
    },
    backgroundUrl:
      'http://static.coorpacademy.com/content/CoorpAcademy/content-tourism/cockpit-tourism/default/shutterstock_256004251-1590486407695.jpg',
    answerType,
    header: headerProps
  }
};
