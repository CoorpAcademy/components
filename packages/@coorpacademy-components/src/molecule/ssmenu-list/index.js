import createLink from '../../atom/link';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    items: checker.arrayOf(
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

  const SsMenuList = ({items = []}, children) => {
    const itemsView = items.map(({title, href}) => (
      <li className={style.item}>
        <Link
          href={href}
        >
          {title}
        </Link>
      </li>
    ));

    return (
      <div className={style.ssitems}>
        <ul className={style.list}>
          {itemsView}
        </ul>
      </div>
    );
  };

  SsMenuList.validate = createValidate(conditions);
  return SsMenuList;
};
