import browserEnv from 'browser-env';
import test from 'ava';
import React from 'react';
import {render, fireEvent, act} from '@testing-library/react';
import SlidesReview from '..';
import AnswerQCMDrag from '../../../../molecule/answer/test/fixtures/qcm-drag';
import successFixture from './fixtures/success';
import failureFixture from './fixtures/failure';
import failOnceOnLastSlideFixture from './fixtures/only-once-on-last-slide';

browserEnv({pretendToBeVisual: true});

const elementExists = foundElements => foundElements && foundElements[0];

const sleep = msToSleep => new Promise(resolve => setTimeout(resolve, msToSleep));

const waitForRevisionEndChanges = async () => {
  await act(async () => {
    await sleep(2500); // wait *just* a little longer than the timeout in the component
  });
};

const qcmDrag = AnswerQCMDrag.props;

const LIMIT = 5;

const clickAllSlides = async (t, container, accumulator = 0) => {
  if (accumulator === LIMIT) return;

  // last one needs to wait for more calculations && components updates
  if (accumulator === 4)
    await act(async () => {
      await sleep(2000);
    });

  const validateButton = container.querySelectorAll(
    `[data-name="slide-validate-button-${accumulator}"]`
  );
  t.truthy(elementExists(validateButton));

  await act(async () => {
    await fireEvent.click(validateButton[0]);
  });

  const nextButton = container.querySelectorAll(
    `[data-name="next-question-button-${accumulator}"]`
  );
  t.truthy(elementExists(nextButton));

  await act(async () => {
    await fireEvent.click(nextButton[0]);
  });

  await clickAllSlides(t, container, accumulator + 1);
};

test.serial('should validate all the slides && unmount the stacked slides after', async t => {
  const {container} = render(<SlidesReview {...successFixture.props} key={0} />);

  const wrapper = container.querySelectorAll('[data-name="slides-revision-container"]');
  t.truthy(wrapper);

  let stackedSlidesContainer = container.querySelectorAll('[data-name="stacked-slides-container"]');
  t.truthy(elementExists(stackedSlidesContainer));

  await clickAllSlides(t, container);

  await waitForRevisionEndChanges();

  stackedSlidesContainer = container.querySelectorAll('[data-name="stacked-slides-container"]');
  t.falsy(elementExists(stackedSlidesContainer));

  t.pass();
});

test.serial('should validate all the slides except the last one, retry and pass', async t => {
  const {container} = render(<SlidesReview {...failOnceOnLastSlideFixture.props} key={1} />);

  const wrapper = container.querySelectorAll('[data-name="slides-revision-container"]');
  t.truthy(wrapper);

  const stackedSlidesContainer = container.querySelectorAll(
    '[data-name="stacked-slides-container"]'
  );
  t.truthy(elementExists(stackedSlidesContainer));

  // loop once
  await clickAllSlides(t, container);

  // fail the first slide again (the other slides are passed)
  const validateButton = container.querySelectorAll('[data-name="slide-validate-button-0"]');
  t.truthy(elementExists(validateButton));

  await act(async () => {
    await fireEvent.click(validateButton[0]);
  });

  t.pass();
});

test.serial('should fail all the slides && still find the stacked slides after', async t => {
  const {container} = render(<SlidesReview {...failureFixture.props} key={2} />);

  const wrapper = container.querySelectorAll('[data-name="slides-revision-container"]');
  t.truthy(wrapper);

  let stackedSlidesContainer = container.querySelectorAll('[data-name="stacked-slides-container"]');
  t.truthy(elementExists(stackedSlidesContainer));

  // loop once
  await clickAllSlides(t, container);

  // fail the first slide again (all the other slides are also on fail state)
  const validateButton = container.querySelectorAll('[data-name="slide-validate-button-0"]');
  t.truthy(elementExists(validateButton));

  await act(async () => {
    await fireEvent.click(validateButton[0]);
  });

  stackedSlidesContainer = container.querySelectorAll('[data-name="stacked-slides-container"]');
  t.truthy(elementExists(stackedSlidesContainer));

  t.pass();
});

test.serial('should end Revision on signal && unmount the stacked slides after', async t => {
  t.plan(6);
  const onValidateClick = () => {
    t.pass();
    return Promise.resolve({
      validationResult: 'failure',
      nextSlide: {question: 'Other question?', answer: qcmDrag},
      endReview: true
    });
  };

  const props = {
    ...failureFixture.props,
    validate: {
      label: failureFixture.props.validate.label,
      onClick: onValidateClick
    }
  };

  const {container} = render(<SlidesReview {...props} key={3} />);

  const wrapper = container.querySelectorAll('[data-name="slides-revision-container"]');
  t.truthy(wrapper);

  let stackedSlidesContainer = container.querySelectorAll('[data-name="stacked-slides-container"]');
  t.truthy(elementExists(stackedSlidesContainer));

  const validateButton = container.querySelectorAll('[data-name="slide-validate-button-0"]');
  t.truthy(elementExists(validateButton));

  await act(async () => {
    await fireEvent.click(validateButton[0]);
  });

  await waitForRevisionEndChanges();

  stackedSlidesContainer = container.querySelectorAll('[data-name="stacked-slides-container"]');
  t.falsy(elementExists(stackedSlidesContainer));

  t.pass();
});
