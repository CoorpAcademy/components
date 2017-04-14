import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/fp/noop';
import getClassState from '../../util/get-class-state';
import style from './style.css';

class InputText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: this.props.value
    };

    this.handleChange = this.handleChange.bind(this);
    this.ref = this.ref.bind(this);
  }

  handleChange(callback) {
    return e => {
      const color = e.target.value;

      this.setState({
        color
      });

      this.inputColor.defaultValue = color;
      callback(color);
    };
  }

  ref(inputColor) {
    this.inputColor = inputColor;
  }

  render() {
    const {
      title,
      placeholder,
      defaultValue,
      onChange = noop,
      error,
      description,
      modified = false
    } = this.props;

    return (
      <div className={getClassState(style, modified, error)}>
        <label>
          <span className={style.title}>{`${title} `}</span>
          <input
            type='text'
            name={title}
            placeholder={placeholder}
            defaultValue={defaultValue}
            value={this.state.color}
            onInput={this.handleChange(onChange)}
            onChange={noop}
          />
          <input
            type='color'
            className={style.colorPicker}
            value={this.state.color}
            onChange={this.handleChange(onChange)}
            ref={this.ref}
          />
        </label>
        <div className={style.description}>
          {description}
        </div>
      </div>
    );
  }
}

InputText.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  description: PropTypes.string,
  modified: PropTypes.bool
};

export default InputText;
