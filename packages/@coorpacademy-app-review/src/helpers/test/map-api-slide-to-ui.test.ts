import test from 'ava';
import {SlideFromAPI, UISlide} from '../../types/common';
import {mapApiSlideToUi} from '../map-api-slide-to-ui';
import {qcmUISlide, qcmSlide} from './fixtures/qcm';
import {qcmDragUISlide, qcmDragSlide} from './fixtures/qcm-drag';
import {freeTextSlide, freeTextUISlide} from './fixtures/free-text';
import {qcmGraphicUISlide, qcmGraphicSlide} from './fixtures/qcm-graphic';
import {textTemplateSlide, textTemplateUISlide} from './fixtures/text-template';
import {selectTemplateSlide, selectTemplateUISlide} from './fixtures/select-template';
import {sliderSlide, sliderUISlide} from './fixtures/slider';

const _mapApiSlideToUi = mapApiSlideToUi({translate: (text: string) => text});

const macro = test.macro({
  title(providedTitle) {
    return `should handle ${providedTitle} conversion`.trim();
  },
  exec(
    t,
    arg: {
      slide: SlideFromAPI;
      expectedUiSlide: Partial<UISlide>;
    }
  ) {
    t.deepEqual(
      JSON.parse(JSON.stringify(_mapApiSlideToUi(arg.slide))),
      JSON.parse(JSON.stringify(arg.expectedUiSlide))
    );
  }
});

test('qcm', macro, {slide: qcmSlide, expectedUiSlide: qcmUISlide});
test('qcm drag', macro, {slide: qcmDragSlide, expectedUiSlide: qcmDragUISlide});
test('qcm graphic', macro, {slide: qcmGraphicSlide, expectedUiSlide: qcmGraphicUISlide});
test('text template', macro, {slide: textTemplateSlide, expectedUiSlide: textTemplateUISlide});
test('select template', macro, {
  slide: selectTemplateSlide,
  expectedUiSlide: selectTemplateUISlide
});
test('free text', macro, {slide: freeTextSlide, expectedUiSlide: freeTextUISlide});
test('slider', macro, {slide: sliderSlide, expectedUiSlide: sliderUISlide});

test('should throw an error if the question type can not be handled', t => {
  const faultySlide = {...qcmSlide, question: {type: 'lol'}};
  t.throws(() => _mapApiSlideToUi(faultySlide as SlideFromAPI));
});
