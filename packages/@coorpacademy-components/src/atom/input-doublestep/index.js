import React from 'react';
import LinkedInput from 'react-linked-input';
import PropTypes from 'prop-types';
import omit from 'lodash/fp/omit';
import noop from 'lodash/fp/noop';
import style from './style.css';

const ConfirmationInput = ({onChange, placeholder = ''}) => {
  const handleOnChange = e => {
    return onChange(e.target.value);
  };

  return (
    <div>
      <LinkedInput
        onInput={handleOnChange}
        placeholder={placeholder}
        className={style.input}
        onChange={noop}
      />
    </div>
  );
};
ConfirmationInput.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};

const Confirmation = props => {
  const {
    confirmValue,
    confirmDisabled = false,
    onConfirm,
    description,
    cancelValue,
    onHandleClose,
    onChange,
    textValidation,
    placeholder
  } = props;

  return (
    <div className={style.sectionConfirm}>
      <div className={style.description}>
        {description}
      </div>
      {textValidation ? <ConfirmationInput onChange={onChange} placeholder={placeholder} /> : null}
      <span onClick={onHandleClose} className={style.cancel}>{cancelValue}</span>
      <span
        onClick={confirmDisabled ? noop : onConfirm}
        className={confirmDisabled ? style.disabled : style.delete}
      >
        {confirmValue}
      </span>
    </div>
  );
};
Confirmation.propTypes = {
  confirmValue: PropTypes.string.isRequired,
  confirmDisabled: PropTypes.bool,
  onConfirm: PropTypes.func.isRequired,
  description: PropTypes.string,
  cancelValue: PropTypes.string.isRequired,
  onHandleClose: PropTypes.func.isRequired,
  textValidation: PropTypes.bool,
  ...ConfirmationInput.propTypes
};

class InputDoublestep extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      open: false
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState(state => ({
      open: !state.open
    }));
  }

  render() {
    const {toggleValue, onClick} = this.props;

    const handleOnClick = e => {
      e.preventDefault();
      return onClick(e);
    };

    const formView = !this.state.open
      ? <span onClick={this.handleToggle} className={style.toggle}>{toggleValue}</span>
      : <Confirmation
          {...this.props}
          onHandleClose={this.handleToggle}
          onConfirm={handleOnClick}
        />;

    return (
      <div className={style.wrapper}>
        <div className={style.value}>
          {formView}
        </div>
      </div>
    );
  }
}

const inputDoubleProps = omit(['onConfirm', 'onHandleClose'], {...Confirmation.propTypes});

InputDoublestep.propTypes = {
  toggleValue: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  ...inputDoubleProps
};
export default InputDoublestep;
