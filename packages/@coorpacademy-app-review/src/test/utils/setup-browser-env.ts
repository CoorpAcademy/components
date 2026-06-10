import Module from 'module';
import browserEnv from 'browser-env';
import noop from 'lodash/fp/noop';

// lottie-web (pulled in via @coorpacademy/components) touches `document` and the
// canvas API at import time, so the jsdom globals must exist before the component
// imports are evaluated, and lottie-web itself must be mocked (jsdom has no canvas).
browserEnv({pretendToBeVisual: true});

// Same mock as packages/@coorpacademy-components/ava.requirements.js
const originalRequire = Module.prototype.require;
Module.prototype.require = function (this: Module, id: string, ...args: unknown[]) {
  if (id === 'lottie-web') {
    return {
      default: {
        loadAnimation: (): Record<string, () => void> => ({
          play: noop,
          stop: noop,
          destroy: noop,
          addEventListener: noop,
          removeEventListener: noop
        })
      }
    };
  }
  return Reflect.apply(originalRequire, this, [id, ...args]);
} as typeof Module.prototype.require;
