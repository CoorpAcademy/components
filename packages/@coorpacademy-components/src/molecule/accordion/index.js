import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import map from 'lodash/fp/map';
import Part from '../accordion-part';
import style from './style.css';

const Accordion = props => {
  const {tabProps, children = [], openable = false} = props;

  const accordion = map.convert({cap: false})((child, key) => {
    const title = get([key, 'title'], tabProps);
    const isOpen = get([key, 'open'], tabProps);
    return (
      <div key={key} className={style.wrapper}>
        <Part title={title} content={child} openable={openable} open={isOpen} />
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
  openable: PropTypes.bool
};

export default Accordion;
