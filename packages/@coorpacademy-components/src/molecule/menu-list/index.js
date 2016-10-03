import isNil from 'lodash/fp/isNil';
import createLink from '../../atom/link';
import {checker, createValidate} from '../../util/validation';
import createSsMenuList from '../ssmenu-list';
import style from './style.css';

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

  const Link = createLink(treant, options);
  const SsMenuList = createSsMenuList(treant, options);

  const MenuList = (props, children) => {
    const {menuItems = []} = props;

    const MenuitemDiv = menuItems.map(item => {
      const {title, href, subItems} = item;

      const subItemsView = !isNil(subItems) && (
        <div className={style.subNav}>
          <SsMenuList
            items={item.subItems}
          />
        </div>
      );

      return (
        <li className={style.item}>
          <Link
            href={href}
          >
            {title}
          </Link>
          {subItemsView}
        </li>
      );
    });

    return (
      <div className={style.menu}>
        <input
          type='checkbox'
          id='toggle'
          className={style.toggleBox}
        />
        <label
          htmlFor='toggle'
          className={style.toggler}
        >
          ≡
        </label>
        <ul className={style.list}>
          {MenuitemDiv}
        </ul>
      </div>
    );
  };

  MenuList.validate = createValidate(conditions);
  return MenuList;
};
