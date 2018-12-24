declare module 'globby' {
  declare type Config = {|
    cwd?: string,
    absolute?: boolean,
    onlyFiles?: boolean
  |};

  declare module.exports: {
    sync: (path: string, config?: Config) => Array<string>;
  };
}
