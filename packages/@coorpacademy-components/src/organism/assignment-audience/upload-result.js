import React from 'react';
import PropTypes from 'prop-types';
import keys from 'lodash/fp/keys';
import ButtonLink from '../../atom/button-link';
import Tag from '../../atom/tag';
import FaIcon from '../../atom/icon';
import {COLORS} from '../../variables/colors';
import style from './upload-result.css';

// Each file row resolves to one of four statuses. A never-connected account is `valid` and added
// with no warning; a deactivated account is `inactive`, skipped and reported.
export const STATUS_TAG_TYPES = {
  valid: 'success',
  unknown: 'failure',
  ambiguous: 'warning',
  inactive: 'warning'
};
export const STATUSES = keys(STATUS_TAG_TYPES);
// ButtonLink's text type sets its own colour; customStyle is the prop it lets win over it.
const REMOVE_STYLE = {color: COLORS.cm_negative_200};

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
  replaceLabel,
  removeLabel,
  onReplace,
  onRemove
}) => (
  <div className={style.result}>
    <div className={style.file} data-name="upload-file">
      <div>
        <div className={style.fileName}>{file.name}</div>
        {file.detail ? <div className={style.muted}>{file.detail}</div> : null}
      </div>
      <div className={style.fileActions}>
        <ButtonLink type="text" label={replaceLabel} onClick={onReplace} />
        <ButtonLink type="text" label={removeLabel} onClick={onRemove} customStyle={REMOVE_STYLE} />
      </div>
    </div>
    <div className={style.summary} data-name="upload-summary">
      {STATUSES.filter(status => summary[status]).map(status => (
        <div key={status}>
          <Tag type={STATUS_TAG_TYPES[status]} label={summary[status]} />
        </div>
      ))}
    </div>
    {keptLabel ? <p className={style.muted}>{keptLabel}</p> : null}
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

const labelsByStatus = PropTypes.shape({
  valid: PropTypes.string,
  unknown: PropTypes.string,
  ambiguous: PropTypes.string,
  inactive: PropTypes.string
});

UploadResult.propTypes = {
  file: PropTypes.shape({name: PropTypes.string, detail: PropTypes.string}),
  // The four count labels, formatted by the app, e.g. {valid: '201 valid', unknown: '6 unknown'}
  summary: labelsByStatus,
  keptLabel: PropTypes.string,
  toggleLabel: PropTypes.string,
  expanded: PropTypes.bool,
  onToggleRows: PropTypes.func,
  columns: PropTypes.shape({
    login: PropTypes.string,
    status: PropTypes.string
  }),
  // The status tag label of a row
  statusLabels: labelsByStatus,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      login: PropTypes.string.isRequired,
      status: PropTypes.oneOf(STATUSES).isRequired
    })
  ),
  replaceLabel: PropTypes.string,
  removeLabel: PropTypes.string,
  onReplace: PropTypes.func,
  onRemove: PropTypes.func
};

export default UploadResult;
