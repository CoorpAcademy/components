import React from 'react';
import PropTypes from 'prop-types';
import template from 'lodash/fp/template';
import Provider from '../../atom/provider';
import style from './style.css';

const ProductCard = (props, context) => {
  const {title, subtitle, price, currency, checkImage} = props;

  const {translate} = context;

  const descriptionItemTranslationKeys = [
    translate('product_desc_culture'),
    translate('product_desc_partnership'),
    translate('product_desc_battle'),
    translate('product_desc_coach'),
    translate('product_desc_forum'),
    translate('product_desc_certificates')
  ];

  const priceTemplate = translate('subscription_price');
  const priceValue = template(priceTemplate)({price, currency});

  const items = descriptionItemTranslationKeys.map((itemDescription, index) => {
    return (
      <div className={style.productDescriptionItem} key={index}>
        <img className={style.productCheckbox} src={checkImage} />
        <div className={style.productDescriptionText}>{itemDescription}</div>
      </div>
    );
  });

  return (
    <div className={style.product}>
      <div className={style.productHeader}>
        <div className={style.productHeaderTitle}>{title}</div>
        <div className={style.productHeaderSubtitle}>{subtitle}</div>
      </div>
      <div className={style.productBody}>
        <div className="product__description">{items}</div>
        <hr className={style.productSeparation} />
        <div className={style.productPrice}>
          <div className={style.priceValue}>{priceValue}</div>
          <div className={style.cancelText}>{translate('product_cancel')}</div>
        </div>
      </div>
    </div>
  );
};

ProductCard.contextTypes = {
  translate: Provider.childContextTypes.translate
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  checkImage: PropTypes.string.isRequired
};

export default ProductCard;
