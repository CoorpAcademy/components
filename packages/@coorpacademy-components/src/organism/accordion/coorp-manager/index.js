import React, {useMemo, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {map, noop, findIndex} from 'lodash/fp';
import Part from './part';
import style from './style.css';

const themeStyle = {
  setup: style.setupWrapper,
  default: style.wrapper
};

const Tab = ({
  children,
  index,
  title,
  selected,
  iconType,
  onClick,
  href,
  type,
  theme,
  isOpen,
  onUpdateOpenedTab
}) => {
  const handleOnClick = useMemo(() => evt => onClick(index, evt), [index, onClick]);
  return children ? (
    <div data-name="accordion" className={themeStyle[theme]}>
      <Part
        iconType={iconType}
        title={title}
        content={children}
        selected={selected}
        theme={theme}
        href={href}
        type={type}
        onClick={handleOnClick}
        onUpdateOpenedTab={onUpdateOpenedTab}
        isOpen={isOpen}
      />
    </div>
  ) : (
    <div data-name="accordion" className={style.wrapperHidden} />
  );
};

Tab.propTypes = {
  children: Part.propTypes.content,
  index: PropTypes.number,
  title: Part.propTypes.title,
  iconType: Part.propTypes.iconType,
  theme: Part.propTypes.theme,
  onClick: Part.propTypes.onClick,
  selected: Part.propTypes.selected,
  type: Part.propTypes.type,
  href: Part.propTypes.href,
  isOpen: Part.propTypes.isOpen,
  onUpdateOpenedTab: Part.propTypes.onUpdateOpenedTab
};

const Accordion = props => {
  const {tabProps, children, theme = 'default', onClick = noop} = props;
  const selectedIndex = findIndex(item => item.selected, tabProps);

  const [openedTab, updateOpenedTab] = useState(selectedIndex);
  useEffect(() => {
    updateOpenedTab(selectedIndex);
  }, [selectedIndex]);

  const tabs = map.convert({cap: false})((tab, index) => ({
    ...tab,
    child: children[index],
    children: undefined
  }))(tabProps);

  const accordion = map.convert({cap: false})((tab, index) => {
    const isOpen = openedTab === index;
    function onUpdateOpenedTab() {
      updateOpenedTab(isOpen ? -1 : index);
    }
    return (
      <Tab
        {...tab}
        key={index}
        index={index}
        theme={theme}
        onClick={onClick}
        onUpdateOpenedTab={onUpdateOpenedTab}
        isOpen={isOpen}
      >
        {tab.child}
      </Tab>
    );
  }, tabs);

  return <div>{accordion}</div>;
};

Accordion.defaultProps = {
  children: []
};

Accordion.propTypes = {
  children: PropTypes.arrayOf(Tab.propTypes.children),
  tabProps: PropTypes.arrayOf(
    PropTypes.shape({
      title: Tab.propTypes.title,
      iconType: Tab.propTypes.iconType,
      selected: Tab.propTypes.selected,
      type: Tab.propTypes.type,
      href: Tab.propTypes.href,
      index: Tab.propTypes.index,
      children: Tab.propTypes.children
    })
  ),
  onClick: Tab.propTypes.onClick,
  theme: PropTypes.oneOf(['setup', 'default'])
};

export default Accordion;
