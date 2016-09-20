import MenuList from '../../../../molecule/menu-list/test/fixtures/default';
import ImageLink from '../../../../atom/image-link/test/fixtures/simple-src';

const {menuItems} = MenuList.props;
const {imageLogo} = ImageLink.props;

export default {
  props: {
    menuItems,
    imageLogo
  }
};
