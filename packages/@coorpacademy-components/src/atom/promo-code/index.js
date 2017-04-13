import React, {PropTypes, Component} from 'react';
import shallowCompare from '../../util/shallow-compare';
import style from './style.css';

class PromoCode extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.attachInputRef = this.attachInputRef.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return shallowCompare(this, nextProps, nextState, nextContext);
  }

  handleButtonClick() {
    this.props.onValidate(this.codeInput.value);
  }

  attachInputRef(input) {
    this.codeInput = input;
  }

  render() {
    const {
      promoCodePlaceholder,
      promoCodeSubmit,
      promoCodeDescription,
      promoCodeError,
      onValidate
    } = this.props;

    return (
      <div className={style.promoCode}>
        <div className={style.promoCodeInputAndButton}>
          <input
            type="text"
            placeholder={promoCodePlaceholder}
            required
            ref={this.attachInputRef}
            className={`
              ${style.promoCodeInput}
              ${this.props.promoCodeError && style.promoCodeButtonOnError}
              ${this.props.promoCodeDescription && style.promoCodeButtonOnSuccess}
            `}
          />
          <button
            type="submit"
            onClick={this.handleButtonClick}
            className={style.promoCodeButton}
          >
            {promoCodeSubmit}
          </button>
        </div>
        {
          this.props.promoCodeDescription &&
          <div className={style.promoCodeDescription}>
            - {promoCodeDescription}
          </div>
        }
        {
          this.props.promoCodeError &&
          <div className={style.promoCodeError}>
            - {promoCodeError}
          </div>
        }
      </div>
    );
  }
}

PromoCode.propTypes = {
  promoCodePlaceholder: PropTypes.string.isRequired,
  promoCodeSubmit: PropTypes.string.isRequired,
  promoCodeDescription: PropTypes.string,
  promoCodeError: PropTypes.string,
  onValidate: PropTypes.func.isRequired
};

export default PromoCode;
