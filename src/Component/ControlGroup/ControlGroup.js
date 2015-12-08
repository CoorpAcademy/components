import React from 'react';
import Style from './ControlGroup.css';
import { InputText } from '../Input';

const { string, instanceOf, arrayOf,oneOfType  } = React.PropTypes;

const ControlGroup = ({ children, name }) => {
  var style = {};
  return (
    <fieldset
      className={ Style.ControlGroup }
    >
      { children }
    </fieldset>
  );
};

ControlGroup.propTypes = {
};

export default ControlGroup;
