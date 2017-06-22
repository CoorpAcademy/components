import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import ArrowLeft from '@coorpacademy/nova-icons/composition/navigation/arrow-left';
import BrandFormGroup from '../../molecule/brand-form-group';
import Provider from '../../atom/provider';
import Button from '../../atom/button';
import Link from '../../atom/link';
import style from './style.css';

function BrandForm(props, context) {
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

  const {skin} = context;
  const darkColor = get('common.dark', skin);

  const backView =
    back &&
    <p className={style.back}>
      <ArrowLeft color={darkColor} className={style.arrowBack} />
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

BrandForm.contextTypes = {
  skin: Provider.childContextTypes.skin
};

BrandForm.propTypes = {
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      ssodescription: PropTypes.string,
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
