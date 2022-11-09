import test from 'ava';
import identity from 'lodash/fp/identity';
import {SlideFromAPI} from '../../../types/common';
import {mapApiSlideToUi} from '../map-api-slide-to-ui';
import {ReviewSlide} from '..';
import {qcmUISlide, qcmSlide} from './fixtures/qcm';
import {qcmDragUISlide, qcmDragSlide} from './fixtures/qcm-drag';
import {freeTextSlide, freeTextUISlide} from './fixtures/free-text';
import {qcmGraphicUISlide, qcmGraphicSlide} from './fixtures/qcm-graphic';
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
    }
  ) {
    t.deepEqual(
      JSON.parse(JSON.stringify(_mapApiSlideToUi(arg.slide, arg.answers))),
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
test('slider', macro, {slide: sliderSlide, answers: [], expectedUiSlide: sliderUISlide});

test('should throw an error if the question type can not be handled', t => {
  const faultySlide = {...qcmSlide, question: {type: 'lol'}};
  t.throws(() => _mapApiSlideToUi(faultySlide as SlideFromAPI, []));
});
