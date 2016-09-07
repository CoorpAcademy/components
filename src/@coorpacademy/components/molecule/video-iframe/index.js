import {checker, createValidate} from '../../util/validation';
import style from './style.css';
import createResponsiveImage from '../responsive-image';

const VIMEO = 'vimeo';
const YOUTUBE = 'youtube';

const conditions = checker.shape({
  props: checker.shape({
    type: checker.oneOf([VIMEO, YOUTUBE]).optional,
    image: checker.shape({
      url: checker.url.optional,
      url2x: checker.url.optional
    }).optional,
    width: checker.number.optional,
    height: checker.number.optional,
    id: checker.string.optional
  }),
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
  const ResponsiveImage = createResponsiveImage(treant, options);

  const VideoIframe = (props, children) => {
    const {h} = treant;
    const {
      type,
      id,
      image,
      width = '100%',
      height = '400px'
    } = props;

    if (id) {
      return (
        <iframe src={url(type, id)}
              width={width}
              height={height}
              frameborder={0}
              className={style.iframe}
              allowfullscreen>
        </iframe>
      );
    }
    else {
      return (
        <ResponsiveImage
          image={image}
        />
      );
    }
  };

  VideoIframe.validate = createValidate(conditions);
  return VideoIframe;
};
