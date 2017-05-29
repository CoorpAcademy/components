import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import * as CustomPropTypes from '../../util/proptypes';
import Provider from '../../atom/provider';
import Link from '../../atom/link';
import style from './style.css';

function Hero(props, context) {
  const {skin} = context;
  const bg = get('images.hero', skin);
  const {url, title, touch = false} = props;
  const backgroundImage = bg ? `url(${bg})` : '';
  const ctaClass = touch ? 'ctaTouch' : 'ctaNoTouch';

  return (
    <div
      className={style.hero}
      style={{
        backgroundImage
      }}
    >
      <Link href={url} className={style[ctaClass]}>
        <div
          className={style.label}
          style={{
            color: getOr('#00b0ff', 'common.primary', skin)
          }}
        >
          {title}
          <span
            className={style.bar}
            style={{
              backgroundColor: getOr('#00b0ff', 'common.primary', skin)
            }}
          />
        </div>
      </Link>
    </div>
  );
}

Hero.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Hero.propTypes = {
  url: PropTypes.oneOfType([CustomPropTypes.url, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired
};

export default Hero;
