import {checker, createValidate} from '../../util/validation';
import style from './style.css';

// https://codepen.io/chriscoyier/pen/aFrHh/ API play pause

const VIMEO = 'vimeo';
const YOUTUBE = 'youtube';

const conditions = checker.shape({
  props: checker.shape({
    type: checker.oneOf([VIMEO, YOUTUBE]),
    image: checker.string.optional,
    width: checker.string.optional,
    height: checker.string.optional,
    //image: checker.url.optional,
    id: checker.string
  }).strict,
  children: checker.none
});

const url = (type, id) => {
  switch (type) {
  case VIMEO:
    return `https://player.vimeo.com/video/${id}?color=dedede&badge=0&byline=0&title=0&portrait=0`;
  case YOUTUBE:
    return `https://www.youtube.com/embed/${id}`;
  }
};

export default (treant, options = {}) => {
  const VideoPlayer = (props, children) => {
    const {h} = treant;
    const {type, id, image, width = '100%', height = '400px'} = props;

    return (
      <div className={style.list}>
        <div className={style.item}>
          <input
            type='checkbox'
            id='toggler'
            checked={false}
            className={style.checkbox}
          />
          <img src={image} className={style.image}/>
          <iframe src={url(type, id)}
                width={width}
                height={height}
                frameborder={0}
                className={style.iframe}
                allowfullscreen>
          </iframe>
        </div>
      </div>
    );
  };

  VideoPlayer.validate = createValidate(conditions);
  return VideoPlayer;
};
