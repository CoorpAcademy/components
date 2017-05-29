import browserEnv from 'browser-env';

export default () => browserEnv(['window', 'document', 'navigator']);
