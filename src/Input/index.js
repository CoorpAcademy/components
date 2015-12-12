import noop from 'lodash.noop';
import Style from './style.css';

const createInputFactory = (type, CustomStyle) => {
  return (React) => {
    return ({ children, name, placeholder, value, onChange = noop }) => {
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
  }
};

export const createSubmitInput = createInputFactory('submit', Style.SubmitInput);
export const createResetInput = createInputFactory('reset', Style.ResetInput);
export const createTextInput = createInputFactory('text');
