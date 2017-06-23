import Cta from '../../../../../atom/cta/test/fixtures/default';
import Footer from '../../../slides-footer/test/fixtures/selected';
import Clue from '../../../../../atom/clue/test/fixtures/default';

const {props} = Cta;
const footerProps = Footer.props;
const clueProps = Clue.props;

export default {
  props: {
    typeClue: true,
    step: {
      current: 2,
      total: 6
    },
    question: 'Amongst these businesses, which have suffered setbacks for not knowing how to putting users first?',
    cta: {
      ...props,
      submitValue: 'Back to Question'
    },
    help: 'En regardant cet indice, vous perdez 1 étoile',
    ...clueProps,
    ...footerProps
  }
};
