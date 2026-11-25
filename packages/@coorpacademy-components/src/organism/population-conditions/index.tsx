import React, {useCallback} from 'react';
import ButtonLink from '../../atom/button-link';
import Icon from '../../atom/icon';
import Tag from '../../atom/tag';
import MembershipSummary from '../../molecule/membership-summary';
import {COLORS} from '../../variables/colors';
import {ControlledCheckbox, SelectionControl, ValueControl} from './controls';
import {Criterion, PreservedCriterion, PopulationConditionsProps, propTypes} from './types';
import style from './style.css';

const ConditionRow = ({
  row,
  disabled,
  labels
}: {
  row: Criterion | PreservedCriterion;
  disabled: boolean;
  labels: PopulationConditionsProps['labels'];
}) => {
  const handleRemove = useCallback(() => {
    if (!disabled && !('preserved' in row)) row.onRemove?.();
  }, [disabled, row]);
  if ('preserved' in row)
    return (
      <div className={style.preserved}>
        <Tag type="success" size="L" label={row.preserved.field} />
        <pre>{row.preserved.rawValue}</pre>
        <p>{row.preserved.message}</p>
      </div>
    );
  return (
    <div className={style.row} data-name="condition-row">
      <SelectionControl field={row.field} title={labels.field} disabled={disabled} />
      <SelectionControl field={row.comparison} title={labels.comparison} disabled={disabled} />
      <div className={style.valueColumn}>
        <ValueControl
          field={row.value}
          title={labels.value}
          retryLabel={labels.retry}
          disabled={disabled}
        />
        {row.caseSensitive ? (
          <ControlledCheckbox
            field={row.caseSensitive}
            label={labels.caseSensitive}
            disabled={disabled}
          />
        ) : null}
      </div>
      {row.onRemove ? (
        <ButtonLink
          type="text"
          className={style.remove}
          aria-label={row.removeLabel}
          icon={{type: 'bin', position: 'left'}}
          onClick={handleRemove}
          disabled={disabled}
        />
      ) : null}
    </div>
  );
};

const Action = ({
  action,
  disabled,
  label,
  group = false
}: {
  action(): void;
  disabled: boolean;
  label: string;
  group?: boolean;
}) => {
  const handleClick = useCallback(() => {
    if (!disabled) action();
  }, [disabled, action]);
  return (
    <ButtonLink
      type={group ? 'secondary' : 'primary'}
      label={label}
      onClick={handleClick}
      disabled={disabled}
      className={group ? style.addGroup : style.addCondition}
      icon={{position: 'left', faIcon: {name: 'plus', size: 16, color: 'currentColor'}}}
      customStyle={
        group ? {color: COLORS.purple_700, backgroundColor: COLORS.purple_100} : undefined
      }
      hoverColor={COLORS.white}
      hoverBackgroundColor={group ? COLORS.purple_700 : undefined}
    />
  );
};

const PopulationConditions = ({model, labels, disabled = false}: PopulationConditionsProps) => (
  <section className={style.container} aria-label={labels.title}>
    <h3>{labels.title}</h3>
    <p className={style.description}>{labels.description}</p>
    {model.groups.length === 0 ? (
      <div className={style.empty}>
        <span aria-hidden="true">
          <Icon iconName="filter" iconColor="currentColor" size={{faSize: 24, wrapperSize: 48}} />
        </span>
        <strong>{labels.emptyTitle}</strong>
        <p>{labels.emptyMessage}</p>
      </div>
    ) : null}
    {model.groups.map((group, groupIndex: number) => (
      <React.Fragment key={group.id}>
        {groupIndex > 0 ? (
          <div className={style.join}>
            <Tag type="advanced" size="L" label={model.summary.labels.or} />
          </div>
        ) : null}
        <fieldset className={style.group} disabled={disabled}>
          <legend>{labels.groupTitle}</legend>
          {group.rows.map((row, rowIndex: number) => (
            <React.Fragment key={row.id}>
              {rowIndex > 0 ? (
                <div className={style.join}>
                  <Tag type="advanced" size="L" label={model.summary.labels.and} />
                </div>
              ) : null}
              <ConditionRow row={row} labels={labels} disabled={disabled} />
            </React.Fragment>
          ))}
          <div className={style.groupActions}>
            {group.onAdd ? (
              <Action label={labels.addCondition} action={group.onAdd} disabled={disabled} />
            ) : null}
            {group.onRemove ? (
              <GroupRemoval action={group.onRemove} label={group.removeLabel} disabled={disabled} />
            ) : null}
          </div>
        </fieldset>
      </React.Fragment>
    ))}
    <div className={style.addGroupRow}>
      <Action group label={labels.addGroup} action={model.onAddGroup} disabled={disabled} />
    </div>
    <fieldset className={style.support} disabled={disabled}>
      <legend>{labels.supportTitle}</legend>
      <ControlledCheckbox
        field={model.includeSupport}
        label={labels.supportLabel}
        disabled={disabled}
      />
      <p className={style.description}>{labels.supportDescription}</p>
    </fieldset>
    <div className={style.summary}>
      <h4>{labels.summaryTitle}</h4>
      <MembershipSummary {...model.summary} />
    </div>
  </section>
);

const GroupRemoval = ({
  action,
  label,
  disabled
}: {
  action(): void;
  label?: string;
  disabled: boolean;
}) => {
  const handleRemove = useCallback(() => {
    if (!disabled) action();
  }, [disabled, action]);
  return (
    <ButtonLink
      type="text"
      aria-label={label}
      className={style.remove}
      icon={{type: 'bin', position: 'left'}}
      onClick={handleRemove}
      disabled={disabled}
    />
  );
};

PopulationConditions.propTypes = propTypes;
export default PopulationConditions;
