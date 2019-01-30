// @flow strict

import type {Slide} from '@coorpacademy/progression-engine';
import type {Chapter, Level} from '../models';

type FindContent = (type: string, ref: string) => Promise<Chapter | Level | Slide>;
type GetInfo = (contentRef: string, engineRef: string, version: string) => {nbSlides: number};

type DataLayer = {|
  find: FindContent,
  getInfo: GetInfo
|};

export type {GetInfo, DataLayer};
