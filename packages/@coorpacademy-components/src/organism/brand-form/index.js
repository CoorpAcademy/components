import React from 'react';
import PropTypes from 'prop-types';
import BrandFormGroup from '../../molecule/brand-form-group';
import Button from '../../atom/button';
import Link from '../../atom/link';
import style from './style.css';

function BrandForm(props) {
  const {
    groups,
    disabled,
    isModified,
    isPending,
    onSubmit,
    submitValue,
    onReset,
    resetValue,
    back
  } = props;

  const backView =
    back &&
    <p className={style.back}>
      <i className={style.arrowBack} />
      <Link href={back.link} className={style.backDesc}>
        {back.desc}
      </Link>
    </p>;

  const brandGroups = groups.map((group, index) => {
    return (
      <div className={style.group} key={index}>
        <BrandFormGroup {...group} />
      </div>
    );
  });

  const disabledSubmit = disabled || isPending || !isModified;
  const submitButton = onSubmit
    ? <div className={style.saveButton}>
        <Button disabled={disabledSubmit} submitValue={submitValue} />
      </div>
    : null;
  const handleSubmit = e => {
    e.preventDefault();
    return onSubmit(e);
  };

  const resetButton = onReset
    ? <div className={style.resetButton}>
        <Button type="reset" submitValue={resetValue} />
      </div>
    : null;
  const handleReset = e => {
    e.preventDefault();
    return onReset(e);
  };

  return (
    <div className={style.wrapper}>
      {backView}
      <form onSubmit={handleSubmit} onReset={handleReset}>
        {brandGroups}
        <div className={style.buttons}>
          {submitButton}
          {resetButton}
        </div>
      </form>
    </div>
  );
}

BrandForm.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
      fields: PropTypes.array
    })
  ).isRequired,
  disabled: PropTypes.bool,
  isModified: PropTypes.bool,
  isPending: PropTypes.bool,
  onSubmit: PropTypes.func,
  submitValue: PropTypes.string,
  onReset: PropTypes.func,
  resetValue: PropTypes.string,
  back: PropTypes.shape({
    desc: PropTypes.string,
    link: PropTypes.string
  })
};

export default BrandForm;
