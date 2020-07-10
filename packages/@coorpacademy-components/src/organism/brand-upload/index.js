import React from 'react';
import PropTypes from 'prop-types';
import {keys} from 'lodash/fp';
import Provider from '../../atom/provider';
import ProgressBar from '../../molecule/progress-bar';
import UploadBox from '../../molecule/brand-upload-box';
import DownloadBox from '../../molecule/brand-download-box';
import style from './style.css';

const notificationStyle = {
  warning: style.warning,
  error: style.error,
  success: style.success
};

const BrandUpload = props => {
  const {title = '', download, oneLoginTokens, upload, progress, notifications} = props;

  const notificationsItems = notifications.map((notif, index) => (
    <div className={notificationStyle[notif.type]} key={index}>
      <span>{notif.message}</span>
    </div>
  ));

  const oneLoginTokensView = oneLoginTokens ? (
    <div>
      <div className={style.title}>
        <h3>{oneLoginTokens.title} </h3>
      </div>
      {oneLoginTokens.download ? <DownloadBox {...oneLoginTokens.download} /> : null}
    </div>
  ) : null;

  return (
    <div className={style.wrapper}>
      {oneLoginTokensView}
      <div className={style.title}>
        <h3>{title}</h3>
      </div>
      {download ? <DownloadBox {...download} /> : null}
      <UploadBox {...upload} />
      {progress ? <ProgressBar {...progress} className={style.progress} /> : null}
      <ul className={style.notifications}>{notificationsItems}</ul>
    </div>
  );
};

BrandUpload.contextTypes = {
  skin: Provider.childContextTypes.skin
};

BrandUpload.propTypes = {
  title: PropTypes.string,
  download: PropTypes.shape(DownloadBox.propTypes),
  oneLoginTokens: PropTypes.shape({
    title: PropTypes.string,
    download: PropTypes.shape(DownloadBox.propTypes)
  }),
  progress: PropTypes.shape({
    value: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    desc: PropTypes.string
  }),
  upload: PropTypes.shape(UploadBox.propTypes).isRequired,
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(keys(notificationStyle)).isRequired,
      message: PropTypes.string.isRequired
    })
  )
};

export default BrandUpload;
