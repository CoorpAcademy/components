import React, {useMemo} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {noop, getOr, defaults} from 'lodash/fp';
import Link from '../../atom/link';
import Button from '../../atom/button';
import Provider from '../../atom/provider';
import Select from '../../atom/select';
import Cta from '../../atom/cta';
import SelectMultiple from '../../molecule/select-multiple';
import {innerHTML} from '../../atom/label/style.css';
import style from './style.css';

const NEUTRAL_COLOR = '#607D8B';

export const InputTextItem = props => {
  const {title, placeholder = '', value, onChange = noop, disabled, name, index} = props;
  const handleOnChange = useMemo(() => e => onChange(e.target.value), [onChange]);
  return (
    <li data-name={name || `inputtext-item-${index}`} className={style.selectItem}>
      <span className={style.sidebarTitle}>{title}</span>
      <input
        type="text"
        name={title}
        className={style.input}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={handleOnChange}
      />
    </li>
  );
};

InputTextItem.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export const SelectItem = ({name, index, onChange, title, options}) => {
  return (
    <li data-name={name || `select-item-${index}`} className={style.selectItem}>
      <div className={style.selectTitle}>{title}</div>
      <Select title={title} onChange={onChange} theme="header" options={options} />
    </li>
  );
};

SelectItem.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired
    })
  ).isRequired,
  onChange: PropTypes.func
};

export const MultiSelectItem = ({name, index, onChange, title, options}) => {
  return (
    <li data-name={name || `select-item-${index}`} className={style.selectItem}>
      <div className={style.selectTitle}>{title}</div>
      <SelectMultiple theme="sidebar" onChange={onChange} options={options} />
    </li>
  );
};

MultiSelectItem.propTypes = SelectItem.propTypes;

export const LinkItem = ({href, index, name, selected, color, title, onClick}) => {
  const handleOnClick = useMemo(
    () => e => {
      onClick && onClick(e);
    },
    [onClick]
  );
  return (
    <Link
      onClick={handleOnClick}
      skinHover
      href={href}
      data-name={name || `link-item-${index}`}
      style={{
        textDecoration: 'none',
        color: selected ? color : NEUTRAL_COLOR
      }}
    >
      <li
        className={classnames(style.linkItem, style.sidebarTitle, innerHTML)}
        style={{
          borderLeftColor: selected ? color : null
        }}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{__html: title}}
      />
    </Link>
  );
};

LinkItem.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  name: PropTypes.string,
  href: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
};

export const TitleItem = ({name, index, title}) => {
  return (
    <ul data-name={name || `item-title-${index}`} className={style.titleItem}>
      <li className={style.titleItemTitle}>{title}</li>
    </ul>
  );
};

TitleItem.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string.isRequired,
  name: PropTypes.string
};

export const ButtonItem = ({index, onClick, color, neutralColor, name, href, title, cta}) => {
  const handleOnClick = useMemo(
    () => e => {
      onClick && onClick(e);
    },
    [onClick]
  );
  const backgroundColor = neutralColor === true ? NEUTRAL_COLOR : color;
  const button = cta ? (
    <Cta
      {...defaults(
        {
          onClick: handleOnClick,
          href,
          rectangular: true,
          fullWidth: true,
          secondary: true,
          submitValue: title
        },
        cta
      )}
    />
  ) : (
    <Button type="link" href={href} onClick={handleOnClick} style={{backgroundColor}}>
      {title}
    </Button>
  );
  return (
    <li data-name={name || `button-item-${index}`} className={style.buttonItem}>
      {button}
    </li>
  );
};

ButtonItem.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
  href: PropTypes.string,
  color: PropTypes.string,
  neutralColor: PropTypes.bool,
  onClick: PropTypes.func,
  cta: PropTypes.oneOfType([PropTypes.shape(Cta.propTypes), PropTypes.bool])
};

export const InfoItem = ({onClick, index, name, color, neutralColor, title, value}) => {
  const handleOnClick = useMemo(
    () => e => {
      onClick && onClick(e);
    },
    [onClick]
  );
  const color_ = neutralColor === true ? NEUTRAL_COLOR : color;
  return (
    <ul data-name={name || `item-info-${index}`} className={style.infoItem}>
      <li className={style.infoItemTitle}>{title}</li>
      <li
        className={style.infoItemContent}
        onClick={handleOnClick}
        style={{
          borderLeftColor: color_,
          color: color_
        }}
      >
        {value}
      </li>
    </ul>
  );
};

InfoItem.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
  color: PropTypes.string,
  neutralColor: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

const SidebarItem = ({item, color, index}) => {
  switch (item.type) {
    case 'select': {
      return <SelectItem {...item} color={color} index={index} />;
    }
    case 'multi-select':
      return <MultiSelectItem {...item} color={color} index={index} />;
    case 'link':
      return <LinkItem {...item} color={color} index={index} />;
    case 'title':
      return <TitleItem {...item} color={color} index={index} />;
    case 'button':
      return <ButtonItem {...item} color={color} index={index} />;
    case 'info':
      return <InfoItem {...item} color={color} index={index} />;
    case 'inputtext':
      return <InputTextItem {...item} color={color} index={index} />;
  }
};

SidebarItem.propTypes = {
  item: PropTypes.oneOfType([
    PropTypes.shape({...TitleItem.propTypes, type: PropTypes.oneOf(['title']).isRequired}),
    PropTypes.shape({...ButtonItem.propTypes, type: PropTypes.oneOf(['button']).isRequired}),
    PropTypes.shape({...InfoItem.propTypes, type: PropTypes.oneOf(['info']).isRequired}),
    PropTypes.shape({...LinkItem.propTypes, type: PropTypes.oneOf(['link']).isRequired}),
    PropTypes.shape({...InputTextItem.propTypes, type: PropTypes.oneOf(['inputtext']).isRequired}),
    PropTypes.shape({...SelectItem.propTypes, type: PropTypes.oneOf(['select']).isRequired}),
    PropTypes.shape({...SelectItem.propTypes, type: PropTypes.oneOf(['multi-select']).isRequired})
  ]),
  index: PropTypes.number,
  color: PropTypes.string
};

const SidebarItems = ({items, color}) => {
  return (
    <ul className={style.sectionItems}>
      {items.map((item, index) => (
        <SidebarItem item={item} key={index} index={index} color={color} />
      ))}
    </ul>
  );
};

SidebarItems.propTypes = {
  color: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(SidebarItem.propTypes))
};

const Sidebar = ({items}, context) => {
  const sections = Array.isArray(items[0]) ? items : [items];
  const {skin} = context;
  const defaultColor = getOr('#00B0FF', 'common.primary', skin);
  return (
    <div data-name="sidebar" className={style.sidebar}>
      {sections.map((sidebarSection, idx) => (
        <div data-name={`sidebarpart-${idx + 1}`} className={style.sidebarPart} key={idx}>
          <SidebarItems items={sidebarSection} color={defaultColor} />
        </div>
      ))}
    </div>
  );
};

Sidebar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.oneOfType([
      SidebarItem.propTypes.item,
      PropTypes.arrayOf(SidebarItem.propTypes.item).isRequired
    ])
  ).isRequired
};

Sidebar.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default Sidebar;
