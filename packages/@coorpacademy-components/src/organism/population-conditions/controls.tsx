import React, {useCallback} from 'react';
import {map} from 'lodash/fp';
import SelectMultiple from '../../molecule/select-multiple';
import Autocomplete from '../../atom/autocomplete';
import InputText from '../../atom/input-text';
import Tag from '../../atom/tag';
import ButtonLink from '../../atom/button-link';
import {Selection, ValueSelection, SelectedValue, Criterion} from './types';
import style from './controls.css';

export const SelectionControl = ({
  field,
  title,
  disabled
}: {
  field: Selection;
  title: string;
  disabled: boolean;
}) => {
  const handleChange = useCallback(
    (choice: {value: string}) => {
      if (!disabled) field.onChange(choice.value);
    },
    [disabled, field]
  );
  return (
    <SelectMultiple
      theme="coorpmanager"
      multiple={false}
      title={title}
      aria-label={title}
      options={field.options}
      placeholder={field.placeholder}
      onChange={handleChange}
      disabled={disabled}
    />
  );
};

export const ControlledCheckbox = ({
  field,
  label,
  disabled
}: {
  field: {checked: boolean; onChange(checked: boolean): void};
  label: string;
  disabled: boolean;
}) => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled) field.onChange(event.target.checked);
    },
    [disabled, field]
  );
  return (
    <label className={style.checkbox}>
      <input type="checkbox" checked={field.checked} onChange={handleChange} disabled={disabled} />
      <span>{label}</span>
    </label>
  );
};

const ValueTag = ({value, disabled}: {value: SelectedValue; disabled: boolean}) => {
  const handleRemove = useCallback(() => {
    if (!disabled) value.onRemove?.();
  }, [disabled, value]);
  return (
    <span className={style.valueTag}>
      <Tag
        type="info"
        size="L"
        label={value.label}
        removeAction={
          value.onRemove
            ? {
                label: value.removeLabel,
                onClick: handleRemove,
                disabled
              }
            : undefined
        }
      />
      {value.missingLabel ? <span className={style.missing}>{value.missingLabel}</span> : null}
    </span>
  );
};

const ValueAutocomplete = ({
  field,
  title,
  retryLabel,
  disabled
}: {
  field: ValueSelection;
  title: string;
  retryLabel: string;
  disabled: boolean;
}) => {
  const handleSearch = useCallback(
    ({value, reason}: {value: string; reason: string}) => {
      if (!disabled && (reason === 'input-changed' || reason === 'input-focused'))
        field.onSearch(value);
    },
    [disabled, field]
  );
  const handleSelect = useCallback(
    ({suggestion}: {suggestion: {value: string}}) => {
      if (!disabled) field.onSelect(suggestion.value);
    },
    [disabled, field]
  );
  const handleRetry = useCallback(() => {
    if (!disabled) field.status?.onRetry?.();
  }, [disabled, field]);
  const handleLoadMore = useCallback(() => {
    if (!disabled) field.loadMore?.onClick();
  }, [disabled, field]);
  return (
    <div>
      <Autocomplete
        id={field.id}
        theme="coorpmanager"
        title={title}
        aria-label={title}
        placeholder={field.placeholder}
        value={field.query}
        suggestions={field.suggestions}
        onFetch={handleSearch}
        onSuggestionSelected={handleSelect}
        disabled={disabled}
        showSuggestionsOnFocus
        keepSuggestionsOnSelect
        focusInputOnSuggestionClick
      />
      {field.status ? (
        <div
          className={style.valueStatus}
          role={field.status.kind === 'error' ? 'alert' : 'status'}
        >
          <span>{field.status.message}</span>
          {field.status.onRetry ? (
            <ButtonLink type="text" label={retryLabel} onClick={handleRetry} disabled={disabled} />
          ) : null}
        </div>
      ) : null}
      {field.loadMore ? (
        <ButtonLink
          type="text"
          label={field.loadMore.label}
          onClick={handleLoadMore}
          disabled={disabled}
        />
      ) : null}
      <div className={style.values}>
        {map(
          value => (
            <ValueTag key={value.id} value={value} disabled={disabled} />
          ),
          field.selected
        )}
      </div>
    </div>
  );
};

export const ValueControl = ({
  field,
  title,
  retryLabel,
  disabled
}: {
  field: Criterion['value'];
  title: string;
  retryLabel: string;
  disabled: boolean;
}) => {
  const handleText = useCallback(
    (text: string) => {
      if (!disabled && field.kind === 'text') field.onChange(text);
    },
    [disabled, field]
  );
  return field.kind === 'selection' ? (
    <ValueAutocomplete field={field} title={title} retryLabel={retryLabel} disabled={disabled} />
  ) : (
    <InputText
      theme="coorpmanager"
      title={title}
      aria-label={title}
      value={field.text}
      onChange={handleText}
      disabled={disabled}
    />
  );
};
