import React, {PropTypes} from 'react';
import map from 'lodash/fp/map';
import InputSwitch from '../../atom/input-switch';
import style from './style.css';

const SetupSection = (props, context) => {
  const { translate } = context;

  const {
    title,
    handleUpClick,
    handleDownClick,
    display
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
        <div className={style.down}
          onClick={handleDownClick}
        />
        <div className={style.up}
          onClick={handleUpClick}
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
  handleUpClick: React.PropTypes.func,
  handleDownClick: React.PropTypes.func,
  display: React.PropTypes.object
};
export default SetupSection;
