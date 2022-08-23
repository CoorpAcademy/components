import {StoreToken} from './data/token';

import {navigateBack, navigateTo, NavigateBack, NavigateTo, StartApp} from './ui/navigation';
import {ReceivedSlide} from './api/fetch-slide';
import {ReceivedProgression} from './api/post-progression';
import {ReceivedSkills} from './api/fetch-skills';
import {validateSlide} from './ui/slides';

export type Action =
  | NavigateBack
  | NavigateTo
  | ReceivedSkills
  | StartApp
  | ReceivedSlide
  | StoreToken
  | ReceivedProgression;

export type Dispatchers = {
  navigateTo: typeof navigateTo;
  navigateBack: typeof navigateBack;
  validateSlide: typeof validateSlide;
};
