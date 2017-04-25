import React, {PropTypes} from 'react';
import template from 'lodash/fp/template';
import style from './style.css';

const ProductCard = (props, context) => {
  const {
    title,
    subtitle,
    price,
    currency,
    checkImage
  } = props;

  const { translate } = context;

  const descriptionItemTranslationKeys = [
    'product_desc_culture',
    'product_desc_partnership',
    'product_desc_battle',
    'product_desc_coach',
    'product_desc_forum',
    'product_desc_certificates'
  ];

  const priceTemplate = translate('subscription_price');
  const priceValue = template(priceTemplate)({price, currency});

  const items = descriptionItemTranslationKeys.map((itemTranslationKey, index) => {
    return (
      <div
        className={style.productDescriptionItem}
        key={index}
      >
        <img
          className={style.productCheckbox}
          src={checkImage}
        />
        <div className={style.productDescriptionText}>{translate(itemTranslationKey)}</div>
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
  translate: PropTypes.func
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  checkImage: PropTypes.string.isRequired
};

export default ProductCard;
