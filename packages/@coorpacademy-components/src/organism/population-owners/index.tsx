import React, {useCallback} from 'react';
import InputText from '../../atom/input-text';
import ButtonLink from '../../atom/button-link';
import Loader from '../../atom/loader';
import Icon from '../../atom/icon';
import PersonTags from '../../molecule/person-tags';
import {PopulationOwnersProps, propTypes} from './types';
import style from './style.css';

const OwnerError = ({
  message,
  retryLabel,
  onRetry,
  disabled
}: {
  message: string;
  retryLabel: string;
  onRetry?: () => void;
  disabled: boolean;
}) => (
  <div className={style.error} role="alert">
    {message}
    {onRetry ? (
      <ButtonLink type="secondary" label={retryLabel} onClick={onRetry} disabled={disabled} />
    ) : null}
  </div>
);

const PopulationOwners = ({model, disabled = false, labels}: PopulationOwnersProps) => {
  const {onSearch, onAddMe, onRetry, addMe} = model;
  const handleSearch = useCallback(
    (query: string) => {
      if (!disabled) onSearch(query);
    },
    [disabled, onSearch]
  );
  const handleAddMe = useCallback(() => {
    if (!disabled && !addMe.disabled) onAddMe();
  }, [disabled, addMe.disabled, onAddMe]);
  const handleRetry = useCallback(() => {
    if (!disabled) onRetry?.();
  }, [disabled, onRetry]);
  const errorProps = {
    retryLabel: labels.retry,
    onRetry: model.onRetry ? handleRetry : undefined,
    disabled
  };

  return (
    <section className={style.container} aria-label={labels.title}>
      <h3>{labels.title}</h3>
      <p className={style.description}>{labels.description}</p>
      {model.warning ? (
        <p className={style.warning} role="status" data-name="owners-warning">
          <span aria-hidden="true">
            <Icon iconName="eye-slash" iconColor="currentColor" />
          </span>
          <span>{model.warning}</span>
        </p>
      ) : null}
      <div className={style.toolbar}>
        <div className={style.search}>
          <InputText
            theme="coorpmanager"
            title={labels.search}
            aria-label={labels.search}
            value={model.query}
            onChange={handleSearch}
            disabled={disabled}
          />
        </div>
        <ButtonLink
          type="primary"
          label={addMe.label}
          onClick={handleAddMe}
          disabled={disabled || addMe.disabled}
        />
      </div>
      {addMe.hint ? <p className={style.description}>{addMe.hint}</p> : null}
      {model.loading ? (
        <div className={style.loading} role="status">
          <Loader theme="coorpmanager" />
          {labels.loading}
        </div>
      ) : null}
      {model.error ? <OwnerError {...errorProps} message={labels.searchError} /> : null}
      {!model.loading && !model.error && model.suggestions.length > 0 ? (
        <div className={style.suggestions}>
          <PersonTags
            users={model.suggestions}
            labels={labels.people}
            mode="select"
            disabled={disabled}
            aria-label={labels.suggestions}
          />
        </div>
      ) : null}
      {model.showNoResults ? (
        <div className={style.noResults} role="status">
          <span aria-hidden="true">
            <Icon
              iconName="magnifying-glass"
              iconColor="currentColor"
              size={{faSize: 24, wrapperSize: 48}}
            />
          </span>
          <strong>{labels.noResultsTitle}</strong>
          <p>{labels.noResultsMessage}</p>
        </div>
      ) : null}
      <PersonTags
        users={model.selected}
        labels={labels.people}
        mode="remove"
        disabled={disabled}
        aria-label={labels.selected}
      />
      {model.showDeactivatedLegend ? (
        <p className={style.legend}>
          <span aria-hidden="true">
            <Icon iconName="eye-slash" iconColor="currentColor" />
          </span>
          {labels.deactivatedLegend}
        </p>
      ) : null}
      {model.resolutionError ? (
        <OwnerError {...errorProps} message={labels.resolutionError} />
      ) : null}
    </section>
  );
};

PopulationOwners.propTypes = propTypes;
export default PopulationOwners;
