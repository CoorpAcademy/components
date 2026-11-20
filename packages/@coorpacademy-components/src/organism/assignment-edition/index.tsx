import React, {useEffect, useMemo, useRef} from 'react';
import uniqueId from 'lodash/fp/uniqueId';
import BrandFormGroup from '../../molecule/brand-form-group';
import AssignmentAudience from '../assignment-audience';
import ContentSelectionList from '../content-selection-list';
import Title from '../../atom/title';
import RadioWithTitle from '../../atom/radio-with-title';
import InputSwitch from '../../atom/input-switch';
import Loader from '../../atom/loader';
import {AssignmentEditionProps, propTypes} from './types';
import style from './style.css';

export type {AssignmentEditionProps, AssignmentEditionPropsFixture} from './types';

const AssignmentEdition = ({
  information,
  audience,
  contents,
  dates,
  requiredFieldsHint,
  busy = false,
  isFetching = false,
  focusSection,
  focusRequestKey
}: AssignmentEditionProps) => {
  const root = useRef<HTMLDivElement>(null);
  const radioName = useMemo(() => uniqueId('assignment-rule-'), []);

  useEffect(() => {
    if (!focusSection || isFetching) return;
    const section = root.current?.querySelector<HTMLElement>(`#assignment-${focusSection}`);
    if (!section) return;
    const findHeader = (ancestor: HTMLElement | null): HTMLElement | null => {
      if (!ancestor) return null;
      return (
        ancestor.querySelector<HTMLElement>('[data-name="header-with-actions-wrapper"]') ||
        findHeader(ancestor.parentElement)
      );
    };
    const header = findHeader(root.current?.parentElement || null);
    const bottom = header?.parentElement?.getBoundingClientRect().bottom || 0;
    section.style.scrollMarginTop = `${bottom + 16}px`;
    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    section.scrollIntoView?.({block: 'start', behavior: reducedMotion ? 'auto' : 'smooth'});
  }, [focusSection, focusRequestKey, isFetching]);

  if (isFetching) {
    return (
      <div className={style.loaderContainer}>
        <Loader className={style.loader} theme="coorpmanager" />
      </div>
    );
  }

  return (
    <div ref={root} className={style.container}>
      {requiredFieldsHint ? (
        <p className={style.hint}>
          {requiredFieldsHint.split(/(\*\*[^*]+\*\*|\*)/).map((text, index) => {
            if (text === '*')
              return (
                <span key={index} className={style.required}>
                  *
                </span>
              );
            if (text.startsWith('**')) return <strong key={index}>{text.slice(2, -2)}</strong>;
            return text;
          })}
        </p>
      ) : null}
      <section
        id="assignment-information"
        data-name="assignment-information"
        className={style.card}
      >
        <BrandFormGroup
          title={information.title}
          required
          subtitle={information.subtitle}
          error={information.error}
          fields={[
            {
              ...information.field,
              required: true,
              type: 'text',
              maxLength: information.field.maxLength ?? 100,
              theme: 'coorpmanager',
              disabled: busy || information.field.disabled
            }
          ]}
        />
      </section>
      <section id="assignment-audience" data-name="assignment-audience" className={style.card}>
        <AssignmentAudience {...audience} disabled={busy || audience.disabled} />
      </section>
      <section id="assignment-contents" data-name="assignment-contents" className={style.card}>
        <ContentSelectionList
          {...contents}
          required={false}
          error={undefined}
          disabled={busy || contents.disabled}
        />
        {contents.error ? (
          <p role="alert" className={style.fieldError}>
            {contents.error}
          </p>
        ) : null}
      </section>
      <section id="assignment-dates" data-name="assignment-dates" className={style.card}>
        <div className={style.content}>
          <BrandFormGroup
            title={dates.title}
            error={dates.error}
            fields={dates.fields.map(field => ({
              ...field,
              type: 'date',
              theme: 'coorpmanager',
              disabled: busy || field.disabled
            }))}
          />
        </div>
      </section>
      <section id="assignment-rule" data-name="assignment-rule" className={style.card}>
        <div className={style.content}>
          <Title type="form-group" title={dates.rule.title} />
          {dates.rule.hint ? <p className={style.hint}>{dates.rule.hint}</p> : null}
          {dates.rule.options.map((option, index) => (
            <RadioWithTitle
              {...option}
              key={option['data-name'] || option.title.title}
              title={{
                ...option.title,
                subtitle: option.title.subtitle || '',
                type: 'form-group',
                subtitleSize: 'extra-small',
                'data-name': `assignment-rule-title-${index}`
              }}
              name={option.name || radioName}
              checked={Boolean(option.checked)}
              disabled={busy || dates.rule.disabled || option.disabled}
              aria-label={option['aria-label'] || option.title.title}
            />
          ))}
          {dates.rule.error ? (
            <p role="alert" className={style.fieldError}>
              {dates.rule.error}
            </p>
          ) : null}
        </div>
      </section>
      <section
        id="assignment-notifications"
        data-name="assignment-notifications"
        className={style.card}
      >
        <div className={style.content}>
          {dates.reminders.title ? <Title type="form-group" title={dates.reminders.title} /> : null}
          <p className={style.hint}>{dates.reminders.hint}</p>
          {dates.reminders.switches.map((reminder, index) => (
            <InputSwitch
              {...reminder}
              key={reminder.name || reminder['data-name'] || reminder.title || index}
              titlePosition="right"
              theme="coorpmanager"
              disabled={busy || reminder.disabled}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

AssignmentEdition.propTypes = propTypes;
export default AssignmentEdition;
