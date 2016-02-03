export default (applyBehaviour) => (h, {skin}) => (props) => {
  return applyBehaviour(props, skin);
}
