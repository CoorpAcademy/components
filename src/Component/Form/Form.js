import _ from 'lodash';
import React from 'react';
import Style from './Form.css';

const { string } = React.PropTypes;

const Form = ({ children, title, action, method, onSubmit = _.noop, onReset = _.noop }) => {
  const head = title ? (<Legend>{ title }</Legend>) : null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  }

  const handleReset = (e) => {
    e.preventDefault();
    onReset();
  }

  return (
    <form
      { ...{action, method} }
      className={ Style.Form }
      onSubmit={ handleSubmit }
      onReset={ handleReset }
    >
      { head }
      { children }
    </form>
  );
};

Form.propTypes = {
  title: string
};

const Legend = ({ children }) => {
  return (
    <legend>
      { children }
    </legend>
  );
};

Legend.propTypes = {
};

export default Form;
