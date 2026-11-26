import React, {useCallback, useRef} from 'react';
import {escape, map} from 'lodash/fp';
import ButtonLink from '../../atom/button-link';
import InputText from '../../atom/input-text';
import SelectMultiple from '../../molecule/select-multiple';
import Icon from '../../atom/icon';
import Loader from '../../atom/loader';
import ListItem from '../list-item';
import {COLORS} from '../../variables/colors';
import {PopulationListProps, PopulationRow, propTypes} from './types';
import {PopulationSubtitle, PopulationDetails} from './details';
import {PopulationConfirmation} from './confirmation';
import {usePopulationPagination} from './pagination';
import {ReadButton} from './read-button';
import style from './style.css';

const PopulationList = ({model, labels, confirmation, disabled = false}: PopulationListProps) => {
  const heading = useRef<HTMLHeadingElement>(null);
  const busy = Boolean(disabled || model.loading || model.transitioning || confirmation?.busy);
  const locked = busy || Boolean(confirmation);
  const {sentinel, request, blocked} = usePopulationPagination(model, locked);
  const onSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      if (!locked) model.onSubmitSearch();
    },
    [locked, model]
  );
  const onSearch = useCallback(
    (value: string) => {
      if (!locked) model.onSearch(value);
    },
    [locked, model]
  );
  const onTypeChange = useCallback(
    (choice: {value: string}) => {
      if (!locked) model.filter.onChange(choice.value);
    },
    [locked, model]
  );
  const guard =
    (action: () => void, actionDisabled = false) =>
    () => {
      if (!locked && !actionDisabled) action();
    };
  const renderRow = (row: PopulationRow) => {
    const lifecycle = row.archived ? row.onReactivate : row.onArchive;
    return (
      <li key={row.id} className={style.card}>
        <ListItem
          wrapContent
          title={escape(row.title)}
          titleTags={[row.typeTag]}
          leftIcon={{iconName: 'users', iconColor: COLORS.cm_primary_blue, preset: 'xl'}}
          subtitle={<PopulationSubtitle row={row} labels={labels} />}
          details={<PopulationDetails row={row} labels={labels} />}
          buttonLink={{
            type: 'secondary',
            label: row.primaryAction.label,
            icon: {
              position: 'left',
              faIcon: {
                name: row.archived ? 'eye' : 'pen-to-square',
                size: 14,
                color: 'currentColor'
              }
            },
            onClick: guard(row.primaryAction.onClick, row.primaryAction.disabled),
            disabled: locked || row.primaryAction.disabled
          }}
          secondButtonLink={
            lifecycle
              ? {
                  type: 'secondary',
                  label: row.archived ? labels.reactivate : labels.archive,
                  icon: {
                    position: 'left',
                    faIcon: {
                      name: row.archived ? 'rotate-left' : 'box-archive',
                      size: 14,
                      color: 'currentColor'
                    }
                  },
                  disabled: locked,
                  onClick: guard(lifecycle)
                }
              : undefined
          }
          data-name={`population-${row.id}`}
        />
      </li>
    );
  };
  return (
    <section
      className={style.container}
      aria-label={labels.title}
      aria-busy={Boolean(model.loading || model.loadingMore || model.transitioning)}
    >
      <div className={style.header}>
        <div>
          <h1 ref={heading} tabIndex={-1}>
            {labels.title}
          </h1>
          <p>{labels.description}</p>
        </div>
        <ButtonLink
          type="primary"
          label={labels.create}
          onClick={guard(model.onCreate)}
          disabled={locked}
        />
      </div>
      <form className={style.search} onSubmit={onSubmit}>
        <InputText
          theme="coorpmanager"
          title={labels.searchPlaceholder}
          value={model.search}
          aria-label={labels.search}
          placeholder={labels.searchPlaceholder}
          onChange={onSearch}
          disabled={locked}
        />
        <SelectMultiple
          multiple={false}
          theme="coorpmanager"
          title={labels.typeFilter}
          aria-label={labels.typeFilter}
          options={map(
            option => ({
              value: option.value,
              name: option.label,
              selected: option.value === model.filter.value
            }),
            model.filter.options
          )}
          onChange={onTypeChange}
          disabled={locked}
        />
        <ButtonLink
          type="secondary"
          label={labels.submitSearch}
          onClick={guard(model.onSubmitSearch)}
          disabled={locked}
        />
      </form>
      {model.countsError ? (
        <div className={style.error} role="alert">
          <span>{model.countsError.message}</span>
          {model.countsError.retry ? (
            <ReadButton action={model.countsError.retry} disabled={locked} />
          ) : null}
        </div>
      ) : null}
      {model.lifecycleError ? (
        <p className={style.error} role="alert">
          {model.lifecycleError}
        </p>
      ) : null}
      {model.error ? (
        <div className={style.error} role="alert">
          <span>{model.error.message}</span>
          {model.error.retry ? <ReadButton action={model.error.retry} disabled={locked} /> : null}
        </div>
      ) : null}
      {model.resultLabel ? <p className={style.result}>{model.resultLabel}</p> : null}
      {model.rows.length > 0 ? (
        <ul className={style.list} aria-label={labels.list}>
          {map(renderRow, model.rows)}
        </ul>
      ) : null}
      {model.rows.length === 0 && !model.loading && !model.error ? (
        <div className={style.empty}>
          <Icon
            iconName="users"
            iconColor={COLORS.cm_primary_blue}
            size={{faSize: 28, wrapperSize: 56}}
          />
          <strong>{labels.emptyTitle}</strong>
          <p>{labels.emptyMessage}</p>
        </div>
      ) : null}
      {model.loading || model.loadingMore ? (
        <div className={style.loading} role="status">
          <Loader theme="coorpmanager" />
          <span>{model.loadingMore ? labels.loadingMore : labels.loading}</span>
        </div>
      ) : null}
      {model.moreError ? (
        <p role="alert" className={style.error}>
          {model.moreError}
        </p>
      ) : null}
      <div ref={sentinel} aria-hidden="true" />
      {model.hasMore ? (
        <div className={style.more}>
          <ButtonLink
            type="secondary"
            label={model.moreError ? labels.retry : labels.loadMore}
            onClick={request}
            disabled={blocked}
          />
        </div>
      ) : null}
      {model.evaluatedAtLabel ? <p className={style.result}>{model.evaluatedAtLabel}</p> : null}
      {confirmation ? <PopulationConfirmation model={confirmation} fallback={heading} /> : null}
    </section>
  );
};
PopulationList.propTypes = propTypes;
export default PopulationList;
