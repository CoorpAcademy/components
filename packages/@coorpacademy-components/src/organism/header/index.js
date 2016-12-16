import Inferno from 'inferno';
import {checker, createValidate} from '../../util/validation';
import Picture from '../../atom/picture';
import MenuList from '../../molecule/menu-list';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    menuItems: checker.arrayOf(
      checker.shape({
        title: checker.string.optional
      })
    ).optional,
    href: checker.string.optional,
    src: checker.oneOfType([
      checker.string,
      checker.objectOf(checker.url)
    ]).optional
  })
});

const Header = ({children, ...props}) => {
  const {menuItems, src, href} = props;

  return (
      <div className={style.static}>
        <div className={style.logo}>
          <a href={href}>
            <Picture src={src} />
          </a>
        </div>
        <div className={style.navigation}>
          <MenuList menuItems={menuItems} />
        </div>
      </div>
  );
};

Header.validate = createValidate(conditions);
export default Header;
