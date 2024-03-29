import React from 'react';
import PropTypes from 'prop-types';
import ButtonLink from '../../../atom/button-link';
import style from './style.css';

const ReviewBanner = React.memo(function ReviewBanner(props) {
  const {title, subtitle, cta} = props;

  const buttonProps = {
    ...cta,
    type: 'primary'
  };

  return (
    <div className={style.root} data-name="start-review-banner">
      <div className={style.container}>
        <div className={style.banner}>
          <div className={style.left} role="img" aria-label="Left image container">
            <img
              className={style.image}
              src="https://static.coorpacademy.com/site/book.png"
              alt="Book image"
            />
          </div>
          <div className={style.middle}>
            <span className={style.title} data-name="review-banner-title" aria-label="{title}">
              {title}
            </span>
            <span
              className={style.subtitle}
              data-name="review-banner-subtitle"
              aria-label="{subtitle}"
            >
              {subtitle}
            </span>
            <ButtonLink {...buttonProps} className={style.cta} />
          </div>
          <div className={style.right} role="img" aria-label="Rigth image container">
            <img
              className={style.image}
              src="https://static.coorpacademy.com/site/dumbell.png"
              alt="Dumbbell image"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

ReviewBanner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  cta: PropTypes.shape({
    onClick: PropTypes.func,
    label: PropTypes.string
  })
};

export default ReviewBanner;
