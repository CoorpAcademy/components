import React from 'react';
import PropTypes from 'prop-types';
import {
  NovaCompositionCoorpacademyValidate as Validated,
  NovaCompositionCoorpacademyBrokenHeart as BrokenHeart
} from '@coorpacademy/nova-icons';

import last from 'lodash/fp/last';
import style from './upload-report.css';
import {Preview} from './preview';

export const UploadReport = ({
  error,
  previewContent,
  previewLabel,
  uploadErrorMessage,
  uploadSuccessMessage
}) => {
  if (error) {
    return (
      <div className={style.reportingContainer}>
        <div className={style.repport}>
          <span> 🥺 </span>
          <div>
            <p className={style.label}>{uploadErrorMessage}</p>
            <p className={style.uploadErrorMessage}>{error}</p>
          </div>
        </div>
        <div className={style.previewContainer}>
          <BrokenHeart className={style.brokenHeartIcon} />
        </div>
      </div>
    );
  }
  return (
    <div id="upload-report" className={style.reportingContainer}>
      <div className={style.repport}>
        <span>🎉</span>
        <div>
          <p className={style.label}>{uploadSuccessMessage}</p>
          <p className={style.fileName}>{last(previewContent.src.split('/'))}</p>
        </div>
        <Validated className={style.reportIcon} />
      </div>
      <div className={style.previewContainer}>
        <Preview src={previewContent.src} type={previewContent.type} />
      </div>
    </div>
  );
};

export default UploadReport;

UploadReport.propTypes = {
  error: PropTypes.string,
  uploadErrorMessage: PropTypes.string,
  uploadSuccessMessage: PropTypes.string,
  previewContent: PropTypes.shape({
    type: PropTypes.string,
    src: PropTypes.string
  })
};
