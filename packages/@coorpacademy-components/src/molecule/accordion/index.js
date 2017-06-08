import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import Part from '../accordion-part';
import style from './style.css';

const Accordion = props => {
  const {titles, children = []} = props;

  const accordion = map.convert({cap: false})(
    (child, key) => (
      <div key={key} className={style.wrapper}>
        <Part title={titles[key]} content={child} />
      </div>
    ),
    children
  );

  return (
    <div>
      {accordion}
    </div>
  );
};

Accordion.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};

export default Accordion;
