import style from './titled-checkbox.css';

export default (engine, options) => {
  const {h} = engine;

  return (props) => {
    return (
      <li className={style.default}>
        <label>
          <span>{props.label}</span>
          <input type="checkbox"/>
        </label>
      </li>
    );
  };
};
