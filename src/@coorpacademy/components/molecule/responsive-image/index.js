import get from 'lodash/fp/get';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    image: checker.shape({
      url: checker.url.optional,
      url2x: checker.url.optional
    }).optional
  }),
  children: checker.none
});

export default ({h}, options = {}) => {
  const ResponsiveImage = ({image}) => {
    const url = get('url', image);
    const url2x = get('url2x', image);

    if (url2x) {
      return (
        <img
          src={url}
          srcset={`${url2x} 2x`}
        />
      );
    }

    if (url) {
      return <img src={url}/>;
    }

    return <div className={style.empty}/>;
  };

  ResponsiveImage.validate = createValidate(conditions);
  return ResponsiveImage;
};
