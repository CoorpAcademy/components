import React from 'react';
import PropTypes from 'prop-types';
import keys from 'lodash/fp/keys';
import ProgressBar from '../../molecule/progress-bar';
import UploadBox from '../../molecule/brand-upload-box';
import DownloadBox from '../../molecule/brand-download-box';
import Link from '../../atom/link';
import style from './style.css';

const notificationStyle = {
  warning: style.warning,
  error: style.error,
  success: style.success
};

const BrandUpload = props => {
  const {title = '', back, download, upload, progress, notifications} = props;

  const notificationsItems = notifications.map((notif, index) => (
    <div className={notificationStyle[notif.type]} key={index}>
      <span>{notif.message}</span>
    </div>
  ));

  const backView =
    back &&
    <p className={style.back}>
      <i className={style.arrowBack} />
      <Link href={back.link} className={style.backDesc}>
        {back.desc}
      </Link>
    </p>;

  return (
    <div className={style.wrapper}>
      {backView}
      <div className={style.title}>
        <h3>{title}</h3>
      </div>
      {download && <DownloadBox {...download} />}
      <UploadBox {...upload} />
      {progress && <ProgressBar {...progress} className={style.progress} />}
      <ul className={style.notifications}>
        {notificationsItems}
      </ul>
    </div>
  );
};

BrandUpload.propTypes = {
  title: PropTypes.string,
  download: PropTypes.shape(DownloadBox.propTypes),
  progress: PropTypes.shape({
    value: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    desc: PropTypes.string
  }),
  upload: PropTypes.shape(UploadBox.propTypes).isRequired,
  back: PropTypes.shape({
    desc: PropTypes.string,
    link: PropTypes.string
  }),
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(keys(notificationStyle)).isRequired,
      message: PropTypes.string.isRequired
    })
  )
};

export default BrandUpload;
