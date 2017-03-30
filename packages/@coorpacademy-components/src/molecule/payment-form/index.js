import React, {PropTypes} from 'react';

class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.stripe = window.Stripe ? window.Stripe(props.stripeKeyPublic) : null;
  }

  componentDidMount() {
    if (this.stripe) {
      const elements = this.stripe.elements();
      this.cardNumber = elements.create('cardNumber');
      const cardExpiry = elements.create('cardExpiry');
      const cardCvc = elements.create('cardCvc');

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
      cardOwnerEmail,
      acceptedCardsText,
      securedPaymentText,
      disclaimer,
      errors
    } = this.props;

    const handleSubmit = () => this.handleSubmit();

    return (
      <div className="paymentForm">
        <div className="acceptedCards">{acceptedCardsText}</div>
        <div className="creditCardOwnerEmail">{cardOwnerEmail}</div>
        {errors && <div className="paymentErrors">{errors}</div>}
        <div className="securedPayment">{securedPaymentText}</div>
        <div id="card-number" />
        <div id="card-expiry" />
        <div id="card-cvc" />
        <div className="subscriptionDisclaimer">{disclaimer}</div>
        <input
          type="button"
          value={submitText}
          onClick={handleSubmit}
        />
      </div>
    );
  }
}

PaymentForm.propTypes = {
  submitText: PropTypes.string.isRequired,
  stripeKeyPublic: PropTypes.string.isRequired,
  createSubscription: PropTypes.func.isRequired,
  cardOwnerEmail: PropTypes.string,
  acceptedCardsText: PropTypes.string,
  securedPaymentText: PropTypes.string,
  disclaimer: PropTypes.string,
  errors: PropTypes.string
};

export default PaymentForm;
