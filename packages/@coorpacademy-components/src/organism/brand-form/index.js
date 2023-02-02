import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {get} from 'lodash/fp';
import {NovaCompositionNavigationArrowLeft as ArrowLeft} from '@coorpacademy/nova-icons';
import ReactTooltip from 'react-tooltip';
import BrandFormGroup from '../../molecule/brand-form-group';
import Provider from '../../atom/provider';
import Button from '../../atom/button';
import Link from '../../atom/link';
import Loader from '../../atom/loader';
import style from './style.css';

const buildButtonSection = (
  onSubmit,
  submitValue,
  onReset,
  resetValue,
  tooltip,
  disabled,
  isModified,
  isPending,
  darkColor
) => {
  if (!onSubmit && !onReset) {
    return null;
  }

  const disabledSubmit = disabled || isPending || !isModified;
  const submitButton = onSubmit ? (
    <div data-tip={tooltip.title} data-for="submitButton" className={style.saveButton}>
      <ReactTooltip
        type="light"
        effect="solid"
        className={style.toolTipContent}
        place={tooltip.place}
        id="submitButton"
      />
      <Button type="submit" disabled={disabledSubmit} submitValue={submitValue} />
    </div>
  ) : null;

  const cancelBackground = {backgroundColor: darkColor};

  const resetButton = onReset ? (
    <div className={style.resetButton}>
      <Button type="reset" submitValue={resetValue} style={cancelBackground} />
    </div>
  ) : null;

  return (
    <div className={style.buttons}>
      {submitButton}
      {resetButton}
    </div>
  );
};

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
    back,
    tooltip,
    isLoading
  } = props;
  const {skin} = context;
  const darkColor = get('common.dark', skin);

  const backView = back ? (
    <p className={style.back}>
      <ArrowLeft style={{color: darkColor}} className={style.arrowBack} />
      <Link href={back.link} className={style.backDesc}>
        {back.desc}
      </Link>
    </p>
  ) : null;

  const brandGroups = groups.map((group, index) => {
    return (
      <div className={style.group} key={index}>
        <BrandFormGroup {...group} />
      </div>
    );
  });

  const buttonSection = buildButtonSection(
    onSubmit,
    submitValue,
    onReset,
    resetValue,
    tooltip,
    disabled,
    isModified,
    isPending,
    darkColor
  );

  const handleSubmit = useMemo(
    () => e => {
      e.preventDefault();
      return onSubmit(e);
    },
    [onSubmit]
  );

  const handleReset = useMemo(
    () => e => {
      e.preventDefault();
      return onReset(e);
    },
    [onReset]
  );

  return (
    <div>
      {backView}
      {isLoading ? (
        <div className={style.loaderContainer}>
          <Loader className={style.loader} theme="coorpmanager" />
        </div>
      ) : (
        <form onSubmit={handleSubmit} onReset={handleReset} className={style.form}>
          {brandGroups}
          {buttonSection}
        </form>
      )}
    </div>
  );
}

BrandForm.contextTypes = {
  skin: Provider.childContextTypes.skin
};

BrandForm.defaultProps = {
  tooltip: {
    title: '',
    place: 'top'
  }
};

BrandForm.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.shape(BrandFormGroup.propTypes)).isRequired,
  disabled: PropTypes.bool,
  isModified: PropTypes.bool,
  isPending: PropTypes.bool,
  onSubmit: PropTypes.func,
  submitValue: Button.propTypes.submitValue,
  onReset: PropTypes.func,
  resetValue: Button.propTypes.submitValue,
  back: PropTypes.shape({
    desc: Link.propTypes.children,
    link: Link.propTypes.href
  }),
  tooltip: PropTypes.shape({
    title: PropTypes.string,
    place: PropTypes.string
  }),
  isLoading: PropTypes.bool
};

export default BrandForm;
