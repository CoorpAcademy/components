import React from 'react';
import PropTypes from 'prop-types';
import {snakeCase} from 'lodash/fp';
import Link from '../../atom/link';
import Tag from '../../atom/tag';
import {COLORS} from '../../variables/colors';
import style from './style.css';

const Tab = ({tab, index, isLightTab}) => {
  const {title, href, status, selected, onClick} = tab;
  const selectedStyle = isLightTab ? style.selectedlight : style.selected;
  const unselectedStyle = isLightTab ? style.lighttab : style.tab;
  const className = selected ? selectedStyle : unselectedStyle;
  const tagSelectedStyle = {
    backgroundColor: COLORS.primary_100,
    color: COLORS.cm_primary_blue
  };
  return (
    <div
      data-name={`brand_tab_${snakeCase(title)}`}
      className={className}
      key={index}
      onClick={onClick}
    >
      <Link href={href}>{title}</Link>
      {status ? (
        <div className={style.statusItemWrapper}>
          <Tag
            {...(selected && {
              customStyle: tagSelectedStyle
            })}
            size="S"
            label={status}
          />
        </div>
      ) : null}
    </div>
  );
};
Tab.propTypes = {
  tab: PropTypes.shape({
    title: Link.propTypes.children,
    href: Link.propTypes.href,
    status: PropTypes.string,
    selected: PropTypes.bool,
    onClick: PropTypes.func
  }),
  index: PropTypes.number,
  isLightTab: PropTypes.bool
};

const BrandTabs = props => {
  const {tabs, type = 'default'} = props;
  const isLightTab = type === 'light';
  const tabsList = tabs.map((tab, index) => Tab({tab, index, isLightTab}));

  return <div className={isLightTab ? style.lightwrapper : style.wrapper}>{tabsList}</div>;
};

BrandTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape(Tab.propTypes)),
  type: PropTypes.oneOf(['default', 'light'])
};
export default BrandTabs;
