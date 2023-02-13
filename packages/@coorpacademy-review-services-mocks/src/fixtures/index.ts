import {createQcmDragSlide} from './qcm-drag';
import {createQcmSlide} from './qcm';
import {createQcmGraphicSlide} from './qcm-graphic';
import {createFreeTextSlide} from './free-text';
import {createSliderSlide} from './slider';
import {createTemplateSlide} from './template';

export const qcmDragSlide = createQcmDragSlide();
export const qcmSlide = createQcmSlide();
export const qcmGraphicSlide = createQcmGraphicSlide();
export const freeTextSlide = createFreeTextSlide();
export const sliderSlide = createSliderSlide();
export const templateSlide = createTemplateSlide();

export const freeTextWithYoutube = createFreeTextSlide([
  {
    type: 'video',
    src: [
      {
        _id: 'youtube-fixture-id',
        mimeType: 'application/youtube',
        mediaRef: 'youtube-fixture-ref',
        videoId: 'nLMZd05FQKc'
      }
    ]
  }
]);

export const qcmGraphicWithVimeo = createFreeTextSlide([
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
]);

export const qcmSlideWithOmniplayer = createFreeTextSlide([
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
]);

export const sliderWithUptale = createFreeTextSlide([
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
]);

export const templateWithMp4Player = createFreeTextSlide([
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
]);
