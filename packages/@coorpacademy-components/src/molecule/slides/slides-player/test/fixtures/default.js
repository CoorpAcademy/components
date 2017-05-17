import Cta from '../../../../../atom/cta/test/fixtures/default';
import Footer from '../../../slides-footer/test/fixtures/default';

const {props} = Cta;
const footerProps = Footer.props;

export default {
  props: {
    question: 'Amongst these businesses, which have suffered setbacks for not knowing how to putting users first?',
    help: 'Select something below',
    cta: props,
    ...footerProps
  }
};
