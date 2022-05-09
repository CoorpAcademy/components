import React, {useMemo, useRef, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import lottie from 'lottie-web';
import get from 'lodash/fp/get';
import has from 'lodash/fp/has';
import includes from 'lodash/fp/includes';
import keys from 'lodash/fp/keys';
import omit from 'lodash/fp/omit';
import unfetch from 'isomorphic-unfetch';
import style from './style.css';

export const ANIMATION_CONTROL = {
  play: 'play',
  pause: 'pause',
  stop: 'stop',
  loading: 'loading'
};

const isIE11 = () => {
  if (typeof window === 'undefined') return;
  const userAgent = get('navigator.userAgent', window);
  const hasMsCrypto = has('msCrypto', window);
  const hasRevision = includes('rv:', userAgent);
  const hasTrident = includes('Trident/', userAgent);

  return hasMsCrypto || (hasRevision && hasTrident);
};

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

  const animation = _lottie.loadAnimation({
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
    ie11ImageBackup,
    backupImageClassName,
    autoplay = true,
    animationControl
  } = props;

  const {className: animationClassName, hideOnTransparent = true} = rendererSettings;

  const containerRef = useRef(null);

  // lottie's animation instance
  const [animationItem, setAnimationItem] = useState(null);

  const [isAnimationVisible, setIsAnimationVisible] = useState(autoplay);

  const _isIE11 = useMemo(() => isIE11(), []);

  const wrapperClassName = useMemo(() => classnames(className, style.lottieContainer), [className]);

  const lottieAnimationClassName = useMemo(() => classnames(animationClassName, style.animation), [
    animationClassName
  ]);

  const ie11BackupImageClassName = useMemo(
    () => classnames(backupImageClassName, style.backupImage),
    [backupImageClassName]
  );

  useEffect(() => {
    // enzyme does not handle well the state update after an async useEffect in tests
    // to remove when the migration towards @testing-library/react is done
    /* istanbul ignore next */
    if (includes(animationControl, keys(omit('loading', ANIMATION_CONTROL))) && !autoplay) {
      setIsAnimationVisible(true);
      if (animationItem) animationItem[animationControl]();
      if (animationControl === ANIMATION_CONTROL.stop) setIsAnimationVisible(false);
    }
  }, [animationControl, animationItem, autoplay]);

  useEffect(() => {
    const loadAnimation = async () => {
      if (!_isIE11 && !animationItem) {
        /* istanbul ignore else */
        if (typeof window !== 'undefined') {
          window.lottie = lottie;
        }
        const animation = await fetchAndLoadAnimation(
          lottie,
          unfetch,
          animationSrc,
          containerRef,
          loop,
          lottieAnimationClassName,
          hideOnTransparent,
          autoplay
        );

        /* istanbul ignore next */
        setAnimationItem(animation);
      }
    };

    loadAnimation();
    return () => animationItem && /* istanbul ignore next */ lottie.destroy(animationItem.name);
  }, [
    lottieAnimationClassName,
    containerRef,
    hideOnTransparent,
    loop,
    animationSrc,
    _isIE11,
    animationItem,
    autoplay
  ]);

  return (
    <div
      ref={containerRef}
      aria-label={ariaLabel}
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
    >
      {_isIE11 ? (
        <img
          src={ie11ImageBackup}
          className={ie11BackupImageClassName}
          data-name="ie11-backup-image"
        />
      ) : null}
    </div>
  );
};

LottieWrapper.propTypes = {
  'aria-label': PropTypes.string.isRequired,
  'data-name': PropTypes.string,
  animationSrc: PropTypes.string.isRequired,
  loop: PropTypes.bool,
  rendererSettings: PropTypes.shape({
    hideOnTransparent: PropTypes.bool,
    className: PropTypes.string
  }),
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string,
  ie11ImageBackup: PropTypes.string.isRequired,
  backupImageClassName: PropTypes.string,
  autoplay: PropTypes.bool,
  animationControl: PropTypes.oneOf(keys(ANIMATION_CONTROL))
};

export default LottieWrapper;
