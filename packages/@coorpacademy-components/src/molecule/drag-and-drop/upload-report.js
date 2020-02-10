import React from 'react';
import PropTypes from 'prop-types';
import {
  NovaCompositionCoorpacademyValidate as Validated,
  NovaCompositionCoorpacademyBrokenHeart as BrokenHeart
} from '@coorpacademy/nova-icons';
import get from 'lodash/fp/get';

import {pipe, split, last} from 'lodash/fp';
import Provider from '../../atom/provider';

import style from './upload-report.css';
import {Preview} from './preview';

export const UploadReport = (
  {error, previewContent, previewLabel, uploadErrorMessage, uploadSuccessMessage},
  context
) => {
  const translate = get('translate', context);

  if (error) {
    return (
      <div className={style.reportingContainer}>
        <div className={style.repport}>
          <span> {translate('sad_face:emoji')}</span>
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
        <span> {translate('tada:emoji')}</span>
        <div>
          <p className={style.label}>{uploadSuccessMessage}</p>
          <p className={style.fileName}>
            {pipe(
              split('/'),
              last
            )(previewContent.src)}
          </p>
        </div>
        <Validated className={style.reportIcon} />
      </div>
      <div className={style.previewContainer}>
        <Preview {...previewContent} />
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

UploadReport.contextTypes = {
  translate: Provider.childContextTypes.translate
};
