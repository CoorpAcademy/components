import type {Options} from 'mkdirp';

declare module 'mkdirp-promise' {
  declare module.exports: {
    (path: string, options?: Options): Promise<Error | string>;
  };
}
