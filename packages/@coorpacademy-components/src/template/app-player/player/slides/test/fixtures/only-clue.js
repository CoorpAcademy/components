import Cta from '../../../../../../atom/cta/test/fixtures/primary';
import Footer from '../../footer/test/fixtures/only-clue';
import Header from '../../header/test/fixtures/learner';
import Clue from '../../../../../../atom/clue/test/fixtures/default';

const {props} = Cta;
const footerProps = Footer.props;
const headerProps = Header.props;
const clueProps = Clue.props;

export default {
  props: {
    ...clueProps,
    ...footerProps,
    typeClue: 'clue',
    step: {
      current: 2,
      total: 6
    },
    showNewMedia: false,
    question:
      'Amongst these businesses, which have suffered setbacks for not knowing how to putting users first?',
    cta: {
      ...props,
      submitValue: 'Back to Question'
    },
    help: 'En regardant cet indice, vous perdez 1 étoile',
    header: headerProps
  }
};
