import get from 'lodash/fp/get';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';
import createVideoIframe from '../video-iframe';

const conditions = checker.shape({
  props: checker.shape({
    image: checker.string.optional,
    title: checker.string,
    description: checker.string,
    video: checker.shape({
      type: checker.oneOf(['vimeo', 'youtube']),
      id: checker.string
    }).optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const VideoIframe = createVideoIframe(treant, options);

  const DisciplineHeader = (props, children) => {
    const {h} = treant;
    const {image, title, description, video} = props;

    const type = get('type', video);
    const id = get('id', video);

    return (
      <div className={style.wrapper}>
        <div className={style.imgWrapper}>
          <VideoIframe
            image={image}
            type={type}
            id={id}
            width={380}
            height={250}
          />
        </div>
        <div className={style.courseWrapper}>
            <div className={style.title}>
              {title}
            </div>
            <div className={style.desc}>
              {description}
            </div>
        </div>
      </div>
    );
  };

  DisciplineHeader.validate = createValidate(conditions);
  return DisciplineHeader;
};
