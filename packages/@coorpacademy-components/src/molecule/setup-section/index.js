import React from 'react';
import PropTypes from 'prop-types';
import ArrowDownIcon from '@coorpacademy/nova-icons/composition/navigation/arrow-down';
import ArrowUpIcon from '@coorpacademy/nova-icons/composition/navigation/arrow-top';
import get from 'lodash/fp/get';
import Provider from '../../atom/provider';
import InputSwitch from '../../atom/input-switch';
import style from './style.css';

const SetupSection = (props, context) => {
  const {translate, skin} = context;
  const brand = get('common.brand', skin);
  const medium = get('common.medium', skin);

  const {title, onUp, onDown, display} = props;
  const colorUp = onDown ? brand : medium;
  const colorDown = onUp ? brand : medium;

  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        {title}
      </div>
      <div className={style.settings}>
        <div className={style.label}>
          {translate('Show')}
        </div>
        <InputSwitch {...display} />
        <ArrowDownIcon
          color={colorUp}
          className={onDown ? style.arrow : style.disabled}
          onClick={onDown}
        />
        <ArrowUpIcon
          color={colorDown}
          className={onUp ? style.arrow : style.disabled}
          onClick={onUp}
        />
      </div>
    </div>
  );
};

SetupSection.contextTypes = {
  translate: Provider.childContextTypes.translate,
  skin: Provider.childContextTypes.skin
};

SetupSection.propTypes = {
  title: PropTypes.string.isRequired,
  onUp: PropTypes.func,
  onDown: PropTypes.func,
  display: PropTypes.shape(InputSwitch.propTypes)
};
export default SetupSection;
