import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import noop from 'lodash/fp/noop';
import Part from '../part';
import style from './style.css';

const Accordion = props => {
  const {tabProps, children = [], onClick = noop} = props;

  const accordion = map.convert({cap: false})((child, key) => {
    const title = get([key, 'title'], tabProps);
    const isOpen = get([key, 'isOpen'], tabProps);
    const iconType = get([key, 'iconType'], tabProps);
    const handleOnClick = () => onClick(key);

    return (
      <div data-name="accordion" key={key} className={style.wrapper}>
        <Part
          iconType={iconType}
          title={title}
          content={child}
          isOpen={isOpen}
          onClick={handleOnClick}
        />
      </div>
    );
  }, children);

  return (
    <div>
      {accordion}
    </div>
  );
};

Accordion.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  tabProps: PropTypes.arrayOf(PropTypes.shape(Part.PropTypes)),
  onClick: PropTypes.func
};

export default Accordion;
