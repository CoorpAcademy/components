import {checker, createValidate} from '../../util/validation';
import createVideoIframe from '../video-iframe';
import createPicture from '../../atom/picture';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    type: checker.oneOf(['vimeo', 'youtube']),
    playVideo: checker.func.optional,
    image: checker.string.optional,
    width: checker.string.optional,
    height: checker.string.optional,
    id: checker.string.optional
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const VideoIframe = createVideoIframe(treant, options);
  const Picture = createPicture(treant, options);

  const VideoPlayer = (props, children) => {
    const {h} = treant;
    const {
      type,
      id,
      image,
      playVideo,
      width = '100%',
      height = '400px'
    } = props;

    return (
      <div className={style.list}>
        <div className={style.item}>
          <input
            type='checkbox'
            id='toggler'
            checked={false}
            className={style.checkbox}
          />
          <label
            htmlFor={'toggler'}
            className={style.togglerDisplay}
            onClick={playVideo}
          >
            <Picture
              src={image}
              className={style.image}
              width={width}
              height={height}
            />
          </label>

          <VideoIframe
            type={type}
            id={id}
            width={width}
            height={height}
            frameborder={0}
            className={style.iframe}
            allowfullscreen={true}
          >
          </VideoIframe>
        </div>
      </div>
    );
  };

  VideoPlayer.validate = createValidate(conditions);
  return VideoPlayer;
};
