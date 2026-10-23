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
// ButtonLink is full width by default, which centres the link under the file card.
const FIT_CONTENT = {width: 'fit-content'};
const FILE_ICON_SIZE = {faSize: 22, wrapperSize: 22};

// Up to 5,000 rows: the logins not kept go to a file the admin can fix and upload again.
const Report = ({label, onDownload}: NonNullable<UploadResultProps['report']>) => (
  <div data-name="upload-report">
    <ButtonLink
      type="text"
      label={label}
      onClick={onDownload}
      icon={{position: 'left', faIcon: {name: 'download', size: 14}}}
      customStyle={FIT_CONTENT}
    />
  </div>
);

const UploadResult = ({
  file,
  summary = {},
  keptLabel,
  report,
  removeLabel,
  onRemove
}: UploadResultProps) => (
  <div className={style.result} data-name="upload-result">
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
    {report ? <Report {...report} /> : null}
  </div>
);

UploadResult.propTypes = UploadResultPropTypes;

export default UploadResult;
