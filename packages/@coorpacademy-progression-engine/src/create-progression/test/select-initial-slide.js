// @flow
import test from 'ava';
import cloneDeep from 'lodash/fp/cloneDeep';
import type {Slide, SlidePool} from '../../types';
import selectInitialSlide from '../select-initial-slide';
import allSlides from '../../compute-next-step/test/fixtures/slides';

const slidesByChapter = (slides: Array<Slide>): Array<SlidePool> => [
  {
    chapterId: '1.A1',
    slides: slides.filter(slide => slide.chapter_id === '1.A1')
  },
  {
    chapterId: '2.A1',
    slides: slides.filter(slide => slide.chapter_id === '2.A1')
  }
];

test('should return null if there are no slide pools', t => {
  t.is(selectInitialSlide([]), null);
});

test('should return a random slide from the first chapter if none have a `position`', t => {
  const slidePools = slidesByChapter(allSlides);
  Array.from({length: 50}).forEach(() => {
    const slide = selectInitialSlide(slidePools);
    if (!slide) {
      t.fail('slide should not be null');
    } else {
      t.is(slide.chapter_id, '1.A1');
    }
  });
});

test('should return the slide with the highest `position` if at least one slide has the field', t => {
  const slides = cloneDeep(allSlides);
  slides[3].position = 5;
  slides[4].position = 10;
  const slidePools = slidesByChapter(slides);

  Array.from({length: 10}).forEach(() => {
    t.is(selectInitialSlide(slidePools), slides[4]);
  });
});
