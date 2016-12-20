import React from 'react';
import identity from 'lodash/fp/identity';
import {checker, createValidate} from '../../util/validation';
import StarRating from '../../molecule/star-rating';
import style from './style.css';
import {hoverFill} from '../../atom/button/hover-fill.css';

const conditions = checker.shape({
  props: checker.shape({
    rating: checker.number.optional,
    maxRating: checker.number.optional,
    linkTry: checker.string.optional,
    linkBuy: checker.string.optional
  }),
  children: checker.none
});

class CatalogCTA extends React.Component {
  render() {
    const {
      rating,
      maxRating,
      linkBuy = '#',
      linkTry = '#'
    } = this.props;
    const {translate} = this.context;


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
  }
};

CatalogCTA.contextTypes = {
  translate: React.PropTypes.function
}

CatalogCTA.validate = createValidate(conditions);
export default CatalogCTA;
