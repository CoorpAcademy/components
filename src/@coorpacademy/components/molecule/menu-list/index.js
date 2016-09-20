import find from 'lodash/fp/find';
import get from 'lodash/fp/get';
import isNil from 'lodash/fp/isNil';
import identity from 'lodash/fp/identity';
import createLink from '../../atom/link';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';
import createSsMenuList from '../ssmenu-list';

const conditions = checker.shape({
  props: checker.shape({
    menuItems: checker.arrayOf(
      checker.shape({
        href: checker.string.optional,
        title: checker.string.optional
      })
    ).optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  const {translate = identity} = options;

  const Link = createLink(treant, options);
  const SsMenuList = createSsMenuList(treant, options);

  const MenuList = (props, children) => {
    const {menuItems = [], plop} = props;

    const MenuitemDiv = menuItems.map(item => {
      const {title, href, subItems} = item;
        if (isNil(subItems)) {
          return (
              <li className={style.item}>
                <Link
                  href={href}
                >
                  {title}
                </Link>
              </li>  
            );
        }
        else {
          return (
            <li className={style.item}>
              <Link
                href={href}
              >
                {title}
              </Link>
              <div className={style.SubNav}>
                <SsMenuList
                  items={item.subItems}
                />
              </div>
            </li>
          );
        };
        
      });

    return (
      <div className={style.menuItems}>
        <ul className={style.list}>
          {MenuitemDiv}
        </ul>
      </div>
    );
  };

  MenuList.validate = createValidate(conditions);
  return MenuList;
};
