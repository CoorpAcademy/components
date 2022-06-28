import {NavigateBack, NavigateTo, StartApp} from './ui/navigation';
import {ErrorFetchingSkills, ReceivedSkills} from './data/skills';
import {StoreFirstSlide} from './data/slides';
import {StoreToken} from './data/token';

export type Action =
  | NavigateBack
  | NavigateTo
  | ReceivedSkills
  | ErrorFetchingSkills
  | StartApp
  | StoreFirstSlide
  | StoreToken;
