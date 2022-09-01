import {noop, getOr} from 'lodash/fp';
import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import Provider, {GetSkinFromContext} from '../provider';
import {getShadowBoxColorFromPrimary} from '../../util/get-shadow-box-color-from-primary';
import style from './handle.css';

class NoopHammer {
  constructor() {}

  // eslint-disable-next-line class-methods-use-this
  on() {
    return;
  }

  // eslint-disable-next-line class-methods-use-this
  stop() {
    return;
  }

  // eslint-disable-next-line class-methods-use-this
  destroy() {
    return;
  }
}

const Hammer = // eslint-disable-next-line no-undef
  typeof window !== 'undefined' ? /* istanbul ignore next */ require('hammerjs') : NoopHammer;

const Handle = (props, legacyContext) => {
  const skin = GetSkinFromContext(legacyContext);
  const primaryColor = getOr('#00B0FF', 'common.primary', skin);
  const backgroundColor = primaryColor;
  const {onPanStart = noop, onPanEnd = noop, onPan = noop} = props;

  const handle = useRef();
  const [hammer, setHammer] = useState();

  useEffect(() => {
    setHammer(new Hammer(handle.current));
  }, [handle]);

  useEffect(() => {
    if (!hammer) return;
    hammer.on('panstart', onPanStart);
    hammer.on('panend', onPanEnd);

    hammer.on('panleft panright', onPan);

    return () => {
      hammer.stop();
      hammer.destroy();
      setHammer(null);
    };
  }, [hammer, onPanStart, onPanEnd, onPan]);

  return (
    <div className={style.wrapper}>
      <div
        style={{
          backgroundColor,
          boxShadow: `0px 0px 20px ${getShadowBoxColorFromPrimary(primaryColor)}`
        }}
        className={style.default}
        ref={handle}
        data-name={'handle'}
      />
    </div>
  );
};

Handle.propTypes = {
  onPan: PropTypes.func,
  onPanStart: PropTypes.func,
  onPanEnd: PropTypes.func
};

Handle.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default Handle;
