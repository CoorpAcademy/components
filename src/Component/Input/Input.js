import _ from 'lodash';
import React from 'react';
import Style from './Input.css';

const { string, func } = React.PropTypes;

const InputFactory = (type, CustomStyle) => {
  const Input = ({ children, name, placeholder, value, onChange = _.noop }) => {
    const handleChange = (e) => onChange(e.target.value);

    return (
      <input
        {...{type, placeholder, value}}
        className={ `${Style.Input} ${CustomStyle}` }
        onChange={ handleChange }
      >
        { children }
      </input>
    );
  };

  Input.propTypes = {
    name: string,
    placeholder: string,
    value: string,
    onChance: func
  };

  return Input;
};

export const SubmitInput = InputFactory('submit', Style.SubmitInput);
export const ResetInput = InputFactory('reset', Style.ResetInput);
export const TextInput = InputFactory('text');
