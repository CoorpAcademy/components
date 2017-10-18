import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import LinkedInput from 'react-linked-input';
import noop from 'lodash/fp/noop';
import getOr from 'lodash/fp/getOr';
import Link from '../../atom/link/index';
import Provider from '../../atom/provider';
import Select from '../../atom/select/index';
import style from './style.css';

export const InputTextItem = props => {
  const {title, placeholder = '', value, handleOnChange = noop, disabled} = props;
  const onChange = e => handleOnChange(e.target.value);
  return (
    <li data-name="sidebarItemSelectItem" className={style.selectItem}>
      <span className={style.sidebarTitle}>{title}</span>
      <LinkedInput
        type="text"
        name={title}
        className={style.input}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
    </li>
  );
};

export const SelectItem = props => {
  return (
    <li data-name="sidebarItemSelectItem" className={style.selectItem}>
      <span className={style.sidebarTitle}>{props.title}</span>
      <Select
        title={props.title}
        onChange={props.handleOnChange}
        theme="header"
        options={props.options}
      />
    </li>
  );
};

export const LinkItem = props => {
  const handleOnClick = e => {
    e.preventDefault();
    props.handleOnClick && props.handleOnClick(e);
  };
  return (
    <Link
      onClick={handleOnClick}
      skinHover
      data-name={props.name || `link-item-${props.index}`}
      style={{
        textDecoration: 'none',
        color: props.selected ? props.color : '#607D8B'
      }}
    >
      <li
        className={classnames(style.linkItem, style.sidebarTitle)}
        style={{
          borderLeftColor: props.selected ? props.color : null
        }}
      >
        {props.title}
      </li>
    </Link>
  );
};

export const InfoItem = props => {
  return (
    <ul data-name="sidebarItemInfo" className={style.infoItem}>
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
        {props.value}
      </li>
    </ul>
  );
};

const Sidebar = (props, context) => {
  const sections = Array.isArray(props.items[0]) ? props.items : [props.items];
  const {skin} = context;
  const defaultColor = getOr('#00B0FF', 'common.primary', skin);
  return (
    <div data-name="sidebar" className={style.sidebar}>
      {sections.map((sidebarSection, idx) =>
        <div data-name="sidebarPart" className={style.sidebarPart} key={idx}>
          <SidebarItems items={sidebarSection} color={defaultColor} />
        </div>
      )}
    </div>
  );
};

const SidebarItems = props => {
  return (
    <ul className={style.sectionItems}>
      {props.items.map((item, index) =>
        <SidebarItem item={item} key={index} index={index} color={props.color} />
      )}
    </ul>
  );
};

const SidebarItem = ({item, color, index}) => {
  switch (item.type) {
    case 'select':
      return (
        <SelectItem
          title={item.title}
          options={item.options}
          handleOnChange={item.handleOnChange}
          color={color}
        />
      );
    case 'link':
      return (
        <LinkItem
          title={item.title}
          handleOnClick={item.handleOnClick}
          name={item.name}
          index={index}
          selected={item.selected || false}
          color={color}
        />
      );
    case 'info':
      return <InfoItem title={item.title} value={item.value} color={color} />;
    case 'inputtext':
      return (
        <InputTextItem
          title={item.title}
          placeholder={item.placeholder}
          value={item.value}
          handleOnChange={item.handleOnChange}
          disabled={item.disabled}
        />
      );
    default:
      return null;
  }
};
const InfoItemSchema = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};
const LinkItemSchema = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func
};
const InputTextItemSchema = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

const SelectItemSchema = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired
    })
  ).isRequired,
  onChange: PropTypes.func
};

InfoItem.propTypes = InfoItemSchema;
LinkItem.propTypes = LinkItemSchema;
InputTextItem.propTypes = InputTextItemSchema;
SelectItem.propTypes = SelectItemSchema;
const SectionProptype = PropTypes.oneOfType([
  PropTypes.shape({...InfoItemSchema, type: PropTypes.oneOf(['info']).isRequired}),
  PropTypes.shape({...LinkItemSchema, type: PropTypes.oneOf(['link']).isRequired}),
  PropTypes.shape({...InputTextItemSchema, type: PropTypes.oneOf(['inputtext']).isRequired}),
  PropTypes.shape({...SelectItemSchema, type: PropTypes.oneOf(['select']).isRequired})
]);
Sidebar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([SectionProptype, PropTypes.arrayOf(SectionProptype).isRequired])
  ).isRequired
};
Sidebar.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default Sidebar;
