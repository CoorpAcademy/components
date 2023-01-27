import test from 'ava';
import identity from 'lodash/fp/identity';
import type {SlideFromAPI} from '@coorpacademy/review-services';
import {mapApiSlideToUi} from '../map-api-slide-to-ui';
import {ReviewSlide} from '..';
import {MediaPropsForPlayer, VideoPropsForPlayer} from '../../../types/common';
import {qcmSlide, qcmUISlide} from './fixtures/qcm';
import {qcmDragSlide, qcmDragUISlide} from './fixtures/qcm-drag';
import {freeTextSlide, freeTextUISlide} from './fixtures/free-text';
import {qcmGraphicSlide, qcmGraphicUISlide} from './fixtures/qcm-graphic';
import {templateSlide, templateUISlide} from './fixtures/template';
import {sliderSlide, sliderUISlide} from './fixtures/slider';

const _mapApiSlideToUi = mapApiSlideToUi(identity, identity);

const macro = test.macro({
  title(providedTitle) {
    return `should handle ${providedTitle} conversion`.trim();
  },
  exec(
    t,
    arg: {
      slide: SlideFromAPI;
      answers: string[];
      expectedUiSlide: Partial<ReviewSlide>;
      media?: MediaPropsForPlayer | VideoPropsForPlayer;
    }
  ) {
    t.deepEqual(
      JSON.parse(JSON.stringify(_mapApiSlideToUi(arg.slide, arg.answers, arg.media))),
      JSON.parse(JSON.stringify(arg.expectedUiSlide))
    );
  }
});

test('qcm', macro, {slide: qcmSlide, answers: [], expectedUiSlide: qcmUISlide});
test('qcm drag', macro, {slide: qcmDragSlide, answers: [], expectedUiSlide: qcmDragUISlide});
test('qcm graphic', macro, {
  slide: qcmGraphicSlide,
  answers: [],
  expectedUiSlide: qcmGraphicUISlide
});
test('template', macro, {
  slide: templateSlide,
  answers: [],
  expectedUiSlide: templateUISlide
});
test('free text', macro, {slide: freeTextSlide, answers: [], expectedUiSlide: freeTextUISlide});

const media: MediaPropsForPlayer = {
  _id: '6377c7f7c76a8a017fac4364',
  mimeType: 'image/jpeg',
  url: '//static.coorpacademy.com/content/CoorpAcademy/content/cockpit-partner-wedemain/default/shutterstock_181414391-1480431629586.jpg',
  type: 'img'
};

test('slider', macro, {
  slide: sliderSlide,
  answers: [],
  expectedUiSlide: sliderUISlide,
  media
});

test('should throw an error if the question type can not be handled', t => {
  const faultySlide = {...qcmSlide, question: {type: 'lol'}};
  t.throws(() => _mapApiSlideToUi(faultySlide as SlideFromAPI, []));
});
