import {checker, createValidate} from '../../util/validation';
import createPicture from '../../atom/picture';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    logout: checker.string.optional,
    logoutValue: checker.string.optional,
    href: checker.string.optional,
    user: checker.shape({
      username: checker.string,
      image: checker.string
    }),
    logo: checker.string.optional
  })
});

export default (treant, options = {}) => {
  const {h} = treant;
  const Picture = createPicture(treant, options);

  const SetupHeader = (props, children) => {
    const {logout, logoutValue, href, user, logo} = props;

    return (
      <div className={style.wrapper}>
        <div className={style.user}>
          <div className={style.avatar}>
            <img src={user.image} />
          </div>
          <div className={style.username}>
            {user.username}
          </div>
        </div>
        <div className={style.logo}>
          <a href={href}>
            <Picture src={logo} />
          </a>
        </div>
        <div className={style.logout}>
          <a href={logout}>
            {logoutValue}
          </a>
        </div>
      </div>
    );
  };

  SetupHeader.validate = createValidate(conditions);
  return SetupHeader;
};
