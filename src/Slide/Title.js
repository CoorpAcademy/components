import style from './title.css';

export default (h, {skin}) => (props, children) => {
  var disabled = props && props.disabled;

  return (
    <h1
      className={disabled ? style.disabled : style.normal}
      style={{
          color: skin.primary || style.defaultColor
      }}
    >
      {children}
    </h1>
)};
