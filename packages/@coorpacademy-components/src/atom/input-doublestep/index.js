import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {snakeCase, omit, noop} from 'lodash/fp';
import Loader from '../loader';
import style from './style.css';

const ConfirmationInput = ({onChange, placeholder = ''}) => {
  const handleOnChange = useMemo(
    () => e => {
      return onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <div>
      <input
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

const ConfirmationForm = props => {
  const {
    confirmValue,
    confirmDisabled = false,
    onConfirm,
    cancelValue,
    onHandleClose,
    onChange,
    textValidation,
    placeholder,
    isPending = false
  } = props;

  const form = (
    <div className={style.confirmForm}>
      {textValidation ? (
        <ConfirmationInput onChange={onChange} placeholder={placeholder} />
      ) : (
        <div className={style.confirmEmptySpace} />
      )}
      <span onClick={onHandleClose} className={style.cancel}>
        {cancelValue}
      </span>
      <span
        onClick={confirmDisabled ? noop : onConfirm}
        className={confirmDisabled ? style.disabled : style.delete}
      >
        {confirmValue}
      </span>
    </div>
  );

  return isPending ? (
    <div className={style.confirmForm}>
      <Loader />
    </div>
  ) : (
    form
  );
};
ConfirmationForm.propTypes = {
  confirmValue: PropTypes.string.isRequired,
  confirmDisabled: PropTypes.bool,
  onConfirm: PropTypes.func.isRequired,
  cancelValue: PropTypes.string.isRequired,
  onHandleClose: PropTypes.func.isRequired,
  textValidation: PropTypes.bool,
  isPending: PropTypes.bool,
  ...ConfirmationInput.propTypes
};

const Confirmation = props => {
  const {description} = props;

  return (
    <div className={style.sectionConfirm}>
      <div className={style.description}>{description}</div>
      <ConfirmationForm {...props} />
    </div>
  );
};
Confirmation.propTypes = {
  description: PropTypes.string
};

const inputDoubleProps = omit(['onConfirm', 'onHandleClose'], {...Confirmation.propTypes});
class InputDoublestep extends React.Component {
  static propTypes = {
    toggleValue: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onOpenConfirmation: PropTypes.func,
    onCloseConfirmation: PropTypes.func,
    ...inputDoubleProps
  };

  constructor(props, context) {
    super(props);
    this.state = {
      open: false
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleToggle() {
    this.setState(state => ({
      open: !state.open
    }));

    const {open} = this.state;
    const {onCloseConfirmation = noop, onOpenConfirmation = noop} = this.props;
    open ? onCloseConfirmation() : onOpenConfirmation();
  }

  handleOnClick(e) {
    e.preventDefault();
    this.setState({open: false});
    const {onClick = noop} = this.props;
    return onClick(e);
  }

  render() {
    const {toggleValue, disabled} = this.props;
    const {open} = this.state;

    const formView = !open ? (
      <span
        onClick={disabled ? noop : this.handleToggle}
        className={disabled ? style.toggleDisabled : style.toggle}
      >
        {toggleValue}
      </span>
    ) : (
      <Confirmation
        {...this.props}
        onHandleClose={this.handleToggle}
        onConfirm={this.handleOnClick}
      />
    );

    return (
      <div className={style.wrapper}>
        <div data-name={`input_doublestep_${snakeCase(toggleValue)}`} className={style.value}>
          {formView}
        </div>
      </div>
    );
  }
}

export default InputDoublestep;
