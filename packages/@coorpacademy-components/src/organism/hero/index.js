import React from 'react';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import identity from 'lodash/fp/identity';
import getOr from 'lodash/fp/getOr';
import {checker, createValidate} from '../../util/validation';
import Link from '../../atom/link';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    url: checker.string,
    title: checker.string,
    touch: checker.bool.optional
  }),
  children: checker.none
});

const Hero = (props, context) => {
  const {translate = identity, skin} = context;
  const bg = get('images.hero', skin);
  const {url, title, touch = false} = props;
  const text = translate(title);
  const backgroundImage = bg ? `url(${bg})` : '';
  const ctaClass = touch ? 'ctaTouch' : 'ctaNoTouch';

  return (
    <div
      className={style.hero}
      style={{
        backgroundImage
      }}
    >
      <Link
        href={url}
        className={style[ctaClass]}>
        <div
          className={style.label}
          style={{
            color: getOr('#00b0ff', 'common.primary', skin)
          }}
        >
          {text}
          <span
            className={style.bar}
            style={{
              backgroundColor: getOr('#00b0ff', 'common.primary', skin)
            }}
            >
            </span>
        </div>
      </Link>
    </div>
  );
};

Hero.contextTypes = {
  skin: React.PropTypes.object,
  translate: React.PropTypes.function
};

Hero.validate = createValidate(conditions);
export default Hero;
