export default {
  props: {
    title: 'Coorpacademy header',
    productCardProps: {
      title: 'up_good_name',
      subtitle: 'up_good_description',
      price: '9,9',
      currency: '€',
      checkImage: 'http://iconshow.me/media/images/Mixed/small-n-flat-icon/png2/256/-sign-check.png'
    },
    promoCodeProps: {
      promoCodeDescription: 'up_good_description',
      promoCodeError: 'promo_code_not_found_error',
      onValidate() {},
      promoCode: ''
    },
    paymentFormProps: {
      checkImage: 'http://iconshow.me/media/images/Mixed/small-n-flat-icon/png2/256/-sign-check.png',
      cardsImage: 'http://victoriorestaurant.com/wp-content/uploads/2014/06/credit-cards.png',
      cardOwnerEmail: 'email@coorpacademy.com',
      securedPaymentImage: 'http://simpleicon.com/wp-content/uploads/lock-2.png',
      stripeKeyPublic: 'key',
      errors: 'invalid_expiry_year_past',
      warning: 'incomplete_number',
      createSubscription() {},
      onCardNumberChange() {},
      cardNumberHasError: true,
      onCardExpiryChange() {},
      cardExpiryHasError: true,
      onCardCvcChange() {},
      cardCvcHasError: true,
      submitButtonEnabled: true
    },
    backUrl: 'back url'
  }
};
