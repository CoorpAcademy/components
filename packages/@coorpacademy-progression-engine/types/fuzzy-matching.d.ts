/* eslint-disable fp/no-class */
interface Options {
  maxChanges: number;
}

interface Result {
  distance: number;
  value: string;
}

declare module 'fuzzy-matching' {
  class FuzzyMatching {
    public constructor(items: string[]);

    public get(item: string, criteria?: Options): Result;
  }

  export = FuzzyMatching;
}
