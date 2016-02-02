export default (applyBehaviour) => (h, {skin}) => (props, children) => {
  applyBehaviour(props, children, skin);
  return children;
}
