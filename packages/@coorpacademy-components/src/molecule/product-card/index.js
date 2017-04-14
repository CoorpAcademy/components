import React, {PropTypes} from 'react';
import style from './style.css';

const ProductCard = (props, context) => {
  const {
    title,
    subtitle,
    price,
    cancelText,
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
        <div className={style.productHeaderTitle}>{translate(title)}</div>
        <div className={style.productHeaderSubtitle}>{translate(subtitle)}</div>
      </div>
      <div className={style.productBody}>
        <div className="product__description">{items}</div>
        <hr className={style.productSeparation} />
        <div className={style.productPrice}>
          <div className={style.priceValue}>{price}{translate('currency_per_month')}</div>
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
  price: PropTypes.string.isRequired,
  cancelText: PropTypes.string.isRequired,
  checkImage: PropTypes.string.isRequired
};

export default ProductCard;
