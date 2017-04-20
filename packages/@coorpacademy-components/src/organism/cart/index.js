import React, {PropTypes} from 'react';
import ProductCard from '../../molecule/product-card';
import PromoCode from '../../atom/promo-code';
import PaymentForm from '../../molecule/payment-form';

import style from './style.css';

const Cart = (props, context) => {
  const {
    productCardProps,
    promoCodeProps,
    paymentFormProps,
    backUrl,
    title
  } = props;
  const { translate } = context;

  return (
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
          >{translate('back_to_catalog')}</a>
        </div>
      </div>
    </div>
  );
};

Cart.contextTypes = {
  translate: PropTypes.func
};

Cart.propTypes = {
  productCardProps: ProductCard.propTypes,
  promoCodeProps: PromoCode.propTypes,
  paymentFormProps: PaymentForm.propTypes,
  backUrl: PropTypes.string,
  title: PropTypes.string
};

export default Cart;
