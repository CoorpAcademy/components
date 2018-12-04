const find = fixtures => (type, ref) => {
  const {findRecommendations} = fixtures;
  const recommendations = findRecommendations(type, ref);
  return Promise.resolve(recommendations);
};

const getNext = fixtures => (type, ref) => {
  const {getNextLevel} = fixtures;
  switch (type) {
    case 'chapter':
      return Promise.resolve(undefined);
    case 'level':
      return Promise.resolve(getNextLevel(ref));
  }
};

const Recommendations = fixtures => ({
  find: find(fixtures),
  getNext: getNext(fixtures)
});

export default Recommendations;
