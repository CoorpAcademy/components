import browserEnv from 'browser-env';

const setupBrowserEnv = () => browserEnv(['window', 'document', 'navigator']);

export default setupBrowserEnv;
