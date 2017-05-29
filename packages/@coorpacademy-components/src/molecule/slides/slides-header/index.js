import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import Link from '../../../atom/link';
import Provider from '../../../atom/provider';
import style from './style.css';

const SlidesHeader = (props, context) => {
  const {backHref, primary, secondary, lives} = props;
  const {skin} = context;

  const primarySkinColor = getOr('#00B0FF', 'common.primary', skin);

  const primarySubtitleView = primary && primary.subtitle
    ? <div
        className={style.primarySubtitle}
        style={{
          color: primarySkinColor
        }}
      >
        {primary.subtitle}
      </div>
    : null;

  const secondarySubtitleView = secondary && secondary.subtitle
    ? <div className={style.secondarySubtitle}>
        {secondary.subtitle}
      </div>
    : null;

  const secondaryTitleView = secondary && secondary.title
    ? <div className={style.secondaryTitle}>
        {secondary.title}
      </div>
    : null;

  return (
    <div className={style.wrapper}>
      <Link href={backHref} className={style.back} />
      <div className={style.primary}>
        {primarySubtitleView}
        <div className={style.primaryTitle}>
          {primary.title}
        </div>
      </div>
      <div className={style.secondary}>
        {secondarySubtitleView}
        {secondaryTitleView}
      </div>
      <div className={style.livesWrapper}>
        <div className={style.heartBackground} />
        <div className={style.heart} />
        <div className={style.lives}>
          x{lives.count}
        </div>
      </div>
    </div>
  );
};

SlidesHeader.contextTypes = {
  skin: Provider.childContextTypes.skin
};

SlidesHeader.propTypes = {
  backHref: PropTypes.string.isRequired,
  primary: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
  }),
  secondary: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string
  }),
  lives: PropTypes.shape({
    count: PropTypes.number.isRequired
  })
};

export default SlidesHeader;
