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
          value: false,
          checked: false,
          label: 'Customer platforms'
        },
        {
          name: 'smb',
          value: true,
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
