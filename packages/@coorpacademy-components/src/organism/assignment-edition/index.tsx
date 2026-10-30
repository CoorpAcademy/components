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
  busy = false,
  isFetching = false,
  focusSection
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
    section.scrollIntoView?.({block: 'start'});
  }, [focusSection, isFetching]);

  if (isFetching) {
    return (
      <div className={style.loaderContainer}>
        <Loader className={style.loader} theme="coorpmanager" />
      </div>
    );
  }

  return (
    <div ref={root} className={style.container}>
      <section
        id="assignment-information"
        data-name="assignment-information"
        className={style.card}
      >
        <BrandFormGroup
          title={information.title}
          subtitle={information.subtitle}
          error={information.error}
          fields={[
            {
              ...information.field,
              type: 'text',
              maxLength: 100,
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
        <ContentSelectionList {...contents} disabled={busy || contents.disabled} />
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
          <Title type="form-group" title={dates.rule.title} />
          {dates.rule.hint ? <div>{dates.rule.hint}</div> : null}
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
          <div>{dates.reminders.hint}</div>
          {dates.reminders.switches.map((reminder, index) => (
            <InputSwitch
              {...reminder}
              key={reminder.name || reminder['data-name'] || reminder.title || index}
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
