import React, {useCallback, useMemo, useState, useRef} from 'react';
import classnames from 'classnames';
import get from 'lodash/fp/get';
import has from 'lodash/fp/has';
import mapKeys from 'lodash/fp/mapKeys';
import mapValues from 'lodash/fp/mapValues';
import noop from 'lodash/fp/noop';
import size from 'lodash/fp/size';
import isEmpty from 'lodash/fp/isEmpty';
import {
  NovaCompositionNavigationArrowRight as ArrowRight,
  NovaCompositionCoorpacademyInformationIcon as InformationIcon
} from '@coorpacademy/nova-icons';
import ToolTip, {toggleStateOnKeyPress} from '../tooltip';
import Provider, {GetTranslateFromContext} from '../provider';
import {WebContextValues} from '../provider/web-context';
import propTypes, {FormTextInputProps} from './prop-types';
import style from './style.css';

// @ts-expect-error (Property 'convert' does not exist on type 'LodashMapValues'.ts(2339))
const mapValuesWithKeys = mapValues.convert({cap: false});

// @ts-expect-error (Property 'convert' does not exist on type 'LodashMapKeys'.ts(2339))
const mapKeysWithKeys = mapKeys.convert({cap: false});

type PasswordRulesConfig = {
  minLength: number;
};

const testRegex = (regex: RegExp) => {
  return regex.test.bind(regex);
};

const tests = {
  minLength: (password: string, passwordRules: PasswordRulesConfig) => {
    return size(password) >= passwordRules.minLength;
  },
  upper: testRegex(/[A-Z]/),
  lower: testRegex(/[a-z]/),
  number: testRegex(/\d/),
  special: testRegex(/[^\dA-Za-z]/)
};

const checkStrength =
  (passwordRules: PasswordRulesConfig) =>
  (password = '') => {
    return mapValuesWithKeys(
      (rule: PasswordRulesConfig[keyof PasswordRulesConfig], key: keyof PasswordRulesConfig) => {
        return !rule || tests[key](password, passwordRules);
      },
      passwordRules
    );
  };

type FieldValue = string | number;

// passwordStrengthRules
const passwordStrength = (scope, elem, attrs, ngModel) => {
  // if (!ngModel) return;

  const rules = get('config.passwordStrength', scope);
  const _checkStrength = checkStrength(rules);

  function validate() {
    const password = ngModel.$viewValue;
    const validation = _checkStrength(password);

    mapKeysWithKeys((value: FieldValue, key: string) => {
      ngModel.$setValidity(key, value);
    }, validation);
  }

  scope.$watch(attrs.ngModel, validate);
};

const validate = () => {
  // values
  const val1 = ngModel.$viewValue;
  const val2 = attrs.equals;

  // set validity
  ngModel.$setValidity('equals', val1 === val2);
};

const equals = (fieldValue: FieldValue, fieldEqualsValue: FieldValue) => {
  // watch own value and re-validate on change
  scope.$watch(attrs.ngModel, function () {
    validate();
  });

  // observe the other value and re-validate on change
  attrs.$observe('equals', function (val) {
    validate();
  });
};

// autocorrect="off"
// autocapitalize="none"
// ng-pattern="/[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/"
const FormTextInput = ({
  'aria-label': ariaLabel,
  autocomplete,
  className,
  id,
  isOnError,
  maxlength=150,
  onChange = noop,
  placeholder,
  type = 'default'
}: FormTextInputProps) => {
  // data-testid="battle-opponent-wrapper"
  // on Change get old value
  const [oldValue, setOldValue] = useState<FieldValue>("");
  const [newValue, setNewValue] = useState<FieldValue>("");

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setOldValue(newValue);
    setNewValue((prevValue) => {

      // eslint-disable-next-line no-console
      console.log('hey -validate- here', prevValue);
      return newValue;
    });
  };

  return (
    <label>
      <span className={classnames(style.title, isEmpty(value) && style.noValue)}>
        {propsTitle}
        {toolTipView}
      </span>

      <input
        type="text"
        name={propsTitle}
        className={style.input}
        placeholder={placeholder}
        defaultValue={defaultValue}
        autoComplete={'off'}
        value={value}
        onInput={handleChange}
        disabled={disabled}
        onChange={noop}
        data-name={dataName}
        aria-label={ariaLabel}
      />
      {errorIconView}
      {validIconView}
      {hintView}
    </label>
  );
};

FormTextInput.propTypes = propTypes;

export default FormTextInput;
