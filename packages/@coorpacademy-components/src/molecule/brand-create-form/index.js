import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atom/button';
import Loader from '../../atom/loader';
import Provider from '../../atom/provider';
import style from './style.css';

const BrandCreateForm = (props, context) => {
  const {title, subtitle, description, field, onSubmit, submitValue, isPending, isModified} = props;
  const {translate} = context;
  const waitMessage = translate('Wait_creation');

  const wrapperClass =
    isModified || isPending || field.error ? style.modifiedWrapper : style.wrapper;
  const fieldClass = field.error ? style.error : style.default;
  const disabled = isPending || !isModified;
  const handleChange = e => field.onChange(e.target.value);

  const actionView = isPending ? (
    <div>
      <div className={style.wait}>{waitMessage}</div>
      <div className={style.loading}>
        <Loader />
      </div>
    </div>
  ) : (
    <div>
      <Button
        data-name="brand_create_submit_button"
        type="submit"
        disabled={disabled}
        submitValue={submitValue}
      />
    </div>
  );

  return (
    <div className={wrapperClass}>
      <div className={style.header}>
        <h1>{title}</h1>
      </div>
      <form className={style.content} onSubmit={onSubmit}>
        <h2>{subtitle}</h2>
        <div className={style.description}>{description}</div>
        <div className={fieldClass}>
          <label>
            <input
              type="text"
              data-name="brand_create_text_input"
              placeholder={field.placeholder}
              defaultValue={field.value}
              onInput={handleChange}
            />
            {field.label}
          </label>
        </div>
        {actionView}
      </form>
    </div>
  );
};

BrandCreateForm.contextTypes = {
  translate: Provider.childContextTypes.translate
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
