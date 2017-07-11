import React from 'react';
import LinkedInput from 'react-linked-input';
import PropTypes from 'prop-types';
import Button from '../../atom/button';
import style from './style.css';

const BrandCreateForm = props => {
  const {title, subtitle, description, field, onSubmit, submitValue, isPending, isModified} = props;

  const wrapperClass = isModified || isPending || field.error
    ? style.modifiedWrapper
    : style.wrapper;
  const fieldClass = field.error ? style.error : style.default;
  const disabled = isPending || !isModified;
  const handleChange = e => field.onChange(e.target.value);

  return (
    <div className={wrapperClass}>
      <div className={style.header}>
        <h1>{title}</h1>
      </div>
      <form className={style.content} onSubmit={onSubmit}>
        <h2>{subtitle}</h2>
        <div className={style.description}>
          {description}
        </div>
        <div className={fieldClass}>
          <label>
            <LinkedInput
              type="text"
              placeholder={field.placeholder}
              value={field.value}
              onInput={handleChange}
            />
            {field.label}
          </label>
        </div>
        <Button disabled={disabled} submitValue={submitValue} centered />
      </form>
    </div>
  );
};

BrandCreateForm.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  field: PropTypes.shape({
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    value: PropTypes.string
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitValue: PropTypes.string.isRequired,
  isPending: PropTypes.bool,
  isModified: PropTypes.bool
};

export default BrandCreateForm;
