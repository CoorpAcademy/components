import get from 'lodash/fp/get';
import identity from 'lodash/fp/identity';
import getOr from 'lodash/fp/getOr';
import {checker, createValidate} from '../../util/validation';
import createLink from '../../atom/link';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    url: checker.string,
    title: checker.string
  }).strict,
  children: checker.none
});

export default (treant, options = {}) => {
  const Link = createLink(treant, options);
  const {h} = treant;
  const {skin, translate = identity} = options;
  const bg = get('images.hero', skin);


  const Hero = (props, children) => {
    const {url, title} = props;
    const text = translate(title);

    return (
      <div
        className={style.hero}
        style={{
          backgroundImage: `url(${bg})`
        }}
      >
          <div className={style.ctaHover}
                style={{
                  backgroundColor: getOr('#fff', 'common.primary', skin)
                }}
              >
              <div className={style.labelHover}>
                <span>{text}</span>
            </div>
           </div> 
          <Link
            href={url}
            className={style.cta}>
            <div className={style.label}>
              <span
                style={{
                  color: getOr('#00b0ff', 'common.primary', skin)
                }}
              >{text}</span>
            </div>
          </Link>
              
      </div>
    );
  };

  Hero.validate = createValidate(conditions);
  return Hero;
};
