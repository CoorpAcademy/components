import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import Link from '../../atom/link/index';
import Provider from '../../atom/provider';
import Select from '../../atom/select/index';
import style from './style.css';

const SelectItem = props => {
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

const LinkItem = props => {
  return (
    <Link
      href={props.href}
      onClick={props.handleOnClick}
      skinHover
      style={{
        textDecoration: 'none',
        color: props.selected ? props.color : '#607D8B'
      }}
    >
      <li
        className={style.linkItem}
        style={{
          borderLeftColor: props.selected ? props.color : null
        }}
      >
        {props.title}
      </li>
    </Link>
  );
};

const InfoItem = props => {
  return (
    <ul className={style.infoItem}>
      <li className={style.infoItemTitle}>
        {props.title}
      </li>
      <li
        className={style.infoItemContent}
        style={{
          borderLeftColor: props.color,
          color: props.color
        }}
      >
        {props.info}
      </li>
    </ul>
  );
};

const Sidebar = (props, context) => {
  const sections = Array.isArray(props.items[0]) ? props.items : [props.items];
  const {skin} = context;
  const defaultColor = getOr('#00B0FF', 'common.primary', skin);

  return (
    <div className={style.sidebar}>
      {sections.map((sidebarSection, idx) => (
        <div className={style.sidebarPart} key={idx}>
          <SidebarItems items={sidebarSection} color={defaultColor} />
        </div>
      ))}
    </div>
  );
};

const SidebarItems = props => {
  return (
    <ul className={style.sectionItems}>
      {props.items.map((item, index) => (
        <SidebarItem item={item} key={index} color={props.color} />
      ))}
    </ul>
  );
};

const SidebarItem = ({item, color}) => {
  switch (item.type) {
    case 'select':
      return (
        <SelectItem
          title={item.title}
          options={item.options}
          handleOnChange={item.onChange}
          color={color}
        />
      );
    case 'link':
      return (
        <LinkItem
          title={item.title}
          handleOnClick={item.onClick}
          href={item.href}
          selected={item.selected || false}
          color={color}
        />
      );
    case 'info':
      return <InfoItem title={item.title} info={item.value} color={color} />;
    default:
      return null;
  }
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
Sidebar.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default Sidebar;
