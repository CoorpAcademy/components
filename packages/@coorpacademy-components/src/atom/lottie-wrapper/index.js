import React, {useMemo, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import lottie from 'lottie-web';
import unfetch from 'isomorphic-unfetch';
import {getOr, keys, noop, T} from 'lodash/fp';
import classnames from 'classnames';
import style from './style.css';

/**
 * Parse a resource into a JSON object or a URL string
 */
const getAnimationData = src => {
  if (typeof src === 'object') {
    return src;
  }

  try {
    const parsed = JSON.parse(src);
    return parsed;
  } catch (e) {
    console.log('parseSrc error', e);
  }

  // Try construct an absolute URL from the src URL
  try {
    return new URL(src).toString();
  } catch (e) {
    // Do nothing...
  }

  return src;
};

const LottieWrapper = props => {
  const {
    className,
    'data-name': dataName,
    'aria-label': ariaLabel,
    src,
    loop = false,
    rendererSettings = {},
    width = 100,
    height = 100
  } = props;

  const {className: animationClassName, hideOnTransparent = true} = rendererSettings;

  const containerRef = useRef(null);

  const wrapperClassName = useMemo(() => classnames(className, style.lottieContainer), [className]);

  const animationClassnames = useMemo(() => classnames(animationClassName, style.animation), [
    animationClassName
  ]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.lottie = lottie;
    }
    let animation;
    const fetchAndLoadAnimation = async animationSrc => {
      const animationUrl = new URL(animationSrc).toString();
      const fetchResult = await unfetch(animationUrl, {
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/json'
        }
      });
      const animationData = await fetchResult.json();

      // containerRef.

      animation = lottie.loadAnimation({
        container: containerRef.current, // the dom element that will contain the animation
        renderer: 'svg',
        // renderer: 'canvas',
        autoplay: true,
        loop,
        // animationData: {...animationData, w: width, h: height},
        animationData,
        rendererSettings: {
          // context: containerRef,
          className: animationClassnames,
          hideOnTransparent,
          preserveAspectRatio: 'xMidYMid meet'
          // viewBoxOnly: true
          // viewBoxSize: `0 0 ${width} ${height}`
        }
      });
      return () => lottie.destroy(animation?.name);
    };
    fetchAndLoadAnimation(src);

    return () => lottie.destroy(animation?.name);
  }, [
    animationClassName,
    animationClassnames,
    containerRef,
    height,
    hideOnTransparent,
    loop,
    src,
    width
  ]);

  return (
    <div
      ref={containerRef}
      aria-label={ariaLabel}
      data-name={dataName}
      className={wrapperClassName}
      style={{
        margin: '0 auto',
        outline: 'none',
        overflow: 'hidden',
        width: `${width}px`,
        // height: 'auto',
        height: `${height}px`,
        maxWidth: `${width}px`,
        maxHeight: `${height}px`
      }}
    />
  );
};

LottieWrapper.propTypes = {
  'aria-label': PropTypes.string,
  'data-name': PropTypes.string,
  src: PropTypes.string,
  loop: PropTypes.bool,
  rendererSettings: PropTypes.shape({
    hideOnTransparent: PropTypes.bool,
    className: PropTypes.string
  }),
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string
};

export default LottieWrapper;
