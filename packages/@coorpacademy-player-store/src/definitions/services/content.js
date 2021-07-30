// @flow strict

import type {Slide} from '@coorpacademy/progression-engine';
import type {Chapter, Level} from '../models';

type FindContent = (
  type: string,
  ref: string,
  // eslint-disable-next-line flowtype/no-weak-types
  options?: {[key: string]: any}
) => Promise<Chapter | Level | Slide | string>;
type GetInfo = (contentRef: string, engineRef: string, version: string) => {nbSlides: number};

type ContentService = {|
  find: FindContent,
  getInfo: GetInfo
|};

export type {GetInfo, ContentService};
