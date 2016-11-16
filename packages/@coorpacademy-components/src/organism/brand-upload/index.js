import {checker, createValidate} from '../../util/validation';
import createUploadBox from '../../molecule/brand-upload-box';
// import createDownloadBox from '../../molecule/brand-download-box';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string.optional,
    status: checker.string.optional,
    // download: checker.object,
    upload: checker.object
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;
  // const DownloadBox = createDownloadBox(treant, options);
  const UploadBox = createUploadBox(treant, options);

  const BrandUpload = (props, children) => {
    const {
      title = '',
      // download,
      upload
    } = props;

    // <DownloadBox {...download}/>

    return (
      <div className={style.wrapper}>
        <div className={style.title}>
          <h3>{title}</h3>
        </div>
        <UploadBox {...upload}/>
      </div>
    );
  };

  BrandUpload.validate = createValidate(conditions);
  return BrandUpload;
};
