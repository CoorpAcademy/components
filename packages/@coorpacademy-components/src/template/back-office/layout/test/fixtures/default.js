import BrandCard from '../../../../../molecule/brand-card/test/fixtures/default';
import Header from '../../../../../organism/setup-header/test/fixtures/default';

const {props} = BrandCard;

export default {
  props: {
    header: Header.props,
    brands: [props, props, props, props, props],
    create: {
      edit: 'Create a new platform',
      editHref: '#'
    }
  }
};
