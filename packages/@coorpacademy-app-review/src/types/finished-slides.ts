import {SlideNumber} from './slides';

// Stores only successful slides, the Map usage is for iteration && lookup performance

export type FinishedSlides = Map<SlideNumber, true>;

export type UpdateFinishedSlidesPayload = {slideNumber: SlideNumber; value: true};
