import React, {useMemo, useRef, useEffect, useState} from 'react';
import classnames from 'classnames';
import lottie from 'lottie-web';
import includes from 'lodash/fp/includes';
import isNil from 'lodash/fp/isNil';
import keys from 'lodash/fp/keys';
import omit from 'lodash/fp/omit';
import unfetch from 'isomorphic-unfetch';
import style from './style.css';
import propTypes, {ANIMATION_CONTROL} from './prop-types';

export const fetchAndLoadAnimation = async (
  _lottie,
  _fetch,
  animationSrc,
  containerRef,
  loop,
  animationClassnames,
  hideOnTransparent,
  autoplay
) => {
  const animationUrl = new URL(animationSrc).toString();
  const fetchResult = await _fetch(animationUrl, {
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json'
    }
  });

  const animationData = await fetchResult.json();

  const animation =
    _lottie.loadAnimation &&
    _lottie.loadAnimation({
      container: containerRef.current, // the dom element that will contain the animation
      renderer: 'svg',
      autoplay,
      loop,
      animationData,
      rendererSettings: {
        className: animationClassnames,
        hideOnTransparent,
        preserveAspectRatio: 'xMidYMid meet' // same options as a preserveAspectRatio prop
      }
    });
  return animation;
};

const LottieWrapper = props => {
  const {
    className,
    'data-name': dataName,
    'aria-label': ariaLabel,
    animationSrc,
    loop = false,
    rendererSettings = {},
    width,
    height,
    autoplay = true,
    animationControl
  } = props;
  const {className: animationClassName, hideOnTransparent = true} = rendererSettings;

  const containerRef = useRef(null);
  const isCancelledRef = useRef(null);

  // lottie's animation instance
  const [animationItem, setAnimationItem] = useState(null);

  const [isAnimationVisible, setIsAnimationVisible] = useState(autoplay);

  const wrapperClassName = useMemo(() => classnames(className, style.lottieContainer), [className]);

  const lottieAnimationClassName = useMemo(
    () => classnames(animationClassName, style.animation),
    [animationClassName]
  );

  useEffect(() => {
    if (includes(animationControl, keys(omit('loading', ANIMATION_CONTROL))) && !autoplay) {
      setIsAnimationVisible(true);
      /* istanbul ignore next */
      if (animationItem) animationItem[animationControl]();
      if (animationControl === ANIMATION_CONTROL.stop) setIsAnimationVisible(false);
    }
  }, [animationControl, animationItem, autoplay]);

  useEffect(() => {
    const loadAnimation = async () => {
      /* istanbul ignore else */
      if (!animationItem && typeof window !== 'undefined') {
        window.lottie = lottie;
        const animation = await fetchAndLoadAnimation(
          window.lottie,
          unfetch,
          animationSrc,
          containerRef,
          loop,
          lottieAnimationClassName,
          hideOnTransparent,
          autoplay
        );

        isNil(isCancelledRef.current) && setAnimationItem(animation);
      }
    };

    loadAnimation();
    return () => {
      isCancelledRef.current = true;
      return animationItem && /* istanbul ignore next */ window.lottie.destroy(animationItem.name);
    };
  }, [
    lottieAnimationClassName,
    containerRef,
    hideOnTransparent,
    loop,
    animationSrc,
    animationItem,
    autoplay
  ]);

  const accessibilityProps = ariaLabel
    ? {
        'aria-label': ariaLabel,
        role: 'img'
      }
    : {
        'aria-hidden': 'true',
        role: 'presentation'
      };

  return (
    <div
      {...accessibilityProps}
      ref={containerRef}
      data-name={dataName}
      className={wrapperClassName}
      style={{
        ...(width && {
          width: `${width}px`,
          maxWidth: `${width}px`
        }),
        ...(height && {
          height: `${height}px`,
          maxHeight: `${height}px`
        }),
        opacity: isAnimationVisible ? 1 : 0,
        transition: 'opacity 0.25s ease-in'
      }}
    />
  );
};

LottieWrapper.propTypes = propTypes;

export default LottieWrapper;
