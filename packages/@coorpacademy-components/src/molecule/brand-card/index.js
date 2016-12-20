import React from 'react';
import {checker, createValidate} from '../../util/validation';
import Link from '../../atom/link';
import Picture from '../../atom/picture';
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

const BrandCard = ({children, ...props}) => {
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
          <Link target='_blank' href={seeHref}>{see}</Link>
        </div>
      </div>
    </div>
  );
};

BrandCard.validate = createValidate(conditions);
export default BrandCard;
