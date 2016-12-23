import React, {PropTypes} from 'react';
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
    back
  } = props;

  const backView = back && (
    <p className={style.back}>
      <i className={style.arrowBack}/>
      <Link
        href={back.link}
        className={style.backDesc}
      >
        {back.desc}
      </Link>
    </p>
  );

  const brandGroups = groups.map((group, index) => {
    return (
      <div className={style.group} key={index}>
        <BrandFormGroup {...group} />
      </div>
    );
  });

  const disabledSubmit = disabled || isPending || !isModified;
  const submitButton = onSubmit ? (
    <div className={style.saveGroup}>
      <Button
        disabled={disabledSubmit}
        submitValue={submitValue}
      />
    </div>
  ) : null;

  return (
    <div className={style.wrapper}>
      {backView}
      <form className={style.groups} onSubmit={e => e.preventDefault() || onSubmit(e)}>
        <div>
          {brandGroups}
        </div>
        {submitButton}
      </form>
    </div>
  );
};

BrandForm.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    fields: PropTypes.array
  })).isRequired,
  disabled: PropTypes.bool,
  isModified: PropTypes.bool,
  isPending: PropTypes.bool,
  onSubmit: PropTypes.func,
  submitValue: PropTypes.string,
  back: PropTypes.shape({
    desc: PropTypes.string,
    link: PropTypes.string
  })
};

export default BrandForm;
