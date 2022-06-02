import {ReceivedCourse} from './courses';
import {NavigateBack, NavigateTo, StartApp} from './navigation';
import {StoreToken} from './token';
import {StoreSlide} from './slide';

export type Action =
  | NavigateBack
  | NavigateTo
  | ReceivedCourse
  | StartApp
  | StoreSlide
  | StoreToken;
