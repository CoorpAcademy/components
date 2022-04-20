import React, {useMemo, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import lottie from 'lottie-web';
import unfetch from 'isomorphic-unfetch';
import style from './style.css';

const useAsyncEffect = (effect, dependencies) => {
  useEffect(() => {
    effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependencies]);
};

export const fetchAndLoadAnimation = async (
  animationSrc,
  containerRef,
  loop,
  animationClassnames,
  hideOnTransparent,
  _lottie,
  _fetch
) => {
  const animationUrl = new URL(animationSrc).toString();
  const fetchResult = await _fetch(animationUrl, {
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json'
    }
  });
  // the animation data could be already fetched and passed down as a prop
  // to modify if needed:
  const animationData = await fetchResult.json();

  const animation = _lottie.loadAnimation({
    container: containerRef.current, // the dom element that will contain the animation
    renderer: 'svg',
    autoplay: true,
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

  useAsyncEffect(async () => {
    /* istanbul ignore next */
    if (typeof window !== 'undefined') {
      window.lottie = lottie;
    }

    const animation = await fetchAndLoadAnimation(
      src,
      containerRef,
      loop,
      animationClassnames,
      hideOnTransparent,
      lottie,
      unfetch
    );

    // istanbul ignore next
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
        width: `${width}px`,
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
