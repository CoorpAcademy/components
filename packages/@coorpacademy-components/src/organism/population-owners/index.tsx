import React, {useCallback} from 'react';
import {some} from 'lodash/fp';
import InputText from '../../atom/input-text';
import ButtonLink from '../../atom/button-link';
import Loader from '../../atom/loader';
import Icon from '../../atom/icon';
import PersonTags from '../../molecule/person-tags';
import {PopulationOwnersProps, propTypes} from './types';
import style from './style.css';

const PopulationOwners = ({model, disabled = false, translate}: PopulationOwnersProps) => {
  const {onSearch, onAddMe, onRetry, selfAvailable, selfSelected} = model;
  const handleSearch = useCallback(
    (query: string) => {
      if (!disabled) onSearch(query);
    },
    [disabled, onSearch]
  );
  const handleAddMe = useCallback(() => {
    if (!disabled && selfAvailable && !selfSelected) onAddMe();
  }, [disabled, selfAvailable, selfSelected, onAddMe]);
  const handleRetry = useCallback(() => {
    if (!disabled) onRetry?.();
  }, [disabled, onRetry]);
  const noResults =
    model.query.trim().length > 0 &&
    !model.loading &&
    !model.error &&
    model.suggestions.length === 0;
  const hasDeactivated = some(
    user => user.deactivated || user.status === 'deactivated',
    model.selected
  );

  return (
    <section className={style.container} aria-label={translate('population_owners_title')}>
      <h3>{translate('population_owners_title')}</h3>
      <p className={style.description}>{translate('population_owners_description')}</p>
      {model.warningCount > 0 ? (
        <p className={style.warning} role="status" data-name="owners-warning">
          <span aria-hidden="true">
            <Icon iconName="eye-slash" iconColor="currentColor" />
          </span>
          {translate(
            model.warningCount === 1
              ? 'population_owners_warning'
              : 'population_owners_warning_plural',
            {count: model.warningCount}
          )}
        </p>
      ) : null}
      <div className={style.toolbar}>
        <div className={style.search}>
          <InputText
            theme="coorpmanager"
            title={translate('population_owners_search')}
            aria-label={translate('population_owners_search')}
            value={model.query}
            onChange={handleSearch}
            disabled={disabled}
          />
        </div>
        <ButtonLink
          type="primary"
          label={translate(
            model.selfSelected ? 'population_owners_added_me' : 'population_owners_add_me'
          )}
          onClick={handleAddMe}
          disabled={disabled || !model.selfAvailable || model.selfSelected}
        />
      </div>
      {!model.selfAvailable ? (
        <p className={style.description}>{translate('population_owners_self_unavailable')}</p>
      ) : null}
      {model.loading ? (
        <div className={style.loading} role="status">
          <Loader theme="coorpmanager" />
          {translate('population_owners_loading')}
        </div>
      ) : null}
      {model.error ? (
        <div className={style.error} role="alert">
          {translate('population_owners_search_error')}
          {model.onRetry ? (
            <ButtonLink
              type="secondary"
              label={translate('population_owners_retry')}
              onClick={handleRetry}
              disabled={disabled}
            />
          ) : null}
        </div>
      ) : null}
      {!model.loading && !model.error && model.suggestions.length > 0 ? (
        <div className={style.suggestions}>
          <PersonTags
            users={model.suggestions}
            translate={translate}
            mode="select"
            disabled={disabled}
            aria-label={translate('population_owners_suggestions')}
          />
        </div>
      ) : null}
      {noResults ? (
        <div className={style.noResults} role="status">
          <span aria-hidden="true">
            <Icon
              iconName="magnifying-glass"
              iconColor="currentColor"
              size={{faSize: 24, wrapperSize: 48}}
            />
          </span>
          <strong>{translate('population_owners_no_results_title')}</strong>
          <p>{translate('population_owners_no_results_message')}</p>
        </div>
      ) : null}
      <PersonTags
        users={model.selected}
        translate={translate}
        mode="remove"
        disabled={disabled}
        aria-label={translate('population_owners_selected')}
      />
      {hasDeactivated ? (
        <p className={style.legend}>
          <span aria-hidden="true">
            <Icon iconName="eye-slash" iconColor="currentColor" />
          </span>
          {translate('population_owners_deactivated_legend')}
        </p>
      ) : null}
      {model.resolutionError ? (
        <div className={style.error} role="alert">
          {translate('population_owners_resolution_error')}
          {model.onRetry ? (
            <ButtonLink
              type="secondary"
              label={translate('population_owners_retry')}
              onClick={handleRetry}
              disabled={disabled}
            />
          ) : null}
        </div>
      ) : null}
    </section>
  );
};

PopulationOwners.propTypes = propTypes;
export default PopulationOwners;
