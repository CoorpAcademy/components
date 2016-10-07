import isNil from 'lodash/fp/isNil';
import {checker, createValidate} from '../../util/validation';
import createSsMenuList from '../ssmenu-list';
import createTransifexList from '../transifex-list';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    buildTransifexList: checker.bool.optional,
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
  const SsMenuList = createSsMenuList(treant, options);
  const TransifexList = createTransifexList(treant, options);

  const MenuList = (props, children) => {
    const {menuItems = [], buildTransifexList} = props;

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
          <a
            href={href}
          >
            {title}
          </a>
          {subItemsView}
        </li>
      );
    });

    const TransifexListView = buildTransifexList && <TransifexList/>;

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
          <li id="txlivecoorp" className={style.transifexList}>
            {TransifexListView}
          </li>
        </ul>
      </div>
    );
  };

  MenuList.validate = createValidate(conditions);
  return MenuList;
};
