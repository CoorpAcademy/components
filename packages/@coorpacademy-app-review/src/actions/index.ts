import {ReceivedCourse} from './courses';
import {NavigateBack, NavigateTo, StartApp} from './navigation';
import {StoreToken} from './token';

export * from './courses';
export * from './navigation';
export * from './token';

export type Action = StartApp | StoreToken | NavigateBack | NavigateTo | ReceivedCourse;
