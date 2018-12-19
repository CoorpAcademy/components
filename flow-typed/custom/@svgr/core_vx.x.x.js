import type {Options as PrettierConfig} from 'prettier';

declare module '@svgr/core' {
  declare type Config = {|
    dimensions?: boolean,
    expandProps?: 'start' | 'end' | false,
    icon?: boolean,
    native?: boolean,
    prettier?: boolean,
    prettierConfig?: PrettierConfig,
    ref?: boolean,
    noSemi?: boolean,
    replaceAttrValues?: { [string]: string },
    svgProps?: { [string]: any },
    svgo?: boolean,
    // too long to define
    svgoConfig?: Object,
    // too long to define
    template?: Function,
    titleProp?: boolean,
    runtimeConfig?: boolean,
    plugins?: Array<string>,
  |};

  declare type State = {|
    // @todo: to be defined
  |};

  declare module.exports: {
    (svgCode: Buffer, config?: Config, state?: State): Promise<string>;
  };
}
