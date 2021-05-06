import React from 'react';
import PropTypes from 'prop-types';
import {snakeCase} from 'lodash/fp';
import Link from '../../atom/link';
import style from './style.css';

const buildTab = isLightTab => (tab, index) => {
  const {title, href, selected, onClick} = tab;
  const selectedStyle = isLightTab ? style.selectedlight : style.selected;
  const unselectedStyle = isLightTab ? style.lighttab : style.tab;
  const className = selected ? selectedStyle : unselectedStyle;

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
  const {tabs, type = 'default'} = props;
  const isLightTab = type === 'light';
  const tabsList = tabs.map(buildTab(isLightTab));

  return <div className={isLightTab ? style.lightwrapper : style.wrapper}>{tabsList}</div>;
};

BrandTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: Link.propTypes.children,
      href: Link.propTypes.href,
      selected: PropTypes.bool,
      onClick: PropTypes.func
    })
  ),
  type: PropTypes.oneOf(['default', 'light'])
};
export default BrandTabs;
