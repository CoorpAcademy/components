import React from 'react';
import PropTypes from 'prop-types';
import Part from '../accordion-part';
import style from './style.css';

const Accordion = props => {
  const {titles, children = []} = props;

  const accordion = children.map((child, key) => (
    <div key={key} className={style.wrapper}>
      <Part title={titles[key]} content={child} />
    </div>
  ));

  return (
    <div>
      {accordion}
    </div>
  );
};

Accordion.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object) // eslint-disable-line react/forbid-prop-types
};

export default Accordion;
