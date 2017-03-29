import React, {PropTypes} from 'react';
import style from './style.css';

const ProductCard = props => {
  const {
    title,
    subtitle,
    descriptionItems,
    price,
    cancelText,
    checkImage
  } = props;

  const items = descriptionItems.map(item => {
    return (
      <div className={style.productDescription}>
        <img
          className={style.productCheckbox}
          src={checkImage}
        />
        <div className="item__text">{item}</div>
      </div>
    );
  });

  return (
    <div className={style.product}>
      <div className={style.productHeader}>
        <div className={style.productHeaderTitle}>{title}</div>
        <div className={style.productHeaderSubtitle}>{subtitle}</div>
      </div>
      <div className="{style.productBody}">
        <div className="product__description">{items}</div>
        <hr className="productSeparation" />
        <div className="product__price">
          <div className="price__value">{price}</div>
          <div className="price__cancel">{cancelText}</div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  descriptionItems: PropTypes.array.isRequired,
  price: PropTypes.string.isRequired,
  cancelText: PropTypes.string.isRequired,
  checkImage: PropTypes.string.isRequired
};

export default ProductCard;
