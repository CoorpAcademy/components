import {checker, createValidate} from '../../util/validation';
import createLink from '../../atom/link';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    value: checker.string,
    nextHref: checker.string.optional,
    previousHref: checker.string.optional
  }),
  children: checker.none
});

export default (treant, options) => {
  const {h} = treant;

  const Link = createLink(treant, options);

  const Pagination = (props, children) => {
    const {
      value,
      nextHref,
      previousHref
    } = props;

    return (
      <div className={style.wrapper}>
        <div className={style.value}>{value}</div>
        <div className={style.buttons}>
          <Link className={previousHref ? style.button : style.disabled} href={previousHref}></Link>
          <Link className={nextHref ? style.button : style.disabled} href={nextHref}></Link>
        </div>
      </div>
    );
  };

  Pagination.validate = createValidate(conditions);
  return Pagination;
};
