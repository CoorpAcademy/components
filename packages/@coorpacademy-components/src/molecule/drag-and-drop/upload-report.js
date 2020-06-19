import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import {
  NovaCompositionCoorpacademyValidate as Validated,
  NovaLineContentEditionBin as TrashIcon
} from '@coorpacademy/nova-icons';
import classnames from 'classnames';
import {pipe, split, last, map, head, getOr} from 'lodash/fp';
import {EXTERNAL_CONTENT_ICONS} from '../../util/external-content';
import InputText from '../../atom/input-text';

import Button from '../../atom/button';
import style from './upload-report.css';

export const UploadReport = ({
  state,
  message,
  type: contentType,
  fields,
  mode = 'upload',
  orLabel,
  buttonTitle,
  primaryColor,
  onDelete
}) => {
  const handleDelete = useCallback(
    e => {
      e.stopPropagation();
      e.preventDefault();
      onDelete && onDelete(e);
    },
    [onDelete]
  );

  const SuccessMessage = () => (
    <div>
      <span className={style.emoticon}>🎉</span>
      <p className={style.message}>{message}</p>
    </div>
  );
  const ErrorMessage = () => (
    <div>
      <div>
        <span className={style.emoticon}>🥺</span>
        <p className={style.message}>{message}</p>
      </div>
      <div>
        <Button
          data-name="cta"
          type="link"
          submitValue={buttonTitle}
          className={style.selectButton}
          style={{backgroundColor: primaryColor}}
        />
      </div>
    </div>
  );
  const showMessage = ['success', 'error'].includes(state);
  const fileName = pipe(head, getOr('', 'value'), split('/'), last)(fields);
  const fileView = fileName ? (
    <div className={style.fileWrapper}>
      <div className={style.fileName} title={fileName}>
        {fileName}
      </div>
      <Validated className={style.validateIcon} />
    </div>
  ) : (
    <div className={style.emptyFileWrapper} />
  );
  const IconType = EXTERNAL_CONTENT_ICONS[contentType].icon;
  const iconColor = EXTERNAL_CONTENT_ICONS[contentType].color;
  const buildField = (field, index) => <InputText {...field} key={index} theme={'cockpit'} />;
  const deleteView = onDelete ? (
    <div onClick={handleDelete} className={classnames(style.actionIcon, style.trashIcon)}>
      <TrashIcon width={20} height={20} />
    </div>
  ) : null;
  const fieldsList = map.convert({cap: false})(buildField, fields);

  return (
    <div className={style.reportingContainer}>
      <div className={style.reportHeader}>
        <div className={style.iconContainer} style={{backgroundColor: iconColor}}>
          <div className={style.oval}>
            <IconType className={style.iconHeader} color={iconColor} />
          </div>
        </div>
        {fileView}
        {deleteView}
      </div>
      <div className={style.reportContainer}>
        {state === 'success' ? <SuccessMessage /> : null}
        {state === 'error' ? <ErrorMessage /> : null}
        {mode === 'edit' && !showMessage ? <div>{fieldsList}</div> : null}
        {mode === 'edit' && !showMessage ? <span className={style.or}>{orLabel}</span> : null}
        {!showMessage ? (
          <div className={style.drop}>
            <p className={style.message}>{message}</p>
            <Button
              data-name="cta"
              type="link"
              submitValue={buttonTitle}
              className={style.selectButton}
              style={{backgroundColor: primaryColor}}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UploadReport;

UploadReport.propTypes = {
  state: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  orLabel: PropTypes.string,
  type: PropTypes.string,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      ...InputText.propTypes,
      type: PropTypes.oneOf(['text'])
    })
  ),
  mode: PropTypes.oneOf(['edit', 'upload']),
  buttonTitle: PropTypes.string,
  primaryColor: PropTypes.string,
  onDelete: PropTypes.func
};
