import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import Link from '../../../atom/link';
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
        {secondaryTitleView}
      </div>
      <div className={style.livesWrapper}>
        <div className={style.lives}>
          x{lives.count}
        </div>
      </div>
    </div>
  );
};

SlidesHeader.contextTypes = {
  skin: PropTypes.object
};

SlidesHeader.propTypes = {
  backHref: PropTypes.string.required,
  primary: PropTypes.shape({
    title: PropTypes.string.required,
    subtitle: PropTypes.string
  }),
  secondary: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string
  }),
  lives: PropTypes.shape({
    count: PropTypes.number.required
  })
};

export default SlidesHeader;
