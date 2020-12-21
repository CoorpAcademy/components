import Cta from '../../../../../../atom/cta/test/fixtures/primary';
import Footer from '../../footer/test/fixtures/media-selected';
import ResourceBrowser from '../../../../../../organism/resource-browser/test/fixtures/arabic';

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
    question: '<p align="right"> وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه</p>',
    cta: {
      ...props,
      submitValue: 'Back to Question'
    }
  }
};
