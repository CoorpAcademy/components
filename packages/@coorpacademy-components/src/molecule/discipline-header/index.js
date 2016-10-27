import get from 'lodash/fp/get';
import hyperx from 'hyperx';
import {checker, createValidate} from '../../util/validation';
import createVideoIframe from '../video-iframe';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    image: checker.shape({
      '1x': checker.url.optional,
      '2x': checker.url.optional
    }).optional,
    title: checker.string.optional,
    description: checker.string.optional,
    video: checker.shape({
      type: checker.oneOf(['vimeo', 'youtube']).optional,
      id: checker.string.optional
    }).optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const VideoIframe = createVideoIframe(treant, options);

  const DisciplineHeader = (props, children) => {
    const {h} = treant;
    const hx = hyperx(h);
    const {image, title, description, video} = props;

    const type = get('type', video);
    const id = get('id', video);
    const descView = (
      <div className={style.desc}>
        {hx(`<div>${description}</div>`)}
      </div>
    );

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
            {descView}
        </div>
      </div>
    );
  };

  DisciplineHeader.validate = createValidate(conditions);
  return DisciplineHeader;
};
