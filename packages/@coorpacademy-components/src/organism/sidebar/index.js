import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../atom/link/index';
import Select from '../../atom/select/index';
import style from './style.css';

const FilterItem = props => {
  return (
    <li className={style.selectItem}>
      <span>{props.title}</span>
      <Select
        title={props.title}
        onChange={props.handleOnChange}
        theme="header"
        options={props.options}
      />
    </li>
  );
};

const SelectItem = props => {
  return (
    <li className={props.selected ? `${style.linkItem} ${style.selectLinkItem}` : style.linkItem}>
      <Link href={props.href} onClick={props.handleOnClick}>
        {props.title}
      </Link>
    </li>
  );
};

const InfoItem = props => {
  return (
    <ul className={style.infoItem}>
      <li className={style.infoItemTitle}>
        {props.title}
      </li>
      <li className={style.infoItemContent}>
        {props.info}
      </li>
    </ul>
  );
};

const Sidebar = props => {
  const sections = Array.isArray(props.items[0]) ? props.items : [props.items];
  return (
    <div className={style.sidebar}>
      {sections.map((sidebarSection, idx) => (
        <div className={style.sidebar_part} key={idx}>
          <ul className={style.itemList}>
            {sidebarSection.map((item, index) => {
              if (item.type === 'select')
                return (
                  <FilterItem
                    key={index}
                    title={item.title}
                    options={item.options}
                    handleOnChange={item.onChange}
                  />
                );
              else if (item.type === 'link')
                return (
                  <SelectItem
                    key={index}
                    title={item.title}
                    handleOnClick={item.onClick}
                    href={item.href}
                    selected={item.selected || false}
                  />
                );
              else if (item.type === 'info')
                return <InfoItem key={index} title={item.title} info={item.value} />;
              return null;
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

const InfoProptype = PropTypes.shape({
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['info']).isRequired,
  value: PropTypes.string.isRequired
});
const LinkProptype = PropTypes.shape({
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['link']).isRequired,
  selected: PropTypes.bool,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func
});
const SelectProptype = PropTypes.shape({
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['select']).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired
    })
  ).isRequired,
  onChange: PropTypes.func
});
const SectionProptype = PropTypes.oneOfType([InfoProptype, SelectProptype, LinkProptype]);
Sidebar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([SectionProptype, PropTypes.arrayOf(SectionProptype).isRequired])
  ).isRequired
};

export default Sidebar;
