import {checker, createValidate} from '../../util/validation';
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
          <img src={image}/>
        </div>
        <div className={style.information}>
          <h3>{title}</h3>
          <div className={style.edit}>
            <a href={editHref}>{edit}</a>
          </div>
          <div className={style.see}>
            <a href={seeHref}>{see}</a>
          </div>
        </div>
      </div>
    );
  };

  BrandCard.validate = createValidate(conditions);
  return BrandCard;
};
