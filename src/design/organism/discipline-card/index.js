export default (engine, skin) => (props) => {
  const {h} = engine;

  return  (
    <p>
      {props.children}
    </p>
  );
};
