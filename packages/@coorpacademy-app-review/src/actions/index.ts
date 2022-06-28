import {NavigateBack, NavigateTo, StartApp} from './ui/navigation';
import {ReceivedSkills} from './data/skills';
import {StoreFirstSlide} from './data/slides';
import {StoreToken} from './data/token';

export type Action =
  | NavigateBack
  | NavigateTo
  | ReceivedSkills
  | StartApp
  | StoreFirstSlide
  | StoreToken;
