import React, {useCallback} from 'react';
import classnames from 'classnames';
import {map} from 'lodash/fp';
import Tag from '../../atom/tag';
import Icon from '../../atom/icon';
import ButtonLink from '../../atom/button-link';
import {Person, PersonTagsProps, propTypes} from './types';
import style from './style.css';

export const getPersonStatus = (person: Person) =>
  person.deactivated ? 'deactivated' : person.status || (person.unresolved ? 'unknown' : 'ok');

const PersonTag = ({
  person,
  translate,
  mode,
  disabled
}: {
  person: Person;
  translate: PersonTagsProps['translate'];
  mode: PersonTagsProps['mode'];
  disabled?: boolean;
}) => {
  const {onSelect, onRemove} = person;
  const status = getPersonStatus(person);
  const unavailable = status !== 'ok';
  const handleSelect = useCallback(() => {
    if (!disabled && !unavailable) onSelect?.();
  }, [disabled, unavailable, onSelect]);
  const handleRemove = useCallback(() => {
    if (!disabled) onRemove?.();
  }, [disabled, onRemove]);
  const identity = (
    <span className={style.identity}>
      <span className={style.heading}>
        <strong>{person.name}</strong>
        {person.current ? <Tag label={translate('population_owners_you')} type="success" /> : null}
        {unavailable ? (
          <Tag
            label={translate(`population_owners_${status}`)}
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
        unavailable && style.unresolved,
        status === 'deactivated' && style.deactivated
      )}
      data-name="person-tag"
    >
      {mode === 'select' ? (
        <button
          className={style.select}
          type="button"
          onClick={handleSelect}
          disabled={disabled || unavailable || !person.onSelect}
          aria-label={translate('population_owners_select', {login: person.login})}
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
          aria-label={translate('population_owners_remove', {login: person.login})}
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
  translate,
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
            translate={translate}
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
      <strong>{translate('population_owners_empty_title')}</strong>
      <p>{translate('population_owners_empty_message')}</p>
    </div>
  );

PersonTags.propTypes = propTypes;
export default PersonTags;
