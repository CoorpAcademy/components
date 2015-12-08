import _ from 'lodash';
import Style from './style.css';

const createLegend = (React) => ({ children }) => {
  return (
    <legend>
      { children }
    </legend>
  );
};

export default (React) => {
  const Legend = createLegend(React);

  return ({ children, title, action, method, onSubmit = _.noop, onReset = _.noop }) => {
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
};
