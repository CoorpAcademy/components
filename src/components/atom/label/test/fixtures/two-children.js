const child1 = (engine, options) => {
  const {h} = engine;
  return <p>foo</p>;
};

const child2 = (engine, options) => {
  const {h} = engine;
  return <p>bar</p>;
};

export default {
  children: [child1, child2]
};
