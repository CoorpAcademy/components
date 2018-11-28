export const find = (fixtures, {onFindRecommendations}) => (type, ref) => {
  const {findRecommendations} = fixtures;
  const _recommendations = findRecommendations(type, ref);
  const recommendations = onFindRecommendations
    ? onFindRecommendations(_recommendations)
    : _recommendations;
  return Promise.resolve(recommendations);
};

export const getNext = fixtures => (type, ref) => {
  const {getNextLevel} = fixtures;
  switch (type) {
    case 'chapter':
      return Promise.resolve(undefined);
    case 'level':
      return Promise.resolve(getNextLevel(ref));
  }
};
