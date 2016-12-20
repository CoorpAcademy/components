import React from 'react';
import {checker, createValidate} from '../../util/validation';
import Picture from '../../atom/picture';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    image: checker.string.optional,
    title: checker.string.optional,
    description: checker.string.optional
  }),
  children: checker.none
});

const CursusHeader = ({children, ...props}) => {
  const {image, title, description} = props;

  const imageView = image && (
    <Picture
      src={image}
    />
  );

  return (
    <div>
      <div className={style.imgWrapper}>
        {imageView}
        <div className={style.title}>
          {title}
        </div>
      </div>
      <div className={style.courseWrapper}>
          <div className={style.desc}>
            {description}
          </div>
      </div>
    </div>
  );
};

CursusHeader.validate = createValidate(conditions);
export default CursusHeader;
