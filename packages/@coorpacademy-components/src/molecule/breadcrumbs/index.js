import map from 'lodash/fp/map';
import {checker, createValidate} from '../../util/validation';
import createLink from '../../atom/link';
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

  const Link = createLink(treant, options);
  const HoverFill = createHoverFill(treant, options);

  const buildBreadcrumbs = breadcrumb => {
    const {
        title,
        href
    } = breadcrumb;

    if (!href) {
      return (
        <div className={style.breadcrumb}>
          <span>{title}</span>
        </div>
      );
    }

    return (
      <div className={style.breadcrumb}>
        <Link href={href}>{title}</Link>
      </div>
    );
  };

  const buildLink = link => {
    const {
      title,
      href,
      type
    } = link;

    const className = (type === 'primary') ? style.primary : style.secondary;

    return (
      <div className={className}>
        <HoverFill>
          <Link target='_blank' href={href}>{title}</Link>
        </HoverFill>
      </div>
    );
  };

  const Breadcrumbs = (props, children) => {
    const {
      breadcrumbs,
      links = []
    } = props;

    const breadcrumbsList = map(buildBreadcrumbs, breadcrumbs);
    const linksList = map(buildLink, links);

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
