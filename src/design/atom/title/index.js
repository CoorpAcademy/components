export default (engine, skin) => (props) => {
  const {h} = engine;

  return (
    <h1>
      {props.children}
    </h1>
  );
};
