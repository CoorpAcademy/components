import React, {PropTypes} from 'react';
import map from 'lodash/fp/map';
import Link from '../../atom/link';
import style from './style.css';

const buildTab = (tab, index) => {
  const {
    title,
    href,
    selected
  } = tab;

  const className = selected ? style.selected : style.tab;

  return (
    <div className={className} key={index}>
      <Link href={href}>{title}</Link>
    </div>
  );
};

const BrandTabs = ({children, ...props}) => {
  const {
    tabs
  } = props;

  const tabsList = tabs.map(buildTab);

  return (
    <div className={style.wrapper}>
      {tabsList}
    </div>
  );
};

BrandTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    selected: PropTypes.bool
  }))
};
export default BrandTabs;
