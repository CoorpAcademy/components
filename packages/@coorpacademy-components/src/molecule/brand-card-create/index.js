import Inferno from 'inferno';
import {checker, createValidate} from '../../util/validation';
import Link from '../../atom/link';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    edit: checker.string,
    editHref: checker.string
  }),
  children: checker.none
});

const BrandCardCreate = ({children, ...props}) => {
  const {
    edit,
    editHref
  } = props;

  return (
    <div className={style.wrapper}>
      <div className={style.circle1}></div>
      <div className={style.circle2}></div>
      <div className={style.circle3}></div>
      <div className={style.edit}>
        <Link href={editHref}><span>{edit}</span></Link>
      </div>
    </div>
  );
};

BrandCardCreate.validate = createValidate(conditions);
export default BrandCardCreate;
