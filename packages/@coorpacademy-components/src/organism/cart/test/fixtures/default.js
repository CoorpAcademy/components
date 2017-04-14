export default {
  props: {
    title: 'Coorpacademy header',
    productCardProps: {
      title: 'Product title',
      subtitle: 'Product subtitle',
      descriptionItems: ['item1', 'item2', 'item3'],
      price: '9.9€',
      cancelText: 'Cancel at any time.',
      checkImage: 'http://iconshow.me/media/images/Mixed/small-n-flat-icon/png2/256/-sign-check.png'
    },
    promoCodeProps: {
      promoCodePlaceholder: 'Enter a promo code',
      promoCodeSubmit: 'Apply',
      promoCodeDescription: 'Valid promo code',
      promoCodeError: 'Invalid promo code',
      onValidate() {}
    },
    paymentFormProps: {
      submitText: 'Pay',
      checkImage: 'http://iconshow.me/media/images/Mixed/small-n-flat-icon/png2/256/-sign-check.png',
      cardsImage: 'http://victoriorestaurant.com/wp-content/uploads/2014/06/credit-cards.png',
      cardOwnerEmail: 'email',
      acceptedCardsText: 'Accepted cards',
      securedPaymentText: 'Secured payment',
      securedPaymentImage: 'http://simpleicon.com/wp-content/uploads/lock-2.png',
      stripeKeyPublic: 'key',
      disclaimer: `This is a big disclaimer. Burgdoggen meatball tri-tip ground round.
      Ribeye boudin flank, t-bone shoulder jowl turducken beef ribs short ribs rump.
      Shankle filet mignon leberkas ribeye kevin. Filet mignon turkey jowl brisket leberkas strip steak
      capicola shank landjaeger tongue.`,
      errors: 'errors',
      warning: 'warning',
      createSubscription() {}
    },
    backUrl: 'back url',
    backTitle: 'title',
    translations: {
      titles: {}
    }
  }
};
