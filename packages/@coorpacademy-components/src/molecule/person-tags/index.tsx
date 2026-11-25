import React, {useCallback} from 'react';
import classnames from 'classnames';
import {map} from 'lodash/fp';
import Tag from '../../atom/tag';
import Icon from '../../atom/icon';
import ButtonLink from '../../atom/button-link';
import {Person, PersonTagsProps, propTypes} from './types';
import style from './style.css';

const PersonTag = ({
  person,
  labels,
  mode,
  disabled
}: {
  person: Person;
  labels: PersonTagsProps['labels'];
  mode: PersonTagsProps['mode'];
  disabled?: boolean;
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
  disabled = false,
  'aria-label': ariaLabel
}: PersonTagsProps) =>
  users.length > 0 ? (
    <ul className={style.tags} aria-label={ariaLabel}>
      {map(
        person => (
          <PersonTag
            key={person.id}
            person={person}
            labels={labels}
            mode={mode}
            disabled={disabled}
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
