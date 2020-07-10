import React from 'react';
import PropTypes from 'prop-types';
import Provider from '../provider';
import style from './style.css';

const PromoCode = (props, context) => {
  const {promoCodeDescription, promoCodeError, onValidate, handlePromoCodeChange} = props;

  const {translate} = context;

  return (
    <div className={style.promoCode}>
      <div className={style.promoCodeInputAndButton}>
        <input
          type="text"
          placeholder={translate('zuora_discount_code')}
          className={`
            ${style.promoCodeInput}
            ${promoCodeError && style.promoCodeButtonOnError}
            ${promoCodeDescription && style.promoCodeButtonOnSuccess}
          `}
          onChange={handlePromoCodeChange}
        />
        <button type="submit" onClick={onValidate} className={style.promoCodeButton}>
          {translate('zuora_discount_code_submit')}
        </button>
      </div>
      {promoCodeDescription ? (
        <div className={style.promoCodeDescription}>-{promoCodeDescription}</div>
      ) : null}
      {promoCodeError ? <div className={style.promoCodeError}>-{promoCodeError}</div> : null}
    </div>
  );
};

PromoCode.contextTypes = {
  translate: Provider.childContextTypes.translate
};

PromoCode.propTypes = {
  promoCodeDescription: PropTypes.string,
  promoCodeError: PropTypes.string,
  onValidate: PropTypes.func.isRequired,
  handlePromoCodeChange: PropTypes.func.isRequired
};

export default PromoCode;
