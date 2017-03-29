import React, {PropTypes, Component} from 'react';

class PromoCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promoCode: ''
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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
      <div>
        <div>
          <input
            type="text"
            placeholder={promoCodePlaceholder}
            required
            onChange={this.handleInputChange}
            value={promoCode}
          />
          <button
            type="submit"
            onClick={this.handleButtonClick}
          >{promoCodeSubmit}</button>
        </div>
        <div>
          {promoCodeDescription}
        </div>
        <div>
          {promoCodeError}
        </div>
      </div>
    );
  }
}

PromoCode.propTypes = {
  promoCodePlaceholder: PropTypes.string.isRequired,
  promoCodeSubmit: PropTypes.string.isRequired,
  promoCodeDescription: PropTypes.string.isRequired,
  promoCodeError: PropTypes.string.isRequired,
  onValidate: PropTypes.func.isRequired
};

export default PromoCode;
