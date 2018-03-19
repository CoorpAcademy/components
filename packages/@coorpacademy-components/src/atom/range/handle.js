import noop from 'lodash/fp/noop';
import getOr from 'lodash/fp/getOr';
import React from 'react';
import PropTypes from 'prop-types';
import Provider from '../provider';
import style from './handle.css';

const Hammer =
  typeof window !== 'undefined' ? require('hammerjs') : /* istanbul ignore next */ undefined;

class Handle extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.setHandle = this.setHandle.bind(this);
  }

  componentDidMount() {
    /* istanbul ignore else */
    if (Hammer) {
      const {onPanStart = noop, onPanEnd = noop, onPan = noop} = this.props;

      this.hammer = new Hammer(this.handle);
      this.hammer.on('panstart', onPanStart);
      this.hammer.on('panend', onPanEnd);

      this.hammer.on('panleft panright', onPan);
    }
  }

  componentWillUnmount() {
    if (this.hammer) {
      this.hammer.stop();
      this.hammer.destroy();
    }
    this.hammer = null;
  }

  setHandle(el) {
    this.handle = el;
  }

  render() {
    const {skin} = this.context;
    const primaryColor = getOr('#00B0FF', 'common.primary', skin);
    const borderColor = primaryColor;

    return (
      <div
        style={{borderColor}}
        className={style.default}
        ref={this.setHandle}
        data-name={'handle'}
      />
    );
  }
}

Handle.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Handle.propTypes = {
  onPan: PropTypes.func,
  onPanStart: PropTypes.func,
  onPanEnd: PropTypes.func
};

export default Handle;
