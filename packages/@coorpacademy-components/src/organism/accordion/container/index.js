import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {get, map, noop} from 'lodash/fp';
import Part from '../part';
import style from './style.css';

const themeStyle = {
  setup: style.setupWrapper,
  default: style.wrapper
};

const Tab = ({children, index, title, isOpen, iconType, onClick, theme}) => {
  const handleOnClick = useMemo(() => evt => onClick(index, evt), [index, onClick]);

  return children ? (
    <div data-name="accordion" className={themeStyle[theme]}>
      <Part
        iconType={iconType}
        title={title}
        content={children}
        isOpen={isOpen}
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
  isOpen: Part.propTypes.isOpen,
  theme: Part.propTypes.theme,
  onClick: Part.propTypes.onClick
};

const Accordion = props => {
  const {tabProps, children, theme = 'default', onClick = noop} = props;
  const accordion = map.convert({cap: false})((child, index) => {
    const tabProps_ = get(index, tabProps);
    return (
      <Tab {...tabProps_} key={index} index={index} theme={theme} onClick={onClick}>
        {child}
      </Tab>
    );
  }, children);

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
