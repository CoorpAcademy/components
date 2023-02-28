import {noop, getOr} from 'lodash/fp';
import React, {useEffect, useMemo, useRef} from 'react';
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
  const {onPanStart = noop, onPanEnd = noop, onPan = noop, HammerForTesting} = props;

  const handle = useRef();

  const hammer = useMemo(() => {
    return HammerForTesting || (handle.current && new Hammer(handle.current));
    // (we need to mount Hammer when handle.current is rendered and ready)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handle.current, HammerForTesting]);

  useEffect(() => {
    if (!hammer) return;
    hammer.on('panstart', onPanStart);
    hammer.on('panend', onPanEnd);

    hammer.on('panleft panright', onPan);

    return () => {
      hammer.stop();
      hammer.destroy();
    };
  }, [hammer, onPanStart, onPanEnd, onPan]);

  return (
    <div className={style.wrapper} data-testid="handle-wrapper">
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
  onPanEnd: PropTypes.func,
  HammerForTesting: PropTypes.shape({
    on: PropTypes.func,
    destroy: PropTypes.func,
    stop: PropTypes.func
  })
};

Handle.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default Handle;
