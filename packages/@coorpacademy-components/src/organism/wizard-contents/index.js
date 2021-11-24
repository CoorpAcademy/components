import React from 'react';
import PropTypes from 'prop-types';
import ButtonLinkIconOnly from '../../atom/button-link-icon-only';
import WizardSteps from '../../atom/wizard-steps';
import WizardSummary from '../../molecule/wizard-summary';
import BrandForm from '../brand-form';
import ContentTranslate from '../content-translation';
import OrganismSearchAndChipsResults from '../search-and-chips-results';
import CourseSelection from '../course-selection';

const buildHeader = (wizardHeader, steps) => {
  const {title, onClick} = wizardHeader;

  const buttonCloseIcon = {
    size: 'small',
    'data-name': 'default-button',
    'aria-label': 'aria button',
    icon: 'close',
    onClick
  };

  return (
    <div>
      <div>
        <ButtonLinkIconOnly {...buttonCloseIcon} />
      </div>
      <div>{title}</div>
    </div>
  );
};

const WizardContents = props => {
  const {wizardHeader, steps, summary, content} = props;
  const headerView = buildHeader(wizardHeader, steps);

  return <div>{headerView}</div>;
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
