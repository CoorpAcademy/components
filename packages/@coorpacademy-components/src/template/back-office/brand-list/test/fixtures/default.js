import BrandCard from '../../../../../molecule/brand-card/test/fixtures/default';
import Header from '../../../../../organism/setup-header/test/fixtures/default';

const {props} = BrandCard;

export default {
  props: {
    header: {...Header.props, isHome: true},
    brands: [props, props, props, props, props],
    search: {
      value: '',
      placeholder: 'Search brand',
      onChange: () => {}
    },
    filter: {
      list: [
        {
          name: 'customer',
          value: 'customer',
          checked: false,
          label: 'Customer platforms'
        },
        {
          name: 'team',
          value: 'team',
          checked: true,
          label: 'Team platforms'
        }
      ],
      onChange: value => console.log(value)
    },
    create: {
      edit: 'Create a new platform',
      editHref: '#'
    }
  }
};
