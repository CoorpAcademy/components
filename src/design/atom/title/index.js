export default (engine, options) => (props, children) => {
  const {h} = engine;

  return (
    <h1>
      {children}
    </h1>
  );
};
