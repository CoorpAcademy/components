import MenuList from '../../../../molecule/menu-list/test/fixtures/default';
import ImageLink from '../../../../atom/image-link/test/fixtures/simple-src';

const {menuItems} = MenuList.props;
const {src, href} = ImageLink.props;

export default {
  props: {
    menuItems,
    src,
    href
  }
};
