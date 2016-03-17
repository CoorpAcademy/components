import style from './label.css';

export default (engine, skin) => (props) => {
  const {h} = engine;

  return (
    <span className={style.default}>
      {props.children}
    </span>
  );
};
