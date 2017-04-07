import React, {PropTypes} from 'react';
import map from 'lodash/fp/map';
import InputSwitch from '../../atom/input-switch';
import style from './style.css';

const SetupSection = (props, context) => {
  const { translate } = context;

  const {
    title,
    onUp,
    onDown,
    display,
    id
  } = props;

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
        <div className={onDown ? style.down : style.disabledDown}
          onClick={onDown}
        />
        <div className={onUp ? style.up : style.disabledUp}
          onClick={onUp}
        />
      </div>
    </div>
  );
};

SetupSection.contextTypes = {
  translate: React.PropTypes.func
};

SetupSection.propTypes = {
  title: React.PropTypes.string.isRequired,
  onUp: React.PropTypes.func,
  onDown: React.PropTypes.func,
  display: React.PropTypes.object,
  id: React.PropTypes.string.isRequired
};
export default SetupSection;
