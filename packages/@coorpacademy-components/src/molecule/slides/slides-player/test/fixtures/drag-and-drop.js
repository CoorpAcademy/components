import Cta from '../../../../../atom/cta/test/fixtures/default';
import DragAndDrop from '../../../../questions/drag-and-drop/test/fixtures/default';
import Footer from '../../../slides-footer/test/fixtures/default';

const {props} = Cta;
const answerProps = DragAndDrop.props;
const footerProps = Footer.props;

export default {
  props: {
    progression: {
      current: 2,
      total: 6
    },
    question: 'Amongst these businesses, which have suffered setbacks for not knowing how to putting users first?',
    cta: props,
    answer: {
      type: 'draganddrop',
      ...answerProps
    },
    ...footerProps
  }
};
