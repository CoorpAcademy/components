import find from 'lodash/fp/find';
import identity from 'lodash/fp/identity';
import createLink from '../../atom/link';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    menuitem: checker.arrayOf(
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

  const SsMenuList = ({menuitem = []}, children) => {
    const MenuitemDiv = menuitem.map(cursus => {
      const {title, href, selected} = cursus;

      const linkProps = selected ? {
        className: style.selected
      } : {};

      return (
        <li className={style.item}>
          <Link
            {...linkProps}
            href={href}
          >
            {title}
          </Link>
        </li>
      );
    });

    const selectedCursus = find({
      selected: true
    }, menuitem);

    return (
      <div className={style.ssmenuitem}>
        <ul className={style.list}>
          {MenuitemDiv}
        </ul>
      </div>
    );
  };

  SsMenuList.validate = createValidate(conditions);
  return SsMenuList;
};
