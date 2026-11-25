import React, {useCallback} from 'react';
import {map, noop} from 'lodash/fp';
import classnames from 'classnames';
import RadioWithTitle from '../../atom/radio-with-title';
import SelectMultiple from '../../molecule/select-multiple';
import ButtonLink from '../../atom/button-link';
import Icon from '../../atom/icon';
import Tag from '../../atom/tag';
import Loader from '../../atom/loader';
import {COLORS} from '../../variables/colors';
import {CatalogueChip, CustomChip} from './playlists';
import {Action, Status, PopulationCatalogueAccessProps, propTypes} from './types';
import style from './style.css';

const ActionButton = ({
  action,
  label,
  disabled,
  type = 'text'
}: {
  action: Action;
  label: string;
  disabled: boolean;
  type?: 'text' | 'secondary';
}) => {
  const blocked = disabled || action.disabled;
  const handleClick = useCallback(() => {
    if (!blocked) action.onClick();
  }, [blocked, action]);
  return <ButtonLink type={type} label={label} disabled={blocked} onClick={handleClick} />;
};

const DataStatus = ({
  status,
  retry,
  disabled
}: {
  status: Status;
  retry: string;
  disabled: boolean;
}) => (
  <div
    className={classnames(style.status, status.kind === 'error' && style.error)}
    role={status.kind === 'error' ? 'alert' : 'status'}
  >
    {status.kind === 'loading' ? <Loader theme="coorpmanager" /> : null}
    <span>{status.message}</span>
    {status.onRetry ? (
      <ActionButton action={{onClick: status.onRetry}} label={retry} disabled={disabled} />
    ) : null}
  </div>
);

const EmptyState = ({title, message}: {title: string; message: string}) => (
  <div className={style.empty}>
    <span aria-hidden="true">
      <Icon iconName="list" iconColor="currentColor" size={{faSize: 24, wrapperSize: 48}} />
    </span>
    <strong>{title}</strong>
    <p>{message}</p>
  </div>
);

const PopulationCatalogueAccess = ({
  model,
  labels,
  disabled = false
}: PopulationCatalogueAccessProps) => {
  const {selection, customPlaylists} = model;
  return (
    <section className={style.container} aria-label={labels.title}>
      <h3>{labels.title}</h3>
      <p className={style.description}>{labels.description}</p>
      <div className={style.legend}>
        <Tag type="info" label={labels.catalogueLegend} />
        <Tag
          type="advanced"
          label={labels.customLegend}
          customStyle={{backgroundColor: COLORS.purple_100, color: COLORS.purple_700}}
        />
      </div>
      {model.warning ? (
        <p className={style.warning} role="status">
          <span aria-hidden="true">
            <Icon iconName="triangle-exclamation" iconColor="currentColor" />
          </span>
          {model.warning}
        </p>
      ) : null}
      {model.counts ? (
        <DataStatus status={model.counts} retry={labels.retry} disabled={disabled} />
      ) : null}
      <div className={style.modes} role="radiogroup" aria-label={labels.modes}>
        {map(
          choice => (
            <div
              key={choice.id}
              className={classnames(style.mode, choice.checked && style.selectedMode)}
            >
              <RadioWithTitle
                name={`${model.id}-access`}
                checked={choice.checked}
                disabled={disabled || choice.disabled}
                onChange={disabled || choice.disabled ? noop : choice.onChange}
                aria-label={choice.title}
                hint={choice.hint}
                title={{
                  type: 'form-group',
                  title: choice.title,
                  subtitle: choice.description,
                  subtitleSize: 'extra-small',
                  'data-name': choice.id
                }}
              />
            </div>
          ),
          model.choices
        )}
      </div>
      {selection ? (
        <div className={style.selection}>
          <p className={style.count} role="status">
            {selection.countLabel}
          </p>
          <div className={style.toolbar}>
            <div className={style.picker}>
              <SelectMultiple
                dropdownClassName={style.menu}
                title={labels.playlists}
                placeholder={labels.search}
                aria-label={labels.playlists}
                theme="coorpmanager"
                multiple
                disabled={disabled}
                options={selection.options}
                selectionLabel={selection.selectionLabel}
                onChange={disabled ? noop : selection.onChange}
                search={{
                  value: selection.query,
                  label: labels.search,
                  emptyLabel: labels.noResults,
                  onChange: disabled ? noop : selection.onSearch
                }}
              />
            </div>
            <div className={style.actions}>
              <ActionButton
                type="secondary"
                label={labels.selectAll}
                action={selection.selectAll}
                disabled={disabled}
              />
              <ActionButton label={labels.clear} action={selection.clear} disabled={disabled} />
            </div>
          </div>
          <ul className={style.chips} aria-label={labels.selected}>
            {map(
              item => (
                <CatalogueChip key={item.id} item={item} disabled={disabled} />
              ),
              selection.selected
            )}
          </ul>
          {selection.showEmpty ? (
            <EmptyState title={labels.emptyTitle} message={labels.emptyMessage} />
          ) : null}
        </div>
      ) : null}
      <div className={style.custom}>
        <h4>{labels.customTitle}</h4>
        <p className={style.description}>{labels.customDescription}</p>
        {customPlaylists.status ? (
          <DataStatus status={customPlaylists.status} retry={labels.retry} disabled={disabled} />
        ) : null}
        <ul className={style.chips} aria-label={labels.customList}>
          {map(
            item => (
              <CustomChip key={item.id} item={item} />
            ),
            customPlaylists.items
          )}
        </ul>
        {customPlaylists.empty ? <EmptyState {...customPlaylists.empty} /> : null}
      </div>
    </section>
  );
};

PopulationCatalogueAccess.propTypes = propTypes;
export default PopulationCatalogueAccess;
