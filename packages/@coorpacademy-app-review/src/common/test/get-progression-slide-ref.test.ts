import test from 'ava';
import {
  postProgressionResponse,
  progressionSlideWithPendingSlide
} from '@coorpacademy/review-services-mocks';
import {templateSlide} from '../../views/slides/test/fixtures/template';
import {getProgressionSlidesRefs} from '..';
import {postAnswerResponses} from '../../test/fixtures';

test('should return first slide for a created slide', t => {
  const slides = getProgressionSlidesRefs(postProgressionResponse);
  t.deepEqual(slides, ['sli_VJYjJnJhg']);
});

test('should return all 5 slides when user is going to answer the 5th slide', t => {
  const slides = getProgressionSlidesRefs(postAnswerResponses[templateSlide._id]);
  t.deepEqual(slides, [
    'sli_VJYjJnJhg',
    'sli_VkSQroQnx',
    'sli_N1XACJobn',
    'sli_VkAzsCLKb',
    'sli_N13-hG3kX'
  ]);
});

test('should return all 5 slides when progression has a nextContent ref that is a pending slide', t => {
  const slides = getProgressionSlidesRefs(progressionSlideWithPendingSlide);
  t.deepEqual(slides, [
    'sli_VJYjJnJhg',
    'sli_VkSQroQnx',
    'sli_N1XACJobn',
    'sli_VkAzsCLKb',
    'sli_N13-hG3kX'
  ]);
});
