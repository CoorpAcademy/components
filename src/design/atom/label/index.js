import style from './label.css';

export default (engine, options) => (props) => {
  const {h} = engine;

  return (
    <span className={style.default}>
      {props.children}
    </span>
  );
};
