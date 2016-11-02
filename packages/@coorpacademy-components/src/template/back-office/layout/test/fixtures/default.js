import BrandCard from '../../../../../molecule/brand-card/test/fixtures/default';

const {props} = BrandCard;

export default {
  props: {
    brands: [props, props, props, props, props],
    create: {
      edit: 'Create a new platform',
      editHref: '#'
    }
  }
};
