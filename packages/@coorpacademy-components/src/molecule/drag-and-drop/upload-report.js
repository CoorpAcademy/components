import React from 'react';
import PropTypes from 'prop-types';
import {
  NovaCompositionCoorpacademyValidate as Validated,
  NovaCompositionCoorpacademyScorm as ScormIcon,
  NovaLineContentEditionBin as TrashIcon
} from '@coorpacademy/nova-icons';

import {pipe, split, last} from 'lodash/fp';
import Provider from '../../atom/provider';

import Button from '../../atom/button';
import style from './upload-report.css';

export const UploadReport = (
  {type, message, content, buttonTitle, primaryColor, onDelete},
  context
) => {
  if (type === 'error') {
    return (
      <div className={style.reportingContainer}>
        <div className={style.reportContainer}>
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
      </div>
    );
  }

  const Message = () => (
    <div>
      <span className={style.emoticon}>🎉</span>
      <p className={style.message}>{message}</p>
    </div>
  );

  const {src} = content;
  const IconColor = '#FFB800';
  const fileName = pipe(
    split('/'),
    last
  )(src);

  return (
    <div className={style.reportingContainer}>
      <div className={style.reportHeader}>
        <div className={style.iconContainer} style={{backgroundColor: IconColor}}>
          <div className={style.oval}>
            <ScormIcon className={style.iconHeader} color={IconColor} />
          </div>
        </div>
        <div className={style.fileName} title={fileName}>
          {fileName}
        </div>
        <Validated className={style.validateIcon} />
        <div onClick={onDelete}>
          <TrashIcon className={style.trashIcon} />
        </div>
      </div>
      <div className={style.reportContainer}>{type === 'success' && <Message />}</div>
    </div>
  );
};

export default UploadReport;

UploadReport.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  content: PropTypes.shape({
    type: PropTypes.string,
    src: PropTypes.string
  }),
  buttonTitle: PropTypes.string,
  primaryColor: PropTypes.string,
  onDelete: PropTypes.func
};

UploadReport.contextTypes = {
  translate: Provider.childContextTypes.translate
};
