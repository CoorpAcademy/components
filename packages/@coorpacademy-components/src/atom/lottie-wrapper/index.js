import React, {useMemo, useRef, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import lottie from 'lottie-web';
import get from 'lodash/fp/get';
import has from 'lodash/fp/has';
import includes from 'lodash/fp/includes';
import unfetch from 'isomorphic-unfetch';
import style from './style.css';

const isIE11 = () => {
  if (typeof window === 'undefined') return;
  const userAgent = get('navigator.userAgent', window);
  const hasMsCrypto = has('msCrypto', window);
  const hasRevision = includes('rv:', userAgent);
  const hasTrident = includes('Trident/', userAgent);

  return hasMsCrypto || (hasRevision && hasTrident);
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
    animationSrc,
    loop = false,
    rendererSettings = {},
    width,
    height,
    ie11ImageBackup,
    backupImageClassName
  } = props;

  const {className: animationClassName, hideOnTransparent = true} = rendererSettings;

  const containerRef = useRef(null);

  const [animationItem, setAnimationItem] = useState(null);

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
    const loadAnimation = async () => {
      if (!_isIE11 && !animationItem) {
        /* istanbul ignore next */
        if (typeof window !== 'undefined') {
          window.lottie = lottie;
        }
        const animation = await fetchAndLoadAnimation(
          animationSrc,
          containerRef,
          loop,
          lottieAnimationClassName,
          hideOnTransparent,
          lottie,
          unfetch
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
    animationItem
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
        })
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
  'aria-label': PropTypes.string,
  'data-name': PropTypes.string,
  animationSrc: PropTypes.string,
  loop: PropTypes.bool,
  rendererSettings: PropTypes.shape({
    hideOnTransparent: PropTypes.bool,
    className: PropTypes.string
  }),
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string,
  ie11ImageBackup: PropTypes.string,
  backupImageClassName: PropTypes.string
};

export default LottieWrapper;
