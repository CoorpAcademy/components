const getCleanUri = (originalUri: string): string =>
  originalUri && originalUri.replace(/(http:|https:|)\/\//g, 'https://');

export default getCleanUri;
