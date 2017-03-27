import React, {PropTypes} from 'react';
import Price from '../../atom/price';

const ProductCard = props => {
  const {
    title,
    subtitle,
    descriptionItems,
    price,
    cancelText
  } = props;

  const items = descriptionItems.map(item => {
    return (
      <div className="product-description__item">
        <div className="item__checkbox"></div>
        <div className="item__text">{item}</div>
      </div>
    );
  });

  return (
    <div className="product">
      <div className="product__header">
        <div className="product-header__title">{title}</div>
        <div className="product-header__subtitle">{subtitle}</div>
      </div>
      <div className="product__body">
        <div className="product__description">{items}</div>
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
  cancelText: PropTypes.string.isRequired
};

export default ProductCard;
