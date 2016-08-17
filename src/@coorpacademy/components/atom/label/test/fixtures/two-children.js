const child1 = (treant, options) => {
  const {h} = treant;
  return <p>foo</p>;
};

const child2 = (treant, options) => {
  const {h} = treant;
  return <p>bar</p>;
};

export default {
  children: [child1, child2]
};
