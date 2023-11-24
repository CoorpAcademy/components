import Cta from '../../../../../../atom/cta/test/fixtures/primary';
import Footer from '../../footer/test/fixtures/media-selected';
import ResourceBrowser from '../../../../../../organism/resource-browser/test/fixtures/faurecia-vr';

const {props} = Cta;
const footerProps = Footer.props;
const resourceProps = ResourceBrowser.props;

export default {
  props: {
    ...resourceProps,
    ...footerProps,
    typeClue: 'media',
    starsDiff: 4,
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
    }
  }
};
