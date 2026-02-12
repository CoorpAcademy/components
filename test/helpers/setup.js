if (typeof window === 'undefined' || typeof document === 'undefined') {
    // Prefer a real DOM when available (browser-env uses jsdom)
    const browserEnv = require('browser-env');
    browserEnv();
}