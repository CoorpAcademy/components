// @flow strict

type FindContent = (type: string, ref: string) => Promise<Chapter | Level | Slide>;
type GetInfo = (contentRef: string, engineRef: string, version: string) => {nbSlides: number};

type ContentService = {|
  find: FindContent,
  getInfo: GetInfo
|};

export type {GetInfo, ContentService};
