import Cta from '../../../../../atom/cta/test/fixtures/default';
import Footer from '../../../slides-footer/test/fixtures/selected';

const {props} = Cta;
const footerProps = Footer.props;

export default {
  props: {
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
    clue: 'Presque le nom de code de James Bond. Presque le nom de code de James Bond.',
    ...footerProps
  }
};
