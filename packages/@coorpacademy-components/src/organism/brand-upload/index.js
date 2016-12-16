import Inferno from 'inferno';
import {checker, createValidate} from '../../util/validation';
import ProgressBar from '../../molecule/progress-bar';
import UploadBox from '../../molecule/brand-upload-box';
import DownloadBox from '../../molecule/brand-download-box';
import Link from '../../atom/link';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string.optional,
    status: checker.string.optional,
    download: checker.object.nullOk,
    progress: checker.shape({
      value: checker.number,
      max: checker.number,
      desc: checker.string.optional
    }).optional,
    upload: checker.object,
    back: checker.shape({
      desc: checker.string.optional,
      link: checker.string.optional
    }).optional,
    notifications: checker.arrayOf(checker.shape({
      type: checker.string,
      message: checker.string
    })).optional
  }),
  children: checker.none
});

const BrandUpload = ({children, ...props}) => {
  const {
    title = '',
    back,
    download,
    upload,
    progress,
    notifications
  } = props;

  const notificationsItems = notifications.map(notif => (
    <div className={style[notif.type]}>
      <span>{notif.message}</span>
    </div>
  ));

  const backView = back && (
    <p className={style.back}>
      <i className={style.arrowBack}/>
      <Link
        href={back.link}
        className={style.backDesc}
      >
        {back.desc}
      </Link>
    </p>
  );

  return (
    <div className={style.wrapper}>
      {backView}
      <div className={style.title}>
        <h3>{title}</h3>
      </div>
      {download && <DownloadBox {...download}/>}
      <UploadBox {...upload}/>
      {progress && <ProgressBar {...progress} className={style.progress}/>}
      <ul className={style.notifications}>
        {notificationsItems}
      </ul>
    </div>
  );
};

BrandUpload.validate = createValidate(conditions);
export default BrandUpload;
