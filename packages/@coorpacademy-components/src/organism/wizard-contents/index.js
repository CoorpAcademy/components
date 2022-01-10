import React from 'react';
import getOr from 'lodash/fp/getOr';
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
        <div className={style.headerTitle} data-name={'custom-playlist-title'}>
          {title}
        </div>
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
  const ICONS = {
    previous: {
      position: 'left',
      type: 'chevron-left'
    },
    next: {
      position: 'right',
      type: 'chevron-right'
    },
    publish: {
      position: 'left',
      type: 'publish'
    }
  };

  const {label, onClick} = step;
  const buttonProps = {
    type: type === 'previous' ? 'secondary' : 'primary',
    'aria-label': `${type} step button`,
    'data-name': `${type}-step-button`,
    icon: ICONS[type],
    label,
    onClick
  };

  return <ButtonLink {...buttonProps} />;
};

const buildActionZone = (previousStep, nextStep) => {
  const previousButton = previousStep ? buildButton('previous', previousStep) : null;
  const nextStepType = getOr('next', 'type', nextStep);
  const nextButton = nextStep ? buildButton(nextStepType, nextStep) : null;
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
        <div className={style.summaryFooter}>
          <WizardSummary {...summary} />
        </div>
        <div className={style.actionFooter}>{actionView}</div>
      </div>
    </div>
  );
};

WizardContents.propTypes = {
  wizardHeader: PropTypes.shape({
    title: PropTypes.string,
    onClick: PropTypes.func
  }).isRequired,
  steps: WizardSteps.propTypes.steps,
  summary: PropTypes.shape({
    ...WizardSummary.propTypes
  }).isRequired,
  content: PropTypes.oneOfType([
    PropTypes.shape({
      ...BrandForm.propTypes,
      type: PropTypes.oneOf(['form'])
    }),
    PropTypes.shape({
      ...ContentTranslate.propTypes,
      type: PropTypes.oneOf(['translate'])
    }),
    PropTypes.shape({
      ...OrganismSearchAndChipsResults.propTypes,
      type: PropTypes.oneOf(['populations'])
    }),
    PropTypes.shape({
      ...CourseSelection.propTypes,
      type: PropTypes.oneOf(['courses'])
    })
  ]),
  previousStep: PropTypes.shape({
    label: PropTypes.string,
    onClick: PropTypes.func
  }),
  nextStep: PropTypes.shape({
    type: PropTypes.oneOf(['next', 'publish']),
    label: PropTypes.string,
    onClick: PropTypes.func
  })
};

export default WizardContents;
