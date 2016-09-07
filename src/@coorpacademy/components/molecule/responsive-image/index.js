import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    url: checker.url.optional,
    url2x: checker.url.optional
  }),
  children: checker.none
});

export default ({h}, options = {}) => {
  const ResponsiveImage = props => {
    const {url, url2x} = props;

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
