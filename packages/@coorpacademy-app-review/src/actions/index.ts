import {ReceivedCourse} from './courses';
import {NavigateBack, NavigateTo, StartApp} from './navigation';
import {ReceivedSkills} from './skills';
import {StoreFirstSlide} from './slides';
import {StoreToken} from './token';

export type Action =
  | NavigateBack
  | NavigateTo
  | ReceivedCourse
  | ReceivedSkills
  | StartApp
  | StoreFirstSlide
  | StoreToken;
