import test from 'ava';
import identity from 'lodash/fp/identity';
import {SlideFromAPI, UISlide} from '../../../types/common';
import {mapApiSlideToUi} from '../map-api-slide-to-ui';
import {qcmUISlide, qcmSlide} from './fixtures/qcm';
import {qcmDragUISlide, qcmDragSlide} from './fixtures/qcm-drag';
import {freeTextSlide, freeTextUISlide} from './fixtures/free-text';
import {qcmGraphicUISlide, qcmGraphicSlide} from './fixtures/qcm-graphic';
import {textTemplateSlide, textTemplateUISlide} from './fixtures/text-template';
import {selectTemplateSlide, selectTemplateUISlide} from './fixtures/select-template';
import {sliderSlide, sliderUISlide} from './fixtures/slider';

const macro = test.macro({
  title(providedTitle) {
    return `should handle ${providedTitle} conversion`.trim();
  },
  exec(
    t,
    arg: {
      slide: SlideFromAPI;
      answers: string[];
      expectedUiSlide: Partial<UISlide>;
    }
  ) {
    t.deepEqual(
      JSON.parse(JSON.stringify(mapApiSlideToUi(arg.slide, arg.answers, identity))),
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
test('text template', macro, {
  slide: textTemplateSlide,
  answers: [],
  expectedUiSlide: textTemplateUISlide
});
test('select template', macro, {
  slide: selectTemplateSlide,
  answers: [],
  expectedUiSlide: selectTemplateUISlide
});
test('free text', macro, {slide: freeTextSlide, answers: [], expectedUiSlide: freeTextUISlide});
test('slider', macro, {slide: sliderSlide, answers: [], expectedUiSlide: sliderUISlide});

test('should throw an error if the question type can not be handled', t => {
  const faultySlide = {...qcmSlide, question: {type: 'lol'}};
  t.throws(() => mapApiSlideToUi(faultySlide as SlideFromAPI, [], identity));
});
