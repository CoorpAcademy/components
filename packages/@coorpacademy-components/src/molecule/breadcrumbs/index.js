import {checker, createValidate} from '../../util/validation';
import createHoverFill from '../../behaviour/effects/hover-fill';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    breadcrumbs: checker.arrayOf(checker.shape({
      icon: checker.string.optional,
      title: checker.string,
      href: checker.string.optional
    })).optional,
    links: checker.arrayOf(checker.shape({
      title: checker.string,
      href: checker.string,
      type: checker.string.optional
    })).optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const HoverFill = createHoverFill(treant, options);

  const Breadcrumbs = (props, children) => {
    const {
      breadcrumbs = [],
      links = []
    } = props;

    const breadcrumbsList = breadcrumbs.map(breadcrumb => {
      const {
          icon,
          title,
          href
      } = breadcrumb;

      return (
        <div className={style.breadcrumb}>
          <a href={href}>{title}</a>
        </div>
      );
    });

    const linksList = links.map(link => {
      const {
        title,
        href,
        type
      } = link;

      const className = (type === 'primary') ? style.primary : style.secondary;

      return (
        <div className={className}>
          <HoverFill>
            <a href={href}>{title}</a>
          </HoverFill>
        </div>
      );
    });

    return (
      <div className={style.wrapper}>
        <div className={style.breadcrumbs}>
          {breadcrumbsList}
        </div>
        <div className={style.links}>
          {linksList}
        </div>
      </div>
    );
  };

  Breadcrumbs.validate = createValidate(conditions);
  return Breadcrumbs;
};
