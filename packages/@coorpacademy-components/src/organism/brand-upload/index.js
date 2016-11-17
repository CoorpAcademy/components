import {checker, createValidate} from '../../util/validation';
import createUploadBox from '../../molecule/brand-upload-box';
import createDownloadBox from '../../molecule/brand-download-box';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string.optional,
    status: checker.string.optional,
    download: checker.object.optional,
    upload: checker.object,
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
  const UploadBox = createUploadBox(treant, options);

  const BrandUpload = (props, children) => {
    const {
      title = '',
      download,
      upload,
      notifications
    } = props;

    const notificationsItems = notifications.map(notif => (
      <div className={style[notif.type]}>
        <span>{notif.message}</span>
      </div>
    ));

    return (
      <div className={style.wrapper}>
        <div className={style.title}>
          <h3>{title}</h3>
        </div>
        {download ? <DownloadBox {...download}/> : ''}
        <UploadBox {...upload}/>
        <ul>
          {notificationsItems}
        </ul>
      </div>
    );
  };

  BrandUpload.validate = createValidate(conditions);
  return BrandUpload;
};
