import {ReceivedCourse} from './courses';
import {NavigateBack, NavigateTo, StartApp} from './navigation';
import {StoreToken} from './token';
import {StoreFirstSlide} from './slides';

export type Action =
  | NavigateBack
  | NavigateTo
  | ReceivedCourse
  | StartApp
  | StoreFirstSlide
  | StoreToken;
