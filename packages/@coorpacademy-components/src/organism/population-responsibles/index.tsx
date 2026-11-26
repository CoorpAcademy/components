import React, {useCallback} from 'react';
import ButtonLink from '../../atom/button-link';
import Icon from '../../atom/icon';
import Loader from '../../atom/loader';
import Tag from '../../atom/tag';
import PersonTags from '../../molecule/person-tags';
import {PopulationResponsiblesProps, ResponsibleAction, propTypes} from './types';
import style from './style.css';

const ReadAction = ({action, disabled}: {action: ResponsibleAction; disabled: boolean}) => {
  const handleClick = useCallback(() => {
    if (!disabled && !action.disabled) action.onClick();
  }, [action, disabled]);
  return (
    <ButtonLink
      type="secondary"
      label={action.label}
      onClick={handleClick}
      disabled={disabled || action.disabled}
    />
  );
};

const PopulationResponsibles = ({model, labels, disabled = false}: PopulationResponsiblesProps) => {
  const fetching = Boolean(model.loading || model.loadingMore);
  const actionsDisabled = disabled || fetching;
  const showPeople = model.users.length > 0 || (!fetching && !model.error);

  return (
    <section className={style.container} aria-label={labels.title} aria-busy={fetching}>
      <div className={style.header}>
        <div className={style.heading}>
          <h3>{labels.title}</h3>
          {model.countLabel ? <Tag label={model.countLabel} type="info" /> : null}
        </div>
        {model.refresh ? <ReadAction action={model.refresh} disabled={actionsDisabled} /> : null}
      </div>
      <p className={style.description}>{labels.description}</p>
      {model.evaluatedAtLabel ? <p className={style.checked}>{model.evaluatedAtLabel}</p> : null}
      {showPeople ? (
        <PersonTags
          users={model.users}
          labels={labels.people}
          mode="display"
          aria-label={labels.list}
        />
      ) : null}
      {fetching ? (
        <div className={style.loading} role="status">
          <Loader theme="coorpmanager" />
          <span>{model.loadingMore ? labels.loadingMore : labels.loading}</span>
        </div>
      ) : null}
      {model.error ? (
        <div className={style.error} role="alert">
          <span aria-hidden="true">
            <Icon iconName="triangle-exclamation" iconColor="currentColor" />
          </span>
          <span className={style.message}>{model.error.message}</span>
          {model.error.retry ? (
            <ReadAction action={model.error.retry} disabled={actionsDisabled} />
          ) : null}
        </div>
      ) : null}
      {model.loadMore && !model.error ? (
        <div className={style.more}>
          <ReadAction action={model.loadMore} disabled={actionsDisabled} />
        </div>
      ) : null}
    </section>
  );
};

PopulationResponsibles.propTypes = propTypes;
export default PopulationResponsibles;
