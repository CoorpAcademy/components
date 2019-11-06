import React from 'react';
import PropTypes from 'prop-types';
import {snakeCase} from 'lodash/fp';
import Link from '../../atom/link';
import style from './style.css';

const buildTab = (tab, index) => {
  const {title, href, selected, onClick} = tab;

  const className = selected ? style.selected : style.tab;

  return (
    <div
      data-name={`brand_tab_${snakeCase(title)}`}
      className={className}
      key={index}
      onClick={onClick}
    >
      <Link href={href}>{title}</Link>
    </div>
  );
};

const BrandTabs = props => {
  const {tabs} = props;

  const tabsList = tabs.map(buildTab);

  return <div className={style.wrapper}>{tabsList}</div>;
};

BrandTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: Link.propTypes.children,
      href: Link.propTypes.href,
      selected: PropTypes.bool,
      onClick: PropTypes.func
    })
  )
};
export default BrandTabs;
