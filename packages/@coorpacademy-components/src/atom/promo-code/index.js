import React, {PropTypes, Component} from 'react';
import shallowCompare from '../../util/shallow-compare';
import style from './style.css';

class PromoCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promoCode: ''
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return shallowCompare(this, nextProps, nextState, nextContext);
  }

  handleButtonClick() {
    const { promoCode } = this.state;
    this.props.onValidate(promoCode);
  }

  handleInputChange(e) {
    this.setState({
      promoCode: e.target.value
    });
  }

  render() {
    const {
      promoCodePlaceholder,
      promoCodeSubmit,
      promoCodeDescription,
      promoCodeError,
      onValidate
    } = this.props;

    const {
      promoCode
    } = this.state;

    return (
      <div className={style.promoCode}>
        <div className={style.promoCodeInputAndButton}>
          <input
            type="text"
            placeholder={promoCodePlaceholder}
            required
            onChange={this.handleInputChange}
            value={promoCode}
            className={style.promoCodeInput}
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
