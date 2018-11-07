import Cta from '../../../../../../atom/cta/test/fixtures/primary';
import Footer from '../../footer/test/fixtures/no-clue';
import Header from '../../header/test/fixtures/learner';
import ResourceBrowser from '../../../../../../organism/resource-browser/test/fixtures/vimeo';

const {props} = Cta;
const footerProps = Footer.props;
const headerProps = Header.props;
const resourceProps = ResourceBrowser.props;

export default {
  props: {
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
    },
    header: headerProps,
    ...resourceProps,
    ...footerProps,
  }
};
