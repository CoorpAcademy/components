import React, {PropTypes} from 'react';
import style from './style.css';

class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.stripe = props.stripeInstance ? props.stripeInstance(props.stripeKeyPublic) : null;
    this.handleCardNumberChange = this.handleCardNumberChange.bind(this);
    this.handleCardExpiryChange = this.handleCardExpiryChange.bind(this);
    this.handleCardCvcChange = this.handleCardCvcChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.stripe) {
      const elements = this.stripe.elements();

      const elementOptions = {
        style: {
          base: {
            iconStyle: 'solid',
            color: '#546E7A',
            fontSize: '16px',
            fontFamily: '"Open Sans"',
            '::placeholder': {
              color: '#546E7A',
              fontSize: '16px',
              fontFamily: '"Open Sans"'
            }
          }
        }
      };

      this.cardNumber = elements.create('cardNumber', elementOptions);
      this.cardExpiry = elements.create('cardExpiry', elementOptions);
      this.cardCvc = elements.create('cardCvc', elementOptions);

      this.cardNumber.mount('#card-number');
      this.cardExpiry.mount('#card-expiry');
      this.cardCvc.mount('#card-cvc');

      this.cardNumber.on('change', this.handleCardNumberChange);
      this.cardExpiry.on('change', this.handleCardExpiryChange);
      this.cardCvc.on('change', this.handleCardCvcChange);
    }
  }

  componentWillUnmount() {
    if (this.cardNumer) {
      this.cardNumber.unmount();
      this.cardNumber.off('change', this.handleCardNumberChange);
    }
    if (this.cardExpiry) {
      this.cardExpiry.unmount();
      this.cardExpiry.off('change', this.handleCardExpiryChange);
    }
    if (this.cardCvc) {
      this.cardCvc.unmount();
      this.cardCvc.off('change', this.handleCardCvcChange);
    }
  }

  handleSubmit() {
    if (this.stripe) {
      return this.stripe.createToken(this.cardNumber)
      .then(response => {
        return this.props.onSubscription(response);
      });
    }
  }

  handleCardNumberChange({error}) {
    const {onCardNumberChange = () => {}} = this.props;
    onCardNumberChange(error);
  }

  handleCardExpiryChange({error}) {
    const {onCardExpiryChange = () => {}} = this.props;
    onCardExpiryChange(error);
  }

  handleCardCvcChange({error}) {
    const {onCardCvcChange = () => {}} = this.props;
    onCardCvcChange(error);
  }

  render() {
    const {
      checkImage,
      cardsImage,
      cardOwnerEmail,
      securedPaymentImage,
      errors,
      warning,
      submitButtonEnabled,
      cardNumberHasError,
      cardExpiryHasError,
      cardCvcHasError
    } = this.props;

    const { translate } = this.context;

    return (
      <div className={style.paymentForm}>
        <div className={style.acceptedCards}>
          <img
            className={style.acceptedCardsCheck}
            src={checkImage}
          />
          <div className={style.acceptedCardsText}>{translate('accepted_cards')}</div>
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
        {errors && <div className={style.paymentErrors}>- {errors}</div>}
        {warning && <div className={style.paymentWarning}>- {warning}</div>}
        <div className={style.securedPayment}>
          <img
            className={style.securedPaymentImage}
            src={securedPaymentImage}
          />
          <div className={style.securedPaymentText}>{translate('secured_payment')}</div>
        </div>
        <div className={style.cardBlock}>
          <div
            className={`${style.cardNumber} ${cardNumberHasError && style.invalidElement}`}
            id="card-number"
          />
        </div>
        <div className={style.cardBlock}>
          <div
            className={`${style.cardExpiry} ${cardExpiryHasError && style.invalidElement}`}
            id="card-expiry"
          />
          <div
            className={`${style.cardCvc} ${cardCvcHasError && style.invalidElement}`}
            id="card-cvc"
          />
        </div>
        <div className={style.subscriptionDisclaimer}>{translate('subscription_disclaimer')}</div>
        <div className={style.subscribeButtonContainer}>
          <button
            className={style.subscribeButton}
            type="button"
            onClick={this.handleSubmit}
            disabled={!submitButtonEnabled}
          >{translate('payment_form_submit')}</button>
        </div>
      </div>
    );
  }
}

PaymentForm.contextTypes = {
  translate: PropTypes.func
};

PaymentForm.propTypes = {
  stripeKeyPublic: PropTypes.string.isRequired,
  stripeInstance: PropTypes.func.isRequired,
  onSubscription: PropTypes.func.isRequired,
  checkImage: PropTypes.string.isRequired,
  cardsImage: PropTypes.string.isRequired,
  cardOwnerEmail: PropTypes.string,
  securedPaymentImage: PropTypes.string,
  errors: PropTypes.string,
  warning: PropTypes.string,
  onCardNumberChange: PropTypes.func,
  cardNumberHasError: PropTypes.bool,
  onCardExpiryChange: PropTypes.func,
  cardExpiryHasError: PropTypes.bool,
  onCardCvcChange: PropTypes.func,
  cardCvcHasError: PropTypes.bool,
  submitButtonEnabled: PropTypes.bool
};

export default PaymentForm;
