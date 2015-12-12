import Style from './style.css';
import { createTextInput } from '../Input';


export default (React) => {
  const InputText = createTextInput(React);

  return ({ children, name }) => {
    var style = {};
    return (
      <fieldset
        className={ Style.ControlGroup }
      >
        { children }
      </fieldset>
    );
  };
};
