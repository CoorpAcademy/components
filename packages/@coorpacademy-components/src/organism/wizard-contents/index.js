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
import CourseSections from '../../molecule/course-sections';
import BrandTabs from '../../molecule/brand-tabs';
import BulletPointMenuButton from '../../molecule/bullet-point-menu-button';
import RewardsForm from '../rewards-form';
import ExpandibleActionableErrorsTable from '../../molecule/expandible-actionable-table';
import BulkInfos from '../../molecule/bulk-infos';
import style from './style.css';

const buildHeader = (wizardHeader, actions, steps, tabs) => {
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
        <div className={style.titleWrapper}>
          <ButtonLinkIconOnly {...buttonCloseIcon} />
          <div className={style.headerTitle} data-name={'content-title'}>
            {title}
          </div>
        </div>
        {actions ? (
          <div className={style.actionsWrapper}>
            <BulletPointMenuButton {...actions.bulletPointMenuButton} />
            <div className={style.buttonLink}>
              <ButtonLink {...actions.firstButtonLink} />
            </div>
            <div className={style.buttonLink}>
              <ButtonLink {...actions.secondButtonLink} />
            </div>
          </div>
        ) : null}
      </div>
      {steps ? <WizardSteps steps={steps} /> : null}
      {tabs ? (
        <div className={style.tabs}>
          <BrandTabs type="light" tabs={tabs} />
        </div>
      ) : null}
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
    case 'organize-courses':
      return <CourseSections {...content} />;
    case 'rewards':
      return <RewardsForm {...content} />;
    case 'expandible-table':
      return <ExpandibleActionableErrorsTable {...content} />;
    case 'bulk-infos':
      return <BulkInfos {...content} />;
  }
};

const buildButton = (type, step, side) => {
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
    'data-name': `${type}-step-button-${side}`,
    icon: ICONS[type],
    label,
    onClick
  };

  return <ButtonLink {...buttonProps} />;
};

const buildActionZone = (previousStep, nextStep, side) => {
  const previousButton = previousStep ? buildButton('previous', previousStep, side) : null;
  const nextStepType = getOr('next', 'type', nextStep);
  const nextButton = nextStep ? buildButton(nextStepType, nextStep, side) : null;
  return (
    <div className={style.actionZone}>
      <div className={style.button}>{previousButton}</div>
      <div className={style.button}>{nextButton}</div>
    </div>
  );
};

const THEMES = {
  'no-summary': {
    container: style.containerWithoutSummary,
    footer: style.footerWithoutSummary,
    actionFooter: style.actionFooterWithoutSummary,
    leftSection: style.leftSectionWithoutSummary
  },
  summary: {
    container: style.container,
    footer: style.footer,
    actionFooter: style.actionFooter,
    leftSection: style.leftSection
  }
};

const getTheme = summary => (summary ? 'summary' : 'no-summary');

const WizardContents = props => {
  const {isLoading, wizardHeader, actions, steps, tabs, summary, content, nextStep, previousStep} =
    props;
  const headerView = buildHeader(wizardHeader, actions, steps, tabs);
  const formView = buildForm({...content, isLoading});
  const rightActionView = buildActionZone(previousStep, nextStep, 'right');
  const footerActionView = buildActionZone(previousStep, nextStep, 'footer');
  const currentStyle = THEMES[getTheme(summary)];

  const summaryWrapper = (
    <div className={style.rightSection} data-name="summary-right-section">
      <div className={style.stickySection}>
        <div className={style.summaryZone} data-name="summary-zone">
          <WizardSummary {...summary} side={'right'} />
        </div>
        {rightActionView}
      </div>
    </div>
  );

  return (
    <div className={currentStyle.container} data-name="content-summary">
      <div className={currentStyle.leftSection}>
        {headerView}
        <div className={style.form}>{formView}</div>
      </div>
      {summary ? summaryWrapper : null}
      <div className={currentStyle.footer} data-name="footer-section">
        {summary ? (
          <div className={style.summaryFooter}>
            <WizardSummary {...summary} side={'footer'} />
          </div>
        ) : null}
        <div className={currentStyle.actionFooter}>{footerActionView}</div>
      </div>
    </div>
  );
};

WizardContents.propTypes = {
  isLoading: PropTypes.bool,
  wizardHeader: PropTypes.shape({
    title: PropTypes.string,
    onClick: PropTypes.func
  }).isRequired,
  actions: PropTypes.shape({
    bulletPointMenuButton: PropTypes.shape({
      buttonAriaLabel: PropTypes.string,
      menuAriaLabel: PropTypes.string,
      buttons: PropTypes.arrayOf(
        PropTypes.shape({
          'data-name': PropTypes.string,
          label: PropTypes.string,
          type: PropTypes.string,
          onClick: PropTypes.func
        })
      ),
      onClick: PropTypes.func
    }),
    firstButtonLink: PropTypes.shape(ButtonLink.propTypes),
    secondButtonLink: PropTypes.shape(ButtonLink.propTypes)
  }),
  steps: WizardSteps.propTypes.steps,
  tabs: BrandTabs.propTypes.tabs,
  summary: PropTypes.shape({
    ...WizardSummary.propTypes
  }),
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
    }),
    PropTypes.shape({
      ...CourseSections.propTypes,
      type: PropTypes.oneOf(['organize-courses'])
    }),
    PropTypes.shape({
      ...RewardsForm.propTypes,
      type: PropTypes.oneOf(['rewards'])
    }),
    PropTypes.shape({
      ...ExpandibleActionableErrorsTable.propTypes,
      type: PropTypes.oneOf(['expandible-table'])
    }),
    PropTypes.shape({
      ...BulkInfos.propTypes,
      type: PropTypes.oneOf(['bulk-infos'])
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
