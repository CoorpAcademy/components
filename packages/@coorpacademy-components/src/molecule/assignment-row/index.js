import React from 'react';
import PropTypes from 'prop-types';
import AssignmentStatusTag from '../assignment-status-tag';
import ProgressBar from '../progress-bar';
import ButtonLink from '../../atom/button-link';
import style from './style.css';

const completionPropType = (props, propName, componentName) => {
  const completion = props[propName];
  if (Number.isFinite(completion) && completion >= 0 && completion <= 100) return null;
  return new Error(
    `Invalid prop ${propName} supplied to ${componentName}: expected a finite number from 0 to 100.`
  );
};

const AssignmentRow = ({
  title,
  status,
  statusLabel,
  audienceSummary,
  dateRange,
  completion,
  sync,
  actions = [],
  'data-name': dataName = 'assignment-row'
}) => {
  const actionButtons = actions.map(({label, onClick, disabled, danger}, index) => (
    <ButtonLink
      key={`${label}-${index}`}
      label={label}
      content={<span>{label}</span>}
      type={danger ? 'dangerous' : 'tertiary'}
      disabled={disabled}
      onClick={onClick}
    />
  ));

  return (
    <div className={style.wrapper} data-name={dataName}>
      <div className={style.heading}>
        <div className={style.title} data-name="assignment-title">
          {title}
        </div>
        <div className={style.status} data-name="assignment-status">
          <AssignmentStatusTag status={status} label={statusLabel} />
        </div>
      </div>
      <div className={style.details}>
        <div data-name="assignment-audience">{audienceSummary}</div>
        <div data-name="assignment-dates">{dateRange}</div>
      </div>
      <div
        className={style.completion}
        data-name="assignment-completion"
        role="progressbar"
        aria-label={title}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={completion}
      >
        <ProgressBar value={completion} max={100} displayInfo={false} />
        <span>{`${completion}%`}</span>
      </div>
      <div className={style.sync} data-name="assignment-sync" data-sync-state={sync.state}>
        <span>{sync.label}</span>
        {sync.message ? <span>{sync.message}</span> : null}
      </div>
      {actions.length > 0 ? (
        <div className={style.actions} data-name="assignment-actions">
          {actionButtons}
        </div>
      ) : null}
    </div>
  );
};

AssignmentRow.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.string,
  statusLabel: PropTypes.string.isRequired,
  audienceSummary: PropTypes.string.isRequired,
  dateRange: PropTypes.string.isRequired,
  completion: completionPropType,
  sync: PropTypes.shape({
    state: PropTypes.oneOf(['running', 'done', 'error']).isRequired,
    label: PropTypes.string.isRequired,
    message: PropTypes.string
  }).isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
      disabled: PropTypes.bool,
      danger: PropTypes.bool
    })
  ),
  'data-name': PropTypes.string
};

export default AssignmentRow;
