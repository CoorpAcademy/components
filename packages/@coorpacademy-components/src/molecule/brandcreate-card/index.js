import {checker, createValidate} from '../../util/validation';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    title: checker.string,
    edit: checker.string,
    editHref: checker.string,
    image: checker.string
  }),
  children: checker.none
});

export default (treant, options = {}) => {
  const {h} = treant;

  const BrandcreateCard = (props, children) => {
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
          <div className={style.edit}>
            <a href={editHref}>{edit}</a>
          </div>
        </div>
      </div>
    );
  };

  BrandcreateCard.validate = createValidate(conditions);
  return BrandcreateCard;
};
