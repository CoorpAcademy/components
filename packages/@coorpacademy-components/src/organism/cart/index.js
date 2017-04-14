import React, {PropTypes} from 'react';
import ProductCard from '../../molecule/product-card';
import PromoCode from '../../atom/promo-code';
import PaymentForm from '../../molecule/payment-form';

import style from './style.css';

const Cart = ({
        cartHeaderProps,
        productCardProps,
        promoCodeProps,
        paymentFormProps,
        backUrl,
        backTitle,
        title
    }) => (
      <div className={style.parent}>
        <div className={style.titleContainer}>
          <div className={style.headerTitle}>{title}</div>
        </div>
        <div className={style.cart}>
          <div className={style.productBlock}>
            <ProductCard {...productCardProps} />
            <PromoCode {...promoCodeProps} />
          </div>
          <div className={style.paymentBlock}>
            <PaymentForm {...paymentFormProps} />
            <a
              className={style.backButton}
              href={backUrl}
            >{backTitle}</a>
          </div>
        </div>
      </div>
);

Cart.PropTypes = {
  cartHeaderProps: PropTypes.object,
  productCardProps: PropTypes.object,
  promoCodeProps: PropTypes.object,
  paymentFormProps: PropTypes.object,
  backUrl: PropTypes.string,
  backTitle: PropTypes.string
};

export default Cart;
