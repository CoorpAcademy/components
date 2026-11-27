import React from 'react';
import BrandTable from '../brand-table';
import Loader from '../../atom/loader';
import Icon from '../../atom/icon';
import {PreviewModel, PopulationEditionLabels} from './types';
import {ReadButton} from './read-button';
import style from './preview.css';

const LearnerPreview = ({
  model,
  labels,
  disabled
}: {
  model: PreviewModel;
  labels: PopulationEditionLabels['preview'];
  disabled: boolean;
}) => (
  <section className={style.section} aria-label={labels.title} aria-busy={Boolean(model.loading)}>
    <h3>{labels.title}</h3>
    <p className={style.description}>{labels.description}</p>
    {model.loading ? (
      <div className={style.loading} role="status">
        <Loader theme="coorpmanager" />
        {labels.loading}
      </div>
    ) : null}
    {model.error ? (
      <p role="alert" className={style.error}>
        {model.error}
      </p>
    ) : null}
    {model.stale ? (
      <p role="status" className={style.stale}>
        {labels.stale}
      </p>
    ) : null}
    {model.retry ? (
      <ReadButton action={model.retry} disabled={disabled || Boolean(model.loading)} />
    ) : null}
    {model.resultLabel ? <p className={style.count}>{model.resultLabel}</p> : null}
    {model.rows.length > 0 ? (
      <div className={style.table} role="region" aria-label={labels.table} tabIndex={0}>
        <div className={style.tableContent}>
          <BrandTable rows={model.rows} columns={model.columns} editable={false} emptyValue="" />
        </div>
      </div>
    ) : null}
    {model.empty ? (
      <div className={style.empty}>
        <span aria-hidden="true">
          <Icon iconName="users" iconColor="currentColor" size={{faSize: 24, wrapperSize: 48}} />
        </span>
        <strong>{model.empty.title}</strong>
        <p>{model.empty.message}</p>
      </div>
    ) : null}
    {model.sampleLabel ? <p className={style.description}>{model.sampleLabel}</p> : null}
    {model.evaluatedAtLabel ? <p className={style.description}>{model.evaluatedAtLabel}</p> : null}
  </section>
);
export default LearnerPreview;
