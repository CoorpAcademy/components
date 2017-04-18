import React, {PropTypes} from 'react';
import style from './style.css';

class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.stripe = props.stripeInstance ? props.stripeInstance(props.stripeKeyPublic) : null;
    this.state = {
      cardNumberHasError: false,
      cardExpiryHasError: false,
      cardCvcHasError: false,
      submitButtonEnabled: true
    };
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

      this.cardNumber.on('change', ({error}) => {
        this.setState({
          cardNumberHasError: error,
          submitButtonEnabled: true
        });
      });

      this.cardExpiry.on('change', ({error}) => {
        this.setState({
          cardExpiryHasError: error,
          submitButtonEnabled: true
        });
      });

      this.cardCvc.on('change', ({error}) => {
        this.setState({
          cardCvcHasError: error,
          submitButtonEnabled: true
        });
      });
    }
  }

  componentWillUnmount() {
    this.cardNumber.unmount();
    this.cardExpiry.unmount();
    this.cardCvc.unmount();
  }

  handleSubmit() {
    if (this.stripe) {
      return this.stripe.createToken(this.cardNumber)
      .then(response => {
        if (!response.error)
          this.setState({submitButtonEnabled: false});
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
      errors,
      warning
    } = this.props;

    const {
      cardNumberHasError,
      cardExpiryHasError,
      cardCvcHasError,
      submitButtonEnabled
    } = this.state;

    const { translate } = this.context;

    const handleSubmit = () => this.handleSubmit();
    const disabled = submitButtonEnabled ? {} : {disabled: true};

    return (
      <div className={style.paymentForm}>
        <div className={style.acceptedCards}>
          <img
            className={style.acceptedCardsCheck}
            src={checkImage}
          />
          <div className={style.acceptedCardsText}>{translate(acceptedCardsText)}</div>
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
        {errors && <div className={style.paymentErrors}>- {translate(errors)}</div>}
        {warning && <div className={style.paymentWarning}>- {translate(warning)}</div>}
        <div className={style.securedPayment}>
          <img
            className={style.securedPaymentImage}
            src={securedPaymentImage}
          />
          <div className={style.securedPaymentText}>{translate(securedPaymentText)}</div>
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
        <div className={style.subscriptionDisclaimer}>{translate(disclaimer)}</div>
        <div className={style.subscribeButtonContainer}>
          <button
            className={style.subscribeButton}
            type="button"
            onClick={handleSubmit}
            {...disabled}
          >{translate(submitText)}</button>
        </div>
      </div>
    );
  }
}

PaymentForm.contextTypes = {
  translate: PropTypes.func
};

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
  errors: PropTypes.string,
  warning: PropTypes.string
};

export default PaymentForm;
