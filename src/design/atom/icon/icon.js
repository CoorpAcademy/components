export default (svg) => (engine, options) => (props) => {
  const {h} = engine;
  return <object data={svg} type="image/svg+xml"/>;
};
