import React from 'react';
import noop from 'lodash/fp/noop';
import PropTypes from 'prop-types';
import style from './style.css';

const AccordionPart = props => {
  const {title, content, onClick = noop, isOpen = false} = props;

  return (
    <div>
      <div className={style.title} onClick={onClick}>
        <h3>{title}</h3>
        <span className={isOpen ? style.up : style.down} />
      </div>
      <div className={isOpen ? style.container : style.none}>
        {content}
      </div>
    </div>
  );
};

AccordionPart.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node,
  onClick: PropTypes.func,
  isOpen: PropTypes.bool
};

export default AccordionPart;
