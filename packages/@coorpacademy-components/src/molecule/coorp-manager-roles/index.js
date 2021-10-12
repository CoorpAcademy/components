import React from 'react';
import PropTypes from 'prop-types';
import InputCheckbox from '../../atom/input-checkbox';
import style from './style.css';

const Roles = ({title, fields}) => {
  return (
    <div className={style.rolesGroup}>
      <h3 className={style.title}>{title}</h3>
      <div className={style.content}>
        {fields.map((field, i) => (
          <span className={style.field} key={i}>
            <InputCheckbox {...field} />
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
