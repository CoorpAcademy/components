import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../atom/link';
import {hoverFill} from '../../atom/button/hover-fill.css';
import style from './style.css';

const buildBreadcrumbs = (breadcrumb, index) => {
  const {title, href} = breadcrumb;

  if (!href) {
    return (
      <div className={style.breadcrumb} key={index}>
        <span>{title}</span>
      </div>
    );
  }

  return (
    <div className={style.breadcrumb} key={index}>
      <Link href={href}>{title}</Link>
    </div>
  );
};

const buildLink = (link, index) => {
  const {title, href, type} = link;

  const className = type === 'primary' ? style.primary : style.secondary;

  return (
    <div className={className} key={index}>
      <Link className={hoverFill} target="_blank" href={href}>
        {title}
      </Link>
    </div>
  );
};

const Breadcrumbs = props => {
  const {breadcrumbs, links = []} = props;

  const breadcrumbsList = breadcrumbs.map(buildBreadcrumbs);
  const linksList = links.map(buildLink);

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

Breadcrumbs.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      title: PropTypes.string.isRequired,
      href: PropTypes.string
    })
  ),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      type: PropTypes.string
    })
  )
};
export default Breadcrumbs;
