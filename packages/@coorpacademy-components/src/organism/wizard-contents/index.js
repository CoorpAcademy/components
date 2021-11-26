import React from 'react';
import PropTypes from 'prop-types';
import ButtonLink from '../../atom/button-link';
import ButtonLinkIconOnly from '../../atom/button-link-icon-only';
import WizardSteps from '../../atom/wizard-steps';
import WizardSummary from '../../molecule/wizard-summary';
import BrandForm from '../brand-form';
import ContentTranslate from '../content-translation';
import OrganismSearchAndChipsResults from '../search-and-chips-results';
import CourseSelection from '../course-selection';
import style from './style.css';

const buildHeader = (wizardHeader, steps) => {
  const {title, onClick} = wizardHeader;

  const buttonCloseIcon = {
    size: 'small',
    'data-name': 'close-button',
    'aria-label': 'close button',
    icon: 'close',
    onClick
  };

  return (
    <div>
      <div className={style.header}>
        <ButtonLinkIconOnly {...buttonCloseIcon} />
        <div className={style.headerTitle}>{title}</div>
      </div>
      <WizardSteps steps={steps} />
    </div>
  );
};

const buildForm = content => {
  const {type} = content;
  switch (type) {
    case 'form':
      return <BrandForm {...content} />;
    case 'translate':
      return <ContentTranslate {...content} />;
    case 'populations':
      return <OrganismSearchAndChipsResults {...content} />;
    case 'courses':
      return <CourseSelection {...content} />;
  }
};

const buildButton = (type, step) => {
  const {label, onClick} = step;
  const buttonProps = {
    type: type === 'next' ? 'primary' : 'secondary',
    'aria-label': `${type} step button`,
    'data-name': `${type}-step-button`,
    icon: {
      position: type === 'next' ? 'right' : 'left',
      type: type === 'next' ? 'chevron-right' : 'chevron-left'
    },
    label,
    onClick
  };

  return <ButtonLink {...buttonProps} />;
};

const buildActionZone = (previousStep, nextStep) => {
  const previousButton = previousStep ? buildButton('previous', previousStep) : null;
  const nextButton = nextStep ? buildButton('next', nextStep) : null;
  return (
    <div className={style.actionZone}>
      <div className={style.button}>{previousButton}</div>
      <div className={style.button}>{nextButton}</div>
    </div>
  );
};

const WizardContents = props => {
  const {wizardHeader, steps, summary, content, nextStep, previousStep} = props;
  const headerView = buildHeader(wizardHeader, steps);
  const formView = buildForm(content);
  const actionView = buildActionZone(previousStep, nextStep);

  return (
    <div className={style.container}>
      <div className={style.leftSection}>
        {headerView}
        <div className={style.form}>{formView}</div>
      </div>
      <div className={style.rightSection}>
        <div className={style.stickySection}>
          <div className={style.summaryZone}>
            <WizardSummary {...summary} />
          </div>
          {actionView}
        </div>
      </div>
      <div className={style.footer}>
        <WizardSummary {...summary} />
        {actionView}
      </div>
    </div>
  );
};

WizardContents.propTypes = {
  wizardHeader: PropTypes.shape({
    title: PropTypes.string,
    onClick: PropTypes.func
  }).isRequired,
  steps: PropTypes.arrayOf(PropTypes.shape(WizardSteps.propTypes)).isRequired,
  summary: PropTypes.shape(WizardSummary.propTypes).isRequired,
  content: PropTypes.oneOf([
    PropTypes.shape({
      ...BrandForm.propTypes,
      type: 'form'
    }),
    PropTypes.shape({
      ...ContentTranslate.propTypes,
      type: 'translate'
    }),
    PropTypes.shape({
      ...OrganismSearchAndChipsResults.propTypes,
      type: 'populations'
    }),
    PropTypes.shape({
      ...CourseSelection.propTypes,
      type: 'courses'
    })
  ]).isRequired,
  previousStep: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func
  }),
  nextStep: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func
  })
};

export default WizardContents;
