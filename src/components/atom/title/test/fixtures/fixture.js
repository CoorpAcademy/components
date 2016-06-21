const child = (engine, options) => {
  const {h} = engine;
  return <h1>foo</h1>;
};

export default {
  children: [child]
};
