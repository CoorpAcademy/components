export default (renderer, skin) => (props) => {
  const {h} = renderer;

  return (
    <span>
      {props.children}
    </span>
  );
};
