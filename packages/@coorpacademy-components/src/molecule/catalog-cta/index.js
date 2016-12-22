import React, {PropTypes} from 'react';
import identity from 'lodash/fp/identity';
import StarRating from '../../molecule/star-rating';
import style from './style.css';
import {hoverFill} from '../../atom/button/hover-fill.css';

const CatalogCTA = (props, context) => {
  const {
    rating,
    maxRating,
    linkBuy = '#',
    linkTry = '#'
  } = props;
  const {
    translate = identity
  } = context;


  const startLearning = (
    <span
      dangerouslySetInnerHTML={{__html: translate('Start <span>learning</span>')}}
    />
  );
  const premium = (
    <span
    dangerouslySetInnerHTML={{__html: translate('Coorpacademy <span>subscription</span>')}}
    />
  );

  return (
    <div className={style.head}>
      <div className={style.starRating}>
        <StarRating
          rating={rating}
          total={maxRating}
        />
      </div>
        <a className={`${style.try} ${hoverFill}`} href={linkTry}>
          {startLearning}
        </a>
        <a className={`${style.buy} ${hoverFill}`} href={linkBuy}>
          {premium}
        </a>
    </div>
  );
};

CatalogCTA.contextTypes = {
  translate: React.PropTypes.func
}

CatalogCTA.propTypes = {
  rating: PropTypes.number,
  maxRating: PropTypes.number,
  linkTry: PropTypes.string,
  linkBuy: PropTypes.string
};
export default CatalogCTA;
