import React from 'react';
import PropTypes from 'prop-types';
import keys from 'lodash/fp/keys';
import get from 'lodash/fp/get';
import {NovaCompositionNavigationArrowLeft as ArrowLeft} from '@coorpacademy/nova-icons';
import Provider from '../../atom/provider';
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

const BrandUpload = (props, context) => {
  const {title = '', back, download, oneLoginTokens, upload, progress, notifications} = props;

  const {skin} = context;
  const darkColor = get('common.dark', skin);

  const notificationsItems = notifications.map((notif, index) => (
    <div className={notificationStyle[notif.type]} key={index}>
      <span>{notif.message}</span>
    </div>
  ));

  const backView = back && (
    <p className={style.back}>
      <ArrowLeft color={darkColor} className={style.arrowBack} />
      <Link href={back.link} className={style.backDesc}>
        {back.desc}
      </Link>
    </p>
  );
  const oneLoginTokensView = oneLoginTokens && (
    <div>
      <div className={style.title}>
        <h3>{oneLoginTokens.title}</h3>
      </div>
      {oneLoginTokens.download && <DownloadBox {...oneLoginTokens.download} />}
    </div>
  );

  return (
    <div className={style.wrapper}>
      {backView}
      {oneLoginTokensView}
      <div className={style.title}>
        <h3>{title}</h3>
      </div>
      {download && <DownloadBox {...download} />}
      <UploadBox {...upload} />
      {progress && <ProgressBar {...progress} className={style.progress} />}
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
  back: PropTypes.shape({
    desc: Link.propTypes.children,
    link: Link.propTypes.href
  }),
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(keys(notificationStyle)).isRequired,
      message: PropTypes.string.isRequired
    })
  )
};

export default BrandUpload;
