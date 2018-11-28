// eslint-disable-next-line import/prefer-default-export,require-await
export const findById = fixtures => async id => {
  const {getExitNode} = fixtures;
  const exitNode = getExitNode(id);
  return exitNode;
};

const ExitNodes = fixtures => ({
  findById: findById(fixtures)
});

export default ExitNodes;
