import React, {useMemo} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {noop, getOr, defaults} from 'lodash/fp';
import {
  NovaCompositionCoorpacademyOpenInNewTab,
  NovaSolidStatusCheckCircle2 as ActiveIcon
} from '@coorpacademy/nova-icons';

import Link from '../../atom/link';
import Button from '../../atom/button';
import Provider, {GetSkinFromContext} from '../../atom/provider';
import Select from '../../atom/select';
import Cta from '../../atom/cta';
import SelectMultiple from '../../molecule/select-multiple';
import style from './style.css';

const NEUTRAL_COLOR = '#607D8B';

export const InputTextItem = props => {
  const {
    title,
    placeholder = '',
    value,
    onChange = noop,
    disabled,
    name,
    index,
    uppercase = true
  } = props;
  const handleOnChange = useMemo(() => e => onChange(e.target.value), [onChange]);
  return (
    <li data-name={name || `inputtext-item-${index}`} className={style.selectItem}>
      <div className={classnames(style.selectTitle, {[style.uppercase]: uppercase})}>{title}</div>
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
  onChange: PropTypes.func,
  uppercase: PropTypes.bool
};

export const SelectItem = ({name, index, onChange, title, options, uppercase = true}) => {
  return (
    <li data-name={name || `select-item-${index}`} className={style.selectItem}>
      <div className={classnames(style.selectTitle, {[style.uppercase]: uppercase})}>{title}</div>
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
  onChange: PropTypes.func,
  uppercase: PropTypes.bool
};

export const MultiSelectItem = ({name, index, onChange, title, options, uppercase = true}) => {
  return (
    <li data-name={name || `select-item-${index}`} className={style.selectItem}>
      <div className={classnames(style.selectTitle, {[style.uppercase]: uppercase})}>{title}</div>
      <SelectMultiple theme="sidebar" onChange={onChange} options={options} />
    </li>
  );
};

MultiSelectItem.propTypes = SelectItem.propTypes;

export const LinkItem = (
  {
    href,
    index,
    name,
    selected,
    color,
    title,
    onClick,
    uppercase = true,
    styles,
    children,
    setChildrenAsHtml = true,
    target = '_self',
    activeIcon = false
  },
  context
) => {
  const skin = GetSkinFromContext(context);

  const handleOnClick = useMemo(
    () => e => {
      onClick && onClick(e);
    },
    [onClick]
  );

  const classNames = classnames(
    style.linkItem,
    style.innerHTML,
    {[style.uppercase]: uppercase},
    styles,
    !activeIcon && setChildrenAsHtml ? style.itemWithoutIcon : null
  );
  const borderStyle = {borderLeftColor: selected ? color : null};

  return (
    <Link
      target={target}
      onClick={handleOnClick}
      hoverColor={getOr('#00B0FF', 'common.primary', skin)}
      href={href}
      data-name={name || `link-item-${index}`}
      style={{
        textDecoration: 'none',
        color: selected ? color : NEUTRAL_COLOR
      }}
    >
      {setChildrenAsHtml ? (
        <li
          className={classNames}
          style={borderStyle}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: title}}
        />
      ) : (
        <li className={classNames} style={borderStyle}>
          {activeIcon ? <ActiveIcon className={style.activeIcon} /> : null}
          {title}
          {children}
        </li>
      )}
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
  onClick: PropTypes.func,
  uppercase: PropTypes.bool,
  setChildrenAsHtml: PropTypes.bool,
  target: PropTypes.string,
  activeIcon: PropTypes.bool
};

LinkItem.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export const IconLinkItem = ({
  index,
  name = `button-link-item-${index}`,
  onClick,
  uppercase = true,
  ...props
}) => {
  const handleOnClick = useMemo(
    () => e => {
      onClick && onClick(e);
    },
    [onClick]
  );
  return (
    <LinkItem
      {...props}
      setChildrenAsHtml={false}
      onClick={handleOnClick}
      name={name}
      uppercase={uppercase}
      index={index}
    >
      <NovaCompositionCoorpacademyOpenInNewTab className={style.icon} />
    </LinkItem>
  );
};

IconLinkItem.propTypes = LinkItem.propTypes;

export const TitleItem = ({name, index, title, uppercase}) => {
  return (
    <ul data-name={name || `item-title-${index}`} className={style.titleItem}>
      <li className={classnames(style.titleItemTitle, {[style.uppercase]: uppercase})}>{title}</li>
    </ul>
  );
};

TitleItem.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
  uppercase: PropTypes.bool
};

export const ButtonItem = ({
  index,
  onClick,
  color,
  neutralColor,
  name,
  href,
  title,
  cta,
  uppercase
}) => {
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
    <li
      data-name={name || `button-item-${index}`}
      className={classnames(style.buttonItem, {[style.uppercase]: uppercase})}
    >
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
  cta: PropTypes.oneOfType([PropTypes.shape(Cta.propTypes), PropTypes.bool]),
  uppercase: PropTypes.bool
};

export const InfoItem = ({onClick, index, name, color, neutralColor, title, value, uppercase}) => {
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
        className={classnames(style.infoItemContent, {[style.uppercase]: uppercase})}
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
  onClick: PropTypes.func,
  uppercase: PropTypes.bool
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
    case 'iconLink':
      return <IconLinkItem {...item} color={color} index={index} />;
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
    PropTypes.shape({...IconLinkItem.propTypes, type: PropTypes.oneOf(['iconLink']).isRequired}),
    PropTypes.shape({...ButtonItem.propTypes, type: PropTypes.oneOf(['button']).isRequired}),
    PropTypes.shape({...InfoItem.propTypes, type: PropTypes.oneOf(['info']).isRequired}),
    PropTypes.shape({...LinkItem.propTypes, type: PropTypes.oneOf(['link']).isRequired}),
    PropTypes.shape({...InputTextItem.propTypes, type: PropTypes.oneOf(['inputtext']).isRequired}),
    PropTypes.shape({...SelectItem.propTypes, type: PropTypes.oneOf(['select']).isRequired}),
    PropTypes.shape({...SelectItem.propTypes, type: PropTypes.oneOf(['multi-select']).isRequired})
  ]),
  index: PropTypes.number,
  color: PropTypes.string,
  uppercase: PropTypes.bool
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
