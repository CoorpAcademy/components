// Adopted from: https://github.com/avajs/ava/blob/3a4afc6cf35aeffb6b019c6b75fa9b8e071bb53d/index.js.flow
// See: https://github.com/avajs/ava/pull/2098

declare module 'ava' {
    declare interface PromiseLike<R> {
      then(onFulfill: null | void, onReject: null | void): Promise<R>;
      then<U>(
        onFulfill: null | void,
        onReject: (error: any) => Promise<U> | U
      ): Promise<R | U>;
      then<U>(
        onFulfill: (value: R) => Promise<U> | U,
        onReject: null | void | ((error: any) => Promise<U> | U)
      ): Promise<U>;
    }

    declare interface ObservableLike {
      subscribe(observer: (value: any) => void): void;
    }

    declare type Constructor = Class<{ constructor(...args: Array<any>): any }>;

    declare type ThrowsExpectation = {
      code?: string | number,
      instanceOf?: Constructor,
      is?: Error,
      message?: string | RegExp,
      name?: string,
    };

    declare type SnapshotOptions = {
      id?: string,
    };

    declare type Assertions = {
      assert: {
        (actual: any, message?: string): void,
        skip(actual: any, message?: string): void,
      },

      deepEqual: {
        (actual: any, expected: any, message?: string): void,
        skip(actual: any, expected: any, message?: string): void,
      },
      fail: {
        (message?: string): void,
        skip(message?: string): void,
      },
      false: {
        (actual: any, message?: string): void,
        skip(actual: any, message?: string): void,
      },
      falsy: {
        (actual: any, message?: string): void,
        skip(actual: any, message?: string): void,
      },
      is: {
        (actual: any, expected: any, message?: string): void,
        skip(actual: any, expected: any, message?: string): void,
      },
      not: {
        (actual: any, expected: any, message?: string): void,
        skip(actual: any, expected: any, message?: string): void,
      },
      notDeepEqual: {
        (actual: any, expected: any, message?: string): void,
        skip(actual: any, expected: any, message?: string): void,
      },
      notRegex: {
        (string: string, regex: RegExp, message?: string): void,
        skip(string: string, regex: RegExp, message?: string): void,
      },
      notThrows: {
        (fn: () => any, message?: string): void,
        skip(fn: () => any, message?: string): void,
      },
      notThrowsAsync: {
        (fn: () => PromiseLike<any>, message?: string): Promise<void>,
        (promise: PromiseLike<any>, message?: string): Promise<void>,
        skip(nonThrower: any, message?: string): void,
      },
      pass: {
        (message?: string): void,
        skip(message?: string): void
      },
      regex: {
        (string: string, regex: RegExp, message?: string): void,
        skip(string: string, regex: RegExp, message?: string): void,
      },
      snapshot: {
        (expected: any, message?: string): void,
        (expected: any, options: SnapshotOptions, message?: string): void,
        skip(expected: any, message?: string): void,
        skip(expected: any, options: SnapshotOptions, message?: string): void,
      },
      throws: {
        <ThrownError: Error>(
          fn: () => any,
          expectations?: null,
          message?: string
        ): ThrownError,
        <ThrownError: Error>(
          fn: () => any,
          constructor: Constructor,
          message?: string
        ): ThrownError,
        <ThrownError: Error>(
          fn: () => any,
          regex: RegExp,
          message?: string
        ): ThrownError,
        <ThrownError: Error>(
          fn: () => any,
          errorMessage: string,
          message?: string
        ): ThrownError,
        <ThrownError: Error>(
          fn: () => any,
          expectations: ThrowsExpectation,
          message?: string
        ): ThrownError,
        skip(fn: () => any, expectations?: any, message?: string): void,
      },
      throwsAsync: {
        <ThrownError: Error>(
          fn: () => PromiseLike<any>,
          expectations?: null,
          message?: string
        ): Promise<ThrownError>,
        <ThrownError: Error>(
          fn: () => PromiseLike<any>,
          constructor: Constructor,
          message?: string
        ): Promise<ThrownError>,
        <ThrownError: Error>(
          fn: () => PromiseLike<any>,
          regex: RegExp,
          message?: string
        ): Promise<ThrownError>,
        <ThrownError: Error>(
          fn: () => PromiseLike<any>,
          errorMessage: string,
          message?: string
        ): Promise<ThrownError>,
        <ThrownError: Error>(
          fn: () => PromiseLike<any>,
          expectations: ThrowsExpectation,
          message?: string
        ): Promise<ThrownError>,
        <ThrownError: Error>(
          promise: PromiseLike<any>,
          expectations?: null,
          message?: string
        ): Promise<ThrownError>,
        <ThrownError: Error>(
          promise: PromiseLike<any>,
          constructor: Constructor,
          message?: string
        ): Promise<ThrownError>,
        <ThrownError: Error>(
          promise: PromiseLike<any>,
          regex: RegExp,
          message?: string
        ): Promise<ThrownError>,
        <ThrownError: Error>(
          promise: PromiseLike<any>,
          errorMessage: string,
          message?: string
        ): Promise<ThrownError>,
        <ThrownError: Error>(
          promise: PromiseLike<any>,
          expectations: ThrowsExpectation,
          message?: string
        ): Promise<ThrownError>,
        skip(thrower: any, expectations?: any, message?: string): void,
      },
      true: {
        (actual: any, message?: string): void,
        skip(actual: any, message?: string): void,
      },
      truthy: {
        (actual: any, message?: string): void,
        skip(actual: any, message?: string): void,
      },
    };

    declare type ExecutionContext<Context> = Assertions & {
      context: Context,
      +title: string,

      log: {
        (...values: Array<any>): void,
        skip(...values: Array<any>): void,
      },
      plan: {
        (count: number): void,
        skip(count: number): void,
      },
      timeout(ms: number): void,
    };

    declare type CbExecutionContext<Context> = ExecutionContext<Context> & {
      end(error?: any): void,
    };

    declare type ImplementationResult = PromiseLike<void> | ObservableLike | void;
    declare type Implementation<Context> = (
      t: ExecutionContext<Context>
    ) => ImplementationResult;
    declare type CbImplementation<Context> = (
      t: CbExecutionContext<Context>
    ) => ImplementationResult;

    declare type Macro<Context> = {
      (t: ExecutionContext<Context>, ...args: Array<any>): ImplementationResult,
      title?: (providedTitle: string | void, ...args: Array<any>) => string,
    };

    declare type CbMacro<Context> = {
      (t: CbExecutionContext<Context>, ...args: Array<any>): ImplementationResult,
      title?: (providedTitle: string | void, ...args: Array<any>) => string,
    };

    declare export type TestInterface<Context: Object> = {
      (
        title: string,
        implementation: Implementation<Context> | Macro<Context>
      ): void,
      (
        title: string,
        macro: Macro<Context> | Macro<Context>[],
        ...args: Array<any>
      ): void,

      (macro: Macro<Context> | Macro<Context>[], ...args: Array<any>): void,
      after: After<Context>,
      afterEach: After<Context>,
      before: Before<Context>,
      beforeEach: Before<Context>,
      cb: Cb<Context>,
      failing: FailingInterface<Context>,
      serial: SerialInterface<Context>,
      only: OnlyInterface<Context>,
      skip: Skip<Context>,
      todo: TodoDeclaration,
    };

    declare type After<Context> = {
      (implementation: Implementation<Context> | Macro<Context>): void,
      (macro: Macro<Context> | Macro<Context>[], ...args: Array<any>): void,
      (
        title: string,
        implementation: Implementation<Context> | Macro<Context>
      ): void,
      (
        title: string,
        macro: Macro<Context> | Macro<Context>[],
        ...args: Array<any>
      ): void,
      always: {
        (implementation: Implementation<Context> | Macro<Context>): void,
        (macro: Macro<Context> | Macro<Context>[], ...args: Array<any>): void,
        (
          title: string,
          implementation: Implementation<Context> | Macro<Context>
        ): void,
        (
          title: string,
          macro: Macro<Context> | Macro<Context>[],
          ...args: Array<any>
        ): void,
        cb: HookCb<Context>,
        skip: HookSkip<Context>,
      },
      cb: HookCb<Context>,
      skip: HookSkip<Context>,
    };

    declare type Before<Context> = {
      (implementation: Implementation<Context> | Macro<Context>): void,
      (macro: Macro<Context> | Macro<Context>[], ...args: Array<any>): void,
      (
        title: string,
        implementation: Implementation<Context> | Macro<Context>
      ): void,
      (
        title: string,
        macro: Macro<Context> | Macro<Context>[],
        ...args: Array<any>
      ): void,
      cb: HookCb<Context>,
      skip: HookSkip<Context>,
    };

    declare type Cb<Context> = {
      (
        title: string,
        implementation: CbImplementation<Context> | CbMacro<Context>
      ): void,
      (
        title: string,
        macro: CbMacro<Context> | CbMacro<Context>[],
        ...args: Array<any>
      ): void,
      (macro: CbMacro<Context> | CbMacro<Context>[], ...args: Array<any>): void,
      failing: {
        (
          title: string,
          implementation: CbImplementation<Context> | CbMacro<Context>
        ): void,
        (
          title: string,
          macro: CbMacro<Context> | CbMacro<Context>[],
          ...args: Array<any>
        ): void,
        (macro: CbMacro<Context> | CbMacro<Context>[], ...args: Array<any>): void,
        only: CbOnlyInterface<Context>,
        skip: CbSkip<Context>,
      },
      only: CbOnlyInterface<Context>,
      skip: CbSkip<Context>,
    };

    declare type CbOnlyInterface<Context> = {
      (
        title: string,
        implementation: CbImplementation<Context> | CbMacro<Context>
      ): void,
      (
        title: string,
        macro: CbMacro<Context> | CbMacro<Context>[],
        ...args: Array<any>
      ): void,
      (macro: CbMacro<Context> | CbMacro<Context>[], ...args: Array<any>): void,
    };

    declare type CbSkip<Context> = {
      (
        title: string,
        implementation: CbImplementation<Context> | CbMacro<Context>
      ): void,
      (
        title: string,
        macro: CbMacro<Context> | CbMacro<Context>[],
        ...args: Array<any>
      ): void,
      (macro: CbMacro<Context> | CbMacro<Context>[], ...args: Array<any>): void,
    };

    declare type FailingInterface<Context> = {
      (
        title: string,
        implementation: Implementation<Context> | Macro<Context>
      ): void,
      (
        title: string,
        macro: Macro<Context> | Macro<Context>[],
        ...args: Array<any>
      ): void,
      (macro: Macro<Context> | Macro<Context>[], ...args: Array<any>): void,
      only: OnlyInterface<Context>,
      skip: Skip<Context>,
    };

    declare type HookCb<Context> = {
      (implementation: CbImplementation<Context> | CbMacro<Context>): void,
      (macro: CbMacro<Context> | CbMacro<Context>[], ...args: Array<any>): void,
      (
        title: string,
        implementation: CbImplementation<Context> | CbMacro<Context>
      ): void,
      (
        title: string,
        macro: CbMacro<Context> | CbMacro<Context>[],
        ...args: Array<any>
      ): void,
      skip: HookCbSkip<Context>,
    };

    declare type HookCbSkip<Context> = {
      (implementation: CbImplementation<Context> | CbMacro<Context>): void,
      (macro: CbMacro<Context> | CbMacro<Context>[], ...args: Array<any>): void,
      (
        title: string,
        implementation: CbImplementation<Context> | CbMacro<Context>
      ): void,
      (
        title: string,
        macro: CbMacro<Context> | CbMacro<Context>[],
        ...args: Array<any>
      ): void,
    };

    declare type HookSkip<Context> = {
      (implementation: Implementation<Context> | Macro<Context>): void,
      (macro: Macro<Context> | Macro<Context>[], ...args: Array<any>): void,
      (
        title: string,
        implementation: Implementation<Context> | Macro<Context>
      ): void,
      (
        title: string,
        macro: Macro<Context> | Macro<Context>[],
        ...args: Array<any>
      ): void,
    };

    declare type OnlyInterface<Context> = {
      (
        title: string,
        implementation: Implementation<Context> | Macro<Context>
      ): void,
      (
        title: string,
        macro: Macro<Context> | Macro<Context>[],
        ...args: Array<any>
      ): void,
      (macro: Macro<Context> | Macro<Context>[], ...args: Array<any>): void,
    };

    declare type SerialInterface<Context> = {
      (
        title: string,
        implementation: Implementation<Context> | Macro<Context>
      ): void,
      (
        title: string,
        macro: Macro<Context> | Macro<Context>[],
        ...args: Array<any>
      ): void,
      (macro: Macro<Context> | Macro<Context>[], ...args: Array<any>): void,
      after: After<Context>,
      afterEach: After<Context>,
      before: Before<Context>,
      beforeEach: Before<Context>,
      cb: Cb<Context>,
      failing: FailingInterface<Context>,
      only: OnlyInterface<Context>,
      skip: Skip<Context>,
      todo: TodoDeclaration,
      meta: {
        file: string,
      },
    };

    declare type Skip<Context> = {
      (
        title: string,
        implementation: Implementation<Context> | Macro<Context>
      ): void,
      (
        title: string,
        macro: Macro<Context> | Macro<Context>[],
        ...args: Array<any>
      ): void,
      (macro: Macro<Context> | Macro<Context>[], ...args: Array<any>): void,
    };

    declare type TodoDeclaration = (title: string) => void;

    declare export default TestInterface<any>;
  }
