import Cta from '../../../../../atom/cta/test/fixtures/primary';
import Footer from '../../../slides-footer/test/fixtures/media-selected';
import ResourceBrowser from '../../../../../organism/resource-browser/test/fixtures/video-selected';

const {props} = Cta;
const footerProps = Footer.props;
const resourceProps = ResourceBrowser.props;

export default {
  props: {
    typeClue: 'media',
    starsDiff: 4,
    step: {
      current: 2,
      total: 6
    },
    question:
      'Amongst these businesses, which have suffered setbacks for not knowing how to putting users first?',
    cta: {
      ...props,
      submitValue: 'Back to Question'
    },
    ...resourceProps,
    ...footerProps
  }
};
