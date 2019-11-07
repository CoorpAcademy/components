import React from 'react';
import PropTypes from 'prop-types';
import {get} from 'lodash/fp';
import Button from '../../atom/button';
import Link from '../../atom/link';
import Provider from '../../atom/provider';
import style from './style.css';

const CookieBanner = ({href, onClick}, context) => {
  const {translate, skin} = context;
  const primary = get('common.primary', skin);

  const intro = translate('cookies_title');
  const text = translate('cookies_details');
  const title = translate('cookies_policy');
  const ok = translate('Ok');
  const handleOnClick = onClick;

  return (
    <div className={style.banner}>
      <p>
        <span className={style.intro}>{intro}</span>
        <span>{text}</span>
        <Link
          className={style.link}
          href={href}
          target="_blank"
          style={{
            color: primary
          }}
        >
          {title}
        </Link>
      </p>
      <Button
        type="link"
        data-name="cookie-banner-cta"
        className={style.button}
        submitValue={ok}
        onClick={handleOnClick}
        style={{
          backgroundColor: primary
        }}
      />
    </div>
  );
};

CookieBanner.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

CookieBanner.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func
};

export default CookieBanner;
