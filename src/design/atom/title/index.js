export default (engine, options) => props => {
  const {h} = engine;

  return (
    <h1>
      {props.children}
    </h1>
  );
};
