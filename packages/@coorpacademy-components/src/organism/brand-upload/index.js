import {checker, createValidate} from '../../util/validation';
import createProgressBar from '../../molecule/progress-bar';
import createUploadBox from '../../molecule/brand-upload-box';
import createDownloadBox from '../../molecule/brand-download-box';
import createLink from '../../atom/link';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string.optional,
    status: checker.string.optional,
    download: checker.object.nullOk,
    progress: checker.object.nullOk,
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

export default (treant, options = {}) => {
  const {h} = treant;
  const DownloadBox = createDownloadBox(treant, options);
  const ProgressBar = createProgressBar(treant, options);
  const UploadBox = createUploadBox(treant, options);
  const Link = createLink(treant, options);

  const BrandUpload = (props, children) => {
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
        <ul>
          {notificationsItems}
        </ul>
      </div>
    );
  };

  BrandUpload.validate = createValidate(conditions);
  return BrandUpload;
};
