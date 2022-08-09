import React, {useState, useMemo, useEffect} from 'react';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import indexOf from 'lodash/fp/indexOf';
import pipe from 'lodash/fp/pipe';
import size from 'lodash/fp/size';
import _toString from 'lodash/fp/toString';
import {ICON_VALUES} from '../../../atom/review-header-step-item';
import ReviewBackground from '../../../atom/review-background';
import ReviewCongrats from '../../../organism/review-congrats';
import ReviewHeader from '../../../organism/review-header';
import StackedSlides from '../../../organism/review-stacked-slides';
import style from './style.css';
import {SlidesReviewPropTypes} from './prop-types';

const SlidesReview = (
  {
    header,
    slides,
    reviewBackgroundAriaLabel,
    apiSlides,
    reviewStatus,
    congratsProps,
    progression
  }
) => {
  const {uiSlides, finishedSlides, updateReviewStatus} = slides;

  const finishedSlidesSize = useMemo(() => size(finishedSlides), [finishedSlides]);

  const currentSlideRef = useMemo(() => get('state.content.ref', progression), [progression]);

  const currentSlideIndex = useMemo(
    () => pipe(get('slideRefs'), indexOf(currentSlideRef), _toString)(apiSlides),
    [apiSlides, currentSlideRef]
  );

  /*
    ||-------> the uiSlides have an slightly longer lifespan than the "ongoing" review State,
    after reviewState changes to "finished" the uiSlides don't have to unmount until the last
    slide-out animation is finished, the uiSlides have to be unmounted to be RGAA complaint.
    (if they are only invisible -but- still mounted, then they will be found by the assisting
    tools & clutter them)
  */
  const [shouldMountSlides, updateShouldMountSlides] = useState(true);

  // quel est le but de ce useEffect ?
  useEffect(
    /* istanbul ignore next */ () => {
      if (progression && size(apiSlides.slidesRefs) > 1) {
        const endReview = getOr(false, `${currentSlideIndex}.endReview`, uiSlides);
        const isCorrect = get('state.isCorrect', progression);
        updateStepItemsOnValidation({
          stepIndex: currentSlideIndex,
          icon: isCorrect ? ICON_VALUES.right : ICON_VALUES.wrong
        });
        if (isCorrect) updateFinishedSlides({currentSlideIndex, value: true});
        if (endReview) {
          updateReviewStatus('finished');
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [progression]
  );

  useEffect(
    /* istanbul ignore next */ () => {
      if (reviewStatus === 'finished') {
        const timeoutId = setTimeout(() => updateShouldMountSlides(false), 2000);
        return () => clearTimeout(timeoutId);
      }
      return;
    },
    [finishedSlidesSize, reviewStatus, updateReviewStatus]
  );

  // ||-------> transform the step items state to Array
  // const stepItemsArray = useMemo(() => map(stepItem => stepItem, stepItems), [stepItems]);

  return (
    <div
      key="slides-revision-container"
      data-name="slides-revision-container"
      className={style.slidesRevisionContainer}
    >
      <div key="player-background-container" className={style.playerBackground}>
        <ReviewBackground aria-label={reviewBackgroundAriaLabel} />
      </div>

      <div key="review-header-wrapper" className={style.reviewHeaderContainer}>
        <ReviewHeader {...header} />
      </div>

      {shouldMountSlides ? (
        <StackedSlides {...slides} />
      ) : /* istanbul ignore next */ null}

      {reviewStatus === 'finished' ? (
        <div className={style.congrats} data-name="congrats-container">
          <ReviewCongrats {...congratsProps} />
        </div>
      ) : null}
    </div>
  );
};

SlidesReview.propTypes = SlidesReviewPropTypes;

export default SlidesReview;
