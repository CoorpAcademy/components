import cardContent from '../../../card-content/test/fixtures/adaptiv-and-disabled';
import Default from './default';

export default {
  props: {
    ...Default.props,
    ...cardContent.props,
    certifiedAuthor: false,
    progress: 0,
    type: 'course',
    disabled: false
  }
};
