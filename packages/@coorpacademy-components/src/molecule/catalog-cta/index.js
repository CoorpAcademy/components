import React from 'react';
import PropTypes from 'prop-types';
import StarRating from '../../molecule/star-rating';
import {hoverFill} from '../../atom/button/hover-fill.css';
import style from './style.css';

const CatalogCTA = (props, context) => {
  const {rating, maxRating, linkBuy = '#', linkTry = '#'} = props;
  const {translate} = context;

  const startLearning = (
    <span
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: translate('Start <span>learning</span>')
      }}
    />
  );
  const premium = (
    <span
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: translate('Coorpacademy <span>subscription</span>')
      }}
    />
  );

  return (
    <div className={style.head}>
      <div className={style.starRating}>
        <StarRating rating={rating} total={maxRating} />
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
  translate: PropTypes.func
};

CatalogCTA.propTypes = {
  rating: PropTypes.number,
  maxRating: PropTypes.number,
  linkTry: PropTypes.string,
  linkBuy: PropTypes.string
};
export default CatalogCTA;
