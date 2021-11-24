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

const WizardContents = props => {
  const {wizardHeader, steps, summary, content, nextStep} = props;
  const headerView = buildHeader(wizardHeader, steps);

  const nextStepButton = {
    type: 'primary',
    label: nextStep.label,
    'aria-label': 'next step button',
    'data-name': 'next-step-button',
    icon: {
      position: 'left',
      type: 'chevron-left'
    },
    onClick: nextStep.onClick
  };

  return (
    <div className={style.container}>
      <div className={style.content}>{headerView}</div>
      <div className={style.desktopRight}>
        <div className={style.summaryZone}>
          <WizardSummary {...summary} />
        </div>
        <div className={style.actionZone}>
          <ButtonLink {...nextStepButton} />
        </div>
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
