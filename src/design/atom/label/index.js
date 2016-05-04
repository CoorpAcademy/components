import style from './label.css';

export default (engine, options) => (props, children) => {
  const {h} = engine;

  return (
    <span className={style.default}>
      {children}
    </span>
  );
};
