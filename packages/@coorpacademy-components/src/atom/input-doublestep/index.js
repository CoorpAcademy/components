import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

class InputDoublestep extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleOpen() {
    const newValue = !this.state.open;

    this.setState(() => ({
      open: newValue
    }));
  }

  render() {
    const {title, toggleValue, cancelValue, onChange, description} = this.props;

    const handleOnChange = e => {
      e.preventDefault();
      return onChange(e);
    };

    const openForm = this.state.open === true;

    const formView = !openForm
      ? <span onClick={this.handleOpen} className={style.toggle}>{toggleValue}</span>
      : <div>
          <span onClick={this.handleOpen} className={style.cancel}>{cancelValue}</span>
          <span onClick={handleOnChange} className={style.delete}>
            {title}
          </span>
        </div>;

    return (
      <div className={style.wrapper}>
        <div className={style.value}>
          {formView}
        </div>
        <div className={style.description}>
          {description}
        </div>
      </div>
    );
  }
}

InputDoublestep.propTypes = {
  title: PropTypes.string.isRequired,
  toggleValue: PropTypes.string.isRequired,
  cancelValue: PropTypes.string.isRequired,
  description: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
export default InputDoublestep;
