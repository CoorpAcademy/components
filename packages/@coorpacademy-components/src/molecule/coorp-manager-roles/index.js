import React from 'react';
import PropTypes from 'prop-types';
import InputCheckbox from '../../atom/input-checkbox';
import style from './style.css';

const Roles = ({title, fields}) => {
  return (
    <div className={style.rolesGroup}>
      <div className={style.title}>{<h3>{title}</h3>}</div>
      <div className={style.content}>
        {fields.map((role, i) => (
          <span key={i}>
            <InputCheckbox {...role} />
          </span>
        ))}
      </div>
    </div>
  );
};

Roles.propTypes = {
  title: PropTypes.string,
  fields: PropTypes.arrayOf([
    PropTypes.shape({
      ...InputCheckbox.propTypes,
      type: PropTypes.oneOf(['checkbox'])
    })
  ])
};

export default Roles;
