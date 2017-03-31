import React, {PropTypes} from 'react';
import style from './style.css';

class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.stripe = window.Stripe ? window.Stripe(props.stripeKeyPublic) : null;
  }

  componentDidMount() {
    if (this.stripe) {
      const elements = this.stripe.elements();

      const elementStyle = {
        base: {
          '::placeholder': {
            color: '#546E7A',
            fontSize: '16px',
            fontFamily: 'Open Sans'
          }
        }
      };

      this.cardNumber = elements.create('cardNumber', {style: elementStyle});
      const cardExpiry = elements.create('cardExpiry', {style: elementStyle});
      const cardCvc = elements.create('cardCvc', {style: elementStyle});

      this.cardNumber.mount('#card-number');
      cardExpiry.mount('#card-expiry');
      cardCvc.mount('#card-cvc');
    }
  }

  handleSubmit() {
    if (this.stripe) {
      return this.stripe.createToken(this.cardNumber)
      .then(response => {
        return this.props.createSubscription(response);
      });
    }
  }

  render() {
    const {
      submitText,
      checkImage,
      cardsImage,
      cardOwnerEmail,
      acceptedCardsText,
      securedPaymentText,
      securedPaymentImage,
      disclaimer,
      errors
    } = this.props;

    const handleSubmit = () => this.handleSubmit();

    return (
      <div className={style.paymentForm}>
        <div className={style.acceptedCards}>
          <img
            className={style.acceptedCardsCheck}
            src={checkImage}
          />
          <div className={style.acceptedCardsText}>{acceptedCardsText}</div>
          <img
            className={style.acceptedCardsImage}
            src={cardsImage}
          />
        </div>
        <div className={style.creditCardOwnerEmail}>
          <hr className={style.creditCardOwnerEmailSeparator} />
          <div className={style.creditCardOwnerEmailText}>{cardOwnerEmail}</div>
          <hr className={style.creditCardOwnerEmailSeparator} />
        </div>
        {errors && <div className={style.paymentErrors}>{errors}</div>}
        <div className={style.securedPayment}>
          <img
            className={style.securedPaymentImage}
            src={securedPaymentImage}
          />
          <div className={style.securedPaymentText}>{securedPaymentText}</div>
        </div>
        <div className={style.cardBlock}>
          <div
            className={style.cardNumber}
            id="card-number"
          />
        </div>
        <div className={style.cardBlock}>
          <div
            className={style.cardExpiry}
            id="card-expiry"
          />
          <div
            className={style.cardCvc}
            id="card-cvc"
          />
        </div>
        <div className={style.subscriptionDisclaimer}>{disclaimer}</div>
        <div className={style.subscribeButtonContainer}>
          <button
            className={style.subscribeButton}
            type="button"
            onClick={handleSubmit}
          >{submitText}</button>
        </div>
      </div>
    );
  }
}

PaymentForm.propTypes = {
  submitText: PropTypes.string.isRequired,
  stripeKeyPublic: PropTypes.string.isRequired,
  createSubscription: PropTypes.func.isRequired,
  checkImage: PropTypes.string.isRequired,
  cardsImage: PropTypes.string.isRequired,
  cardOwnerEmail: PropTypes.string,
  acceptedCardsText: PropTypes.string,
  securedPaymentText: PropTypes.string,
  securedPaymentImage: PropTypes.string,
  disclaimer: PropTypes.string,
  errors: PropTypes.string
};

export default PaymentForm;
