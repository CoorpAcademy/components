export default (renderer, skin) => (props) => {
  const {h} = renderer;

  return (
    <h1>
      {props.children}
    </h1>
  );
};
