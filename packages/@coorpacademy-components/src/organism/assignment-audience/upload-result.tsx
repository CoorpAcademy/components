import React from 'react';
import ButtonLink from '../../atom/button-link';
import Tag from '../../atom/tag';
import FaIcon from '../../atom/icon';
import {COLORS} from '../../variables/colors';
import {STATUSES, UploadResultProps, UploadResultPropTypes, UploadRowStatus} from './types';
import style from './upload-result.css';

const STATUS_TAG_TYPES: Record<UploadRowStatus, 'success' | 'failure' | 'warning'> = {
  valid: 'success',
  unknown: 'failure',
  ambiguous: 'warning',
  inactive: 'warning'
};
// ButtonLink's text type sets its own colour; customStyle is the prop it lets win over it.
const REMOVE_STYLE = {color: COLORS.cm_negative_200};
const FILE_ICON_SIZE = {faSize: 22, wrapperSize: 22};

const UploadResult = ({
  file,
  summary = {},
  keptLabel,
  toggleLabel,
  expanded = false,
  onToggleRows,
  columns = {},
  statusLabels = {},
  rows = [],
  removeLabel,
  onRemove
}: UploadResultProps) => (
  <div className={style.result}>
    <div className={style.file} data-name="upload-file">
      <FaIcon iconName="file-excel" iconColor={COLORS.cm_positive_200} size={FILE_ICON_SIZE} />
      <div className={style.fileText}>
        <div className={style.fileName}>{file?.name}</div>
        {file?.detail ? <div className={style.muted}>{file.detail}</div> : null}
      </div>
      <div className={style.fileActions}>
        <ButtonLink type="text" label={removeLabel} onClick={onRemove} customStyle={REMOVE_STYLE} />
      </div>
    </div>
    <div className={style.summary} data-name="upload-summary">
      {STATUSES.filter(status => summary[status]).map(status => (
        <div key={status}>
          <Tag type={STATUS_TAG_TYPES[status]} label={summary[status]} />
        </div>
      ))}
      {keptLabel ? <span className={style.muted}>{keptLabel}</span> : null}
    </div>
    {toggleLabel ? (
      // A native button: ButtonLink does not forward aria-expanded.
      <button
        type="button"
        className={style.toggle}
        aria-expanded={expanded}
        onClick={onToggleRows}
        data-name="upload-rows-toggle"
      >
        <FaIcon
          iconName={expanded ? 'chevron-down' : 'chevron-right'}
          size={{faSize: 12, wrapperSize: 12}}
        />
        {toggleLabel}
      </button>
    ) : null}
    {expanded ? (
      <div className={style.rowsScroll}>
        <table className={style.table} data-name="upload-rows">
          <thead>
            <tr>
              <th scope="col">{columns.login}</th>
              <th scope="col">{columns.status}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({login, status}, index) => (
              // A file can hold the same login twice: the index keeps keys unique.
              <tr key={`${index}-${login}`}>
                <td className={style.login}>{login}</td>
                <td>
                  <Tag type={STATUS_TAG_TYPES[status]} label={statusLabels[status]} size="S" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : null}
  </div>
);

UploadResult.propTypes = UploadResultPropTypes;

export default UploadResult;
