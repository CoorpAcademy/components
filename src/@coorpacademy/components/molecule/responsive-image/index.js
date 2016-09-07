import get from 'lodash/fp/get';
import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    image: checker.shape({
      x1: checker.url.optional,
      x2: checker.url.optional
    }).optional
  }),
  children: checker.none
});

export default ({h}, options = {}) => {
  const ResponsiveImage = ({image}) => {
    const x1 = get('x1', image);
    const x2 = get('x2', image);

    if (x2) {
      return (
        <img
          src={x1}
          srcset={`${x2} 2x`}
        />
      );
    }

    if (x1) {
      return <img src={x1}/>;
    }

    return <div className={style.empty}/>;
  };

  ResponsiveImage.validate = createValidate(conditions);
  return ResponsiveImage;
};
