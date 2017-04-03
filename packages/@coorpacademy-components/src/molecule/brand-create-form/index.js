// @flow
import React, {type Children} from 'react';
import PropTypes from 'prop-types';
import Button from '../../atom/button';
import style from './style.css';

/* eslint-disable react/no-unused-prop-types */
type Field = {
  label: string,
  placeholder: string,
  onChange: Function,
  error?: string,
  value: string
};
/* eslint-enable react/no-unused-prop-types */

export type Props = {
  title: string,
  subtitle: string,
  description: string,
  field: Field,
  onSubmit: Function,
  submitValue: string,
  isPending: boolean,
  isModified: boolean
};

const BrandCreateForm = (props: Props) => {
  const {
    title,
    subtitle,
    description,
    field,
    onSubmit,
    submitValue,
    isPending,
    isModified
  } = props;

  const wrapperClass = (isModified || isPending || field.error) ? style.modifiedWrapper : style.wrapper;
  const fieldClass = field.error ? style.error : style.default;
  const disabled = isPending || !isModified;
  const handleChange = e => field.onChange(e.target.value);

  return (
    <div className={wrapperClass}>
      <div className={style.header}>
        <h1>{title}</h1>
      </div>
      <form
        className={style.content}
        onSubmit={onSubmit}
      >
        <h2>{subtitle}</h2>
        <div className={style.description}>
          {description}
        </div>
        <div className={fieldClass}>
          <label>
            <input
              type='text'
              placeholder={field.placeholder}
              defaultValue={field.value}
              onInput={handleChange}
            />{field.label}
          </label>
        </div>
        <Button
          disabled={disabled}
          submitValue={submitValue}
          centered
        />
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
