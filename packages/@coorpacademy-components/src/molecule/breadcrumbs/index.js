import React from 'react';
import map from 'lodash/fp/map';
import {checker, createValidate} from '../../util/validation';
import Button from '../../atom/button';
import Link from '../../atom/link';
import style from './style.css';
import {hoverFill} from '../../atom/button/hover-fill.css';

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
      <Link className={hoverFill} target='_blank' href={href}>{title}</Link>
    </div>
  );
};

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

const Breadcrumbs = ({children, ...props}) => {
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
export default Breadcrumbs;
