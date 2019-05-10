export type LessonType = 'img' | 'video' | 'pdf';

export type ContentType =
  | 'chapter'
  | 'discipline'
  | 'level'
  | 'slide'
  | 'node'
  | 'failure'
  | 'success';

export interface ContentSlide {
  type: 'slide';
  ref: string;
}

export interface GenericContent {
  ref: string;
  type: ContentType;
  version?: string;
}

export interface ResourceContent {
  ref: string;
  type: LessonType;
  version?: string;
}

export type Content = GenericContent | ResourceContent;
