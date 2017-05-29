import React from 'react';
import PropTypes from 'prop-types';
import InputSwitch from '../../atom/input-switch';
import style from './style.css';

const SetupSection = (props, context) => {
  const {translate} = context;

  const {title, onUp, onDown, display} = props;

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
        <div className={onDown ? style.down : style.disabledDown} onClick={onDown} />
        <div className={onUp ? style.up : style.disabledUp} onClick={onUp} />
      </div>
    </div>
  );
};

SetupSection.contextTypes = {
  translate: PropTypes.func
};

SetupSection.propTypes = {
  title: PropTypes.string.isRequired,
  onUp: PropTypes.func,
  onDown: PropTypes.func,
  display: PropTypes.object
};
export default SetupSection;
