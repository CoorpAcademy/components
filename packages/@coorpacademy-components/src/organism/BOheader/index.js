import {checker, createValidate} from '../../util/validation';
import createPicture from '../../atom/picture';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    hrefdeco: checker.string.optional,
    href: checker.string.optional,
    username: checker.string,
    srcUser: checker.string,
    src: checker.oneOfType([
      checker.string,
      checker.objectOf(checker.url)
    ]).optional
  })
});

export default (treant, options = {}) => {
  const {h} = treant;
  const Picture = createPicture(treant, options);
  

  const BoHeader = (props, children) => {
    const {src, href, hrefdeco, deconnexion, srcUser, username} = props;

    return (
        <div className={style.static}>
          <div className={style.user}>
            <div className={style.avatar}>
              <img src={srcUser} />
            </div>
            <div className={style.username}>
              {username}
            </div>
          </div>
          <div className={style.logo}>
            <a href={href}>
              <Picture src={src} />
            </a>
          </div>
          <div className={style.deco}>
            <a href={hrefdeco}>
             {deconnexion}
            </a>
          </div>
        </div>
    );
  };

  BoHeader.validate = createValidate(conditions);
  return BoHeader;
};
