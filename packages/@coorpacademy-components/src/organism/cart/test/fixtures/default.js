export default {
  props: {
    cartHeaderProps: {
      title: 'On a marché sur la lune'
    },
    productCardProps: {
      title: 'Produit',
      subtitle: 'P0',
      descriptionItems: [],
      price: '9.9',
      cancelText: 'Annuler',
      checkImage: 'image'
    },
    promoCodeProps: {
      promoCodePlaceholder: 'placeholder',
      promoCodeSubmit: 'Appliquer',
      promoCodeDescription: 'description',
      promoCodeError: 'error',
      onValidate() {}
    },
    paymentFormProps: {
      submitText: 'Payer',
      checkImage: 'checkImage',
      cardsImage: 'cards',
      cardOwnerEmail: 'email',
      acceptedCardsText: 'visa',
      securedPaymentText: 'sécurisé',
      securedPaymentImage: 'image',
      stripeKeyPublic: 'key',
      disclaimer: 'attention',
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
