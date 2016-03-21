export default (engine, skin) => (props) => {
  const {h} = engine;

  return (
    <span>
      {props.children}
    </span>
  );
};
