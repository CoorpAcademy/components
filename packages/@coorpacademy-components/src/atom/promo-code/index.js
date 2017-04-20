import React, {PropTypes} from 'react';
import shallowCompare from '../../util/shallow-compare';
import style from './style.css';

const PromoCode = (props, context) => {
  const {
    promoCodeDescription,
    promoCodeError,
    onValidate,
    handlePromoCodeChange
  } = props;

  const { translate } = context;

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
        <button
          type="submit"
          onClick={onValidate}
          className={style.promoCodeButton}
        >
          {translate('zuora_discount_code_submit')}
        </button>
      </div>
      {
        promoCodeDescription &&
        <div className={style.promoCodeDescription}>
          - {translate(promoCodeDescription)}
        </div>
      }
      {
        promoCodeError &&
        <div className={style.promoCodeError}>
          - {translate(promoCodeError)}
        </div>
      }
    </div>
  );
};

PromoCode.contextTypes = {
  translate: PropTypes.func
};

PromoCode.propTypes = {
  promoCodeDescription: PropTypes.string,
  promoCodeError: PropTypes.string,
  onValidate: PropTypes.func.isRequired,
  handlePromoCodeChange: PropTypes.func.isRequired
};

export default PromoCode;
