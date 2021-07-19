import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {get, map, noop} from 'lodash/fp';
import Part from '../part';
import style from './style.css';

const themeStyle = {
  setup: style.setupWrapper,
  default: style.wrapper
};

const Tab = ({
  children,
  index,
  title,
  isOpen,
  isSelected,
  iconType,
  lessMoreIconType,
  onClick,
  theme
}) => {
  const handleOnClick = useMemo(() => evt => onClick(index, evt), [onClick]);
  return children ? (
    <div data-name="accordion" className={themeStyle[theme]}>
      <Part
        iconType={iconType}
        lessMoreIconType={lessMoreIconType}
        title={title}
        content={children}
        isOpen={isOpen}
        isSelected={isSelected}
        theme={theme}
        onClick={handleOnClick}
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
  lessMoreIconType: Part.propTypes.lessMoreIconType,
  isOpen: Part.propTypes.isOpen,
  theme: Part.propTypes.theme,
  onClick: Part.propTypes.onClick,
  isSelected: Part.propTypes.bool
};

const Accordion = props => {
  const {tabProps, children, theme = 'default', onClick = noop} = props;

  const tabs = map.convert({cap: false})((tab, index) => ({
    ...tab,
    child: children[index],
    children: undefined
  }))(tabProps);

  const accordion = map.convert({cap: false})((tab, index) => {
    return (
      <Tab {...tab} key={index} index={index} theme={theme} onClick={onClick}>
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
      isOpen: Tab.propTypes.isOpen
    })
  ),
  onClick: Tab.propTypes.onClick,
  theme: Tab.propTypes.theme
};

export default Accordion;
