import Inferno from 'inferno';
import {checker, createValidate} from '../../util/validation';
import VideoIframe from '../video-iframe';
import Picture from '../../atom/picture';
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

const VideoPlayer = ({children, ...props}) => {
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
export default VideoPlayer;
