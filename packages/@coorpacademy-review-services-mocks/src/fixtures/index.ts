import {createQcmDragSlide} from './qcm-drag';
import {createQcmSlide} from './qcm';
import {createQcmGraphicSlide} from './qcm-graphic';
import {createFreeTextSlide} from './free-text';
import {createSliderSlide} from './slider';
import {createTemplateSlide} from './template';

export const SKILL_REF_FOR_DEFAULT_SLIDES = 'skill_NyxtYFYir';
export const SKILL_REF_FOR_MANY_MEDIA = 'skill_many_media';

export const slideRef = (universalRef: string, skillRef: string): string =>
  `${universalRef}${skillRef !== SKILL_REF_FOR_DEFAULT_SLIDES ? `-${skillRef}` : ''}`;

export const DEFAULT_FREETEXT_REF = 'sli_VJYjJnJhg';
export const DEFAULT_QCM_GRAPHIC_REF = 'sli_VkSQroQnx';
export const DEFAULT_QCM_REF = 'sli_N1XACJobn';
export const DEFAULT_SLIDER_REF = 'sli_VkAzsCLKb';
export const DEFAULT_TEMPLATE_REF = 'sli_N13-hG3kX';

export const qcmDragSlide = createQcmDragSlide();
export const qcmSlide = createQcmSlide(DEFAULT_QCM_REF);
export const qcmGraphicSlide = createQcmGraphicSlide(DEFAULT_QCM_GRAPHIC_REF);
export const freeTextSlide = createFreeTextSlide(DEFAULT_FREETEXT_REF);
export const sliderSlide = createSliderSlide(DEFAULT_SLIDER_REF);
export const templateSlide = createTemplateSlide(DEFAULT_TEMPLATE_REF);

export const freeTextWithYoutube = createFreeTextSlide(
  slideRef(DEFAULT_FREETEXT_REF, SKILL_REF_FOR_MANY_MEDIA),
  [
    {
      type: 'video',
      src: [
        {
          _id: 'youtube-fixture-id',
          mimeType: 'application/youtube',
          mediaRef: 'youtube-fixture-ref',
          videoId: 'yMMpEg0jpV4'
        }
      ]
    }
  ]
);

export const qcmGraphicWithVimeo = createQcmGraphicSlide(
  slideRef(DEFAULT_QCM_GRAPHIC_REF, SKILL_REF_FOR_MANY_MEDIA),
  [
    {
      type: 'video',
      src: [
        {
          _id: 'vimeo-fixture-id',
          mediaRef: 'vimeo-fixture-ref',
          mimeType: 'application/vimeo',
          videoId: '178430038'
        }
      ]
    }
  ]
);

export const qcmSlideWithOmniplayer = createQcmSlide(
  slideRef(DEFAULT_QCM_REF, SKILL_REF_FOR_MANY_MEDIA),
  [
    {
      type: 'video',
      src: [
        {
          _id: 'omniPlayer-fixture-id',
          mediaRef: 'omniPlayer-fixture-ref',
          mimeType: 'application/omniPlayer',
          videoId: '5e429de5be444d66709af632'
        }
      ]
    }
  ]
);

export const sliderWithUptale = createSliderSlide(
  slideRef(DEFAULT_SLIDER_REF, SKILL_REF_FOR_MANY_MEDIA),
  [
    {
      type: 'video',
      src: [
        {
          _id: 'uptale-fixture-id',
          mediaRef: 'uptale-fixture-ref',
          mimeType: 'application/uptale',
          videoId: 'xap9fp26d0ufH3lY6pOmw'
        }
      ]
    }
  ]
);

export const templateWithMp4Player = createTemplateSlide(
  slideRef(DEFAULT_TEMPLATE_REF, SKILL_REF_FOR_MANY_MEDIA),
  [
    {
      type: 'video',
      src: [
        {
          _id: 'mp4-fixture-id',
          mediaRef: 'mp4-fixture-ref',
          mimeType: 'video/mp4',
          videoId: 'eRqV3sFB'
        }
      ]
    }
  ]
);
