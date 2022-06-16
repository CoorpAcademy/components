import {SlideNumber} from './slides';

// Stores only successful slides
export type FinishedSlides = {
  slideNumbers: SlideNumber[];
  [key: SlideNumber]: true;
};

export type UpdateFinishedSlidesPayload = {slideNumber: SlideNumber; value: true};
