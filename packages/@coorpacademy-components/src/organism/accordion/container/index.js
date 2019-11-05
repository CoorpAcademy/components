import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import noop from 'lodash/fp/noop';
import Part from '../part';
import style from './style.css';

const themeStyle = {
  setup: style.setupWrapper,
  default: style.wrapper
};

const Accordion = props => {
  const {tabProps, children, theme = 'default', onClick = noop} = props;
  const accordion = map.convert({cap: false})((child, key) => {
    const title = get([key, 'title'], tabProps);
    const isOpen = get([key, 'isOpen'], tabProps);
    const iconType = get([key, 'iconType'], tabProps);
    const handleOnClick = evt => onClick(key, evt);
    return child ? (
      <div data-name="accordion" key={key} className={themeStyle[theme]}>
        <Part
          iconType={iconType}
          title={title}
          content={child}
          isOpen={isOpen}
          theme={theme}
          onClick={handleOnClick}
        />
      </div>
    ) : (
      <div data-name="accordion" key={key} className={style.wrapperHidden} />
    );
  }, children);

  return <div>{accordion}</div>;
};

Accordion.defaultProps = {
  children: []
};

Accordion.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  tabProps: PropTypes.arrayOf(PropTypes.shape(Part.PropTypes)),
  onClick: PropTypes.func,
  theme: PropTypes.string
};

export default Accordion;
