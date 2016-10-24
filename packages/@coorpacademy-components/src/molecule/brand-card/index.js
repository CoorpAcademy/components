import {checker, createValidate} from '../../util/validation';
import createLink from '../../atom/link';
import createPicture from '../../atom/picture';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string,
    edit: checker.string,
    editHref: checker.string,
    see: checker.string,
    seeHref: checker.string,
    image: checker.string
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const Link = createLink(treant, options);
  const Picture = createPicture(treant, options);

  const BrandCard = (props, children) => {
    const {
      title,
      edit,
      editHref,
      see,
      seeHref,
      image
    } = props;

    return (
      <div className={style.wrapper}>
        <div className={style.image}>
          <Picture className={style.picture} src={image}/>
        </div>
        <div className={style.information}>
          <h3>{title}</h3>
          <div className={style.edit}>
            <Link href={editHref}>{edit}</Link>
          </div>
          <div className={style.see}>
            <Link href={seeHref}>{see}</Link>
          </div>
        </div>
      </div>
    );
  };

  BrandCard.validate = createValidate(conditions);
  return BrandCard;
};
