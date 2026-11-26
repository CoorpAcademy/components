import React, {useCallback} from 'react';
import classnames from 'classnames';
import {map} from 'lodash/fp';
import Tag from '../../atom/tag';
import Icon from '../../atom/icon';
import ButtonLink from '../../atom/button-link';
import {Person, PersonTagsProps, propTypes} from './types';
import style from './style.css';

const STATUS_TYPES = {
  ok: 'info',
  deactivated: 'failure',
  unknown: 'warning',
  ambiguous: 'warning'
} as const;
const COMPACT_STYLE = {
  padding: '6px 10px',
  maxWidth: '100%',
  overflowWrap: 'anywhere',
  textAlign: 'left'
};

const PersonTag = ({
  person,
  labels,
  mode,
  disabled,
  appearance
}: {
  person: Person;
  labels: PersonTagsProps['labels'];
  mode: PersonTagsProps['mode'];
  disabled?: boolean;
  appearance: PersonTagsProps['appearance'];
}) => {
  const {onSelect, onRemove} = person;
  const {status} = person;
  const hasStatus = status !== 'ok';
  const selectionDisabled = disabled || person.selectDisabled;
  const handleSelect = useCallback(() => {
    if (!selectionDisabled) onSelect?.();
  }, [selectionDisabled, onSelect]);
  const handleRemove = useCallback(() => {
    if (!disabled) onRemove?.();
  }, [disabled, onRemove]);
  if (appearance === 'pill' && mode === 'display') {
    const label = [
      person.name,
      person.login,
      person.current && labels.you,
      hasStatus && labels[status]
    ]
      .filter(Boolean)
      .join(' · ');
    return (
      <li className={style.pill} data-name="person-tag">
        <Tag
          label={label}
          type={person.current ? 'success' : STATUS_TYPES[status]}
          customStyle={COMPACT_STYLE}
          icon={status === 'deactivated' ? {iconName: 'eye-slash', preset: 's'} : undefined}
        />
      </li>
    );
  }
  const identity = (
    <span className={style.identity}>
      <span className={style.heading}>
        <strong>{person.name}</strong>
        {person.current ? <Tag label={labels.you} type="success" /> : null}
        {hasStatus ? (
          <Tag
            label={labels[status]}
            type="warning"
            icon={status === 'deactivated' ? {iconName: 'eye-slash', preset: 's'} : undefined}
          />
        ) : null}
      </span>
      <span className={style.login}>{person.login}</span>
    </span>
  );
  return (
    <li
      className={classnames(
        style.person,
        person.current && style.current,
        hasStatus && style.unresolved,
        status === 'deactivated' && style.deactivated
      )}
      data-name="person-tag"
    >
      {mode === 'select' ? (
        <button
          className={style.select}
          type="button"
          onClick={handleSelect}
          disabled={selectionDisabled || !person.onSelect}
          aria-label={person.selectAriaLabel}
        >
          {identity}
        </button>
      ) : (
        identity
      )}
      {mode === 'remove' && person.onRemove ? (
        <ButtonLink
          type="text"
          className={style.remove}
          aria-label={person.removeAriaLabel}
          icon={{position: 'left', faIcon: {name: 'xmark', size: 16, color: 'currentColor'}}}
          onClick={handleRemove}
          disabled={disabled}
        />
      ) : null}
    </li>
  );
};

const PersonTags = ({
  users,
  labels,
  mode = 'display',
  appearance = 'card',
  disabled = false,
  'aria-label': ariaLabel
}: PersonTagsProps) =>
  users.length > 0 ? (
    <ul
      className={classnames(
        style.tags,
        appearance === 'compact' && style.compact,
        appearance === 'pill' && mode === 'display' && style.pillList
      )}
      aria-label={ariaLabel}
    >
      {map(
        person => (
          <PersonTag
            key={person.id}
            person={person}
            labels={labels}
            mode={mode}
            disabled={disabled}
            appearance={appearance}
          />
        ),
        users
      )}
    </ul>
  ) : (
    <div className={style.empty}>
      <span aria-hidden="true" className={style.illustration}>
        <Icon iconName="users" iconColor="currentColor" size={{faSize: 24, wrapperSize: 48}} />
      </span>
      <strong>{labels.emptyTitle}</strong>
      <p>{labels.emptyMessage}</p>
    </div>
  );

PersonTags.propTypes = propTypes;
export default PersonTags;
