import React, {useCallback, useEffect, useRef} from 'react';
import InputText from '../../atom/input-text';
import Loader from '../../atom/loader';
import Banner from '../../molecule/banner';
import PopulationConditions from '../population-conditions';
import PopulationOwners from '../population-owners';
import PopulationCatalogueAccess from '../population-catalogue-access';
import PopulationResponsibles from '../population-responsibles';
import {PopulationConfirmation} from '../population-list/confirmation';
import LearnerPreview from './preview';
import TypeField from './type-field';
import {ReadButton} from './read-button';
import {PopulationEditionProps, SectionName, propTypes} from './types';
import style from './style.css';

const PopulationEdition = ({
  model,
  labels,
  disabled = false,
  headerOffset = 128,
  confirmation
}: PopulationEditionProps) => {
  const root = useRef<HTMLDivElement>(null);
  const identification = useRef<HTMLDivElement>(null);
  const conditions = useRef<HTMLDivElement>(null);
  const owners = useRef<HTMLDivElement>(null);
  const catalogue = useRef<HTMLDivElement>(null);
  const responsibles = useRef<HTMLDivElement>(null);
  const preview = useRef<HTMLDivElement>(null);
  const {loaded, archived, busy, focusSection, focusRequestKey} = model;
  const locked = disabled || busy || archived;
  const onNameChange = useCallback(
    (value: string) => {
      if (!locked) model.name.onChange(value);
    },
    [locked, model.name]
  );
  useEffect(() => {
    if (!loaded || focusRequestKey === undefined || !focusSection) return;
    const targets: Record<SectionName, React.RefObject<HTMLDivElement>> = {
      identification,
      conditions,
      owners,
      catalogue,
      responsibles,
      preview
    };
    const target = targets[focusSection].current;
    if (!target) return;
    target.focus({preventScroll: true});
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block: 'start'});
  }, [loaded, focusSection, focusRequestKey]);
  const targetStyle = {scrollMarginTop: headerOffset};
  const pending = model.loadError ? (
    <div role="alert" className={style.section}>
      <p>{model.loadError.message}</p>
      {model.loadError.retry ? (
        <ReadButton action={model.loadError.retry} disabled={disabled || busy} />
      ) : null}
    </div>
  ) : (
    <div role="status" className={style.loading}>
      <Loader theme="coorpmanager" />
      {labels.loading}
    </div>
  );
  return (
    <div className={style.editor} ref={root} tabIndex={-1} aria-busy={!loaded || busy}>
      {!loaded ? (
        pending
      ) : (
        <>
          {model.feedback ? (
            <div
              role={model.feedback.type === 'error' ? 'alert' : 'status'}
              className={style.feedback}
            >
              <Banner type={model.feedback.type} message={model.feedback.message} />
              {model.feedback.retry ? (
                <ReadButton action={model.feedback.retry} disabled={locked} />
              ) : null}
            </div>
          ) : null}
          <div
            ref={identification}
            role="group"
            aria-label={labels.identification}
            tabIndex={-1}
            style={targetStyle}
            data-name="population-section-identification"
          >
            <section className={style.section} aria-label={labels.identification}>
              <h3>{labels.identification}</h3>
              <p className={style.description}>{labels.identificationDescription}</p>
              <div className={style.name}>
                <InputText
                  value={model.name.value}
                  onChange={onNameChange}
                  error={model.name.error}
                  title={labels.name}
                  aria-label={labels.name}
                  disabled={locked}
                  theme="coorpmanager"
                  required
                />
              </div>
              {model.typeField ? (
                <TypeField model={model.typeField} disabled={locked} />
              ) : (
                <p className={style.typeDescription}>{labels.typeDescription}</p>
              )}
            </section>
          </div>
          <div
            ref={conditions}
            role="group"
            aria-label={labels.conditions.title}
            tabIndex={-1}
            style={targetStyle}
            className={style.section}
            data-name="population-section-conditions"
          >
            <PopulationConditions
              model={model.conditions}
              labels={labels.conditions}
              disabled={locked}
            />
          </div>
          {model.catalogue && labels.catalogue ? (
            <div
              ref={catalogue}
              role="group"
              aria-label={labels.catalogue.title}
              tabIndex={-1}
              style={targetStyle}
              className={style.section}
              data-name="population-section-catalogue"
            >
              <PopulationCatalogueAccess
                model={model.catalogue}
                labels={labels.catalogue}
                disabled={locked}
              />
            </div>
          ) : null}
          {!archived && model.responsibles && labels.responsibles ? (
            <div
              ref={responsibles}
              role="group"
              aria-label={labels.responsibles.title}
              tabIndex={-1}
              style={targetStyle}
              className={style.section}
              data-name="population-section-responsibles"
            >
              <PopulationResponsibles
                model={model.responsibles}
                labels={labels.responsibles}
                disabled={disabled || busy}
              />
            </div>
          ) : null}
          {model.owners ? (
            <div
              ref={owners}
              role="group"
              aria-label={labels.owners.title}
              tabIndex={-1}
              style={targetStyle}
              className={style.section}
              data-name="population-section-owners"
            >
              <PopulationOwners model={model.owners} labels={labels.owners} disabled={locked} />
            </div>
          ) : null}
          {!archived && model.preview ? (
            <div
              ref={preview}
              role="group"
              aria-label={labels.preview.title}
              tabIndex={-1}
              style={targetStyle}
              data-name="population-section-preview"
            >
              <LearnerPreview
                model={model.preview}
                labels={labels.preview}
                disabled={disabled || busy}
              />
            </div>
          ) : null}
        </>
      )}
      {confirmation ? <PopulationConfirmation model={confirmation} fallback={root} /> : null}
    </div>
  );
};
PopulationEdition.propTypes = propTypes;
export default PopulationEdition;
