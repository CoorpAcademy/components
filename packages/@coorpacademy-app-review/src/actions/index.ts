import {StoreToken} from './data/token';

import {navigateBack, navigateTo, NavigateBack, NavigateTo, StartApp} from './ui/navigation';
import {ReceivedSlide} from './api/fetch-slide';
import {ReceivedProgression} from './api/post-progression';
import {ReceivedSkills} from './api/fetch-skills';
import {validateSlide} from './ui/slides';
import {ReceivedAnswer} from './api/post-answer';

export type Action =
  | NavigateBack
  | NavigateTo
  | ReceivedSkills
  | StartApp
  | ReceivedSlide
  | StoreToken
  | ReceivedProgression
  | ReceivedAnswer;

export type Dispatchers = {
  navigateTo: typeof navigateTo;
  navigateBack: typeof navigateBack;
  validateSlide: typeof validateSlide;
};
