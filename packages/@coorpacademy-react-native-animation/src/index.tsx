import sequence from './sequence';
import parallel from './parallel';
import useTranslateX from './use-translate-x';
import useTranslateY from './use-translate-y';
import useAnimateProp from './use-animate-prop';

import type {AnimateProp} from './use-animate-prop';
import type {TranslateX} from './use-translate-x';
import type {TranslateY} from './use-translate-y';

export type Animation = TranslateX | TranslateY | AnimateProp;

export {sequence, parallel, useAnimateProp, useTranslateX, useTranslateY};
