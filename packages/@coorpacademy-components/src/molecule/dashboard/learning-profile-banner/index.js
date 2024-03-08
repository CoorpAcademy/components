import React from 'react';
import PropTypes from 'prop-types';
import ButtonLink from '../../../atom/button-link';
import style from './style.css';

const LearningProfileBanner = React.memo(function LearningProfileBanner(props) {
  const {title, subtitle, cta} = props;

  const buttonProps = {
    ...cta,
    type: 'primary'
  };

  return (
    <div className={style.root} data-name="start-learning-profile-banner">
      <div className={style.container}>
        <div className={style.banner}>
          <div className={style.left} role="img" aria-label="Left image container">
            <img
              className={style.image}
              src="https://static.coorpacademy.com/site/notebook.png"
              alt="Note book image"
            />
          </div>
          <div className={style.middle}>
            <span
              className={style.title}
              data-name="learning-profile-banner-title"
              aria-label="{title}"
            >
              {title}
            </span>
            <span
              className={style.subtitle}
              data-name="learning-profile-banner-subtitle"
              aria-label="{subtitle}"
            >
              {subtitle}
            </span>
            <ButtonLink {...buttonProps} className={style.cta} />
          </div>
          <div className={style.right} role="img" aria-label="Right image container">
            <img
              className={style.image}
              src="https://static.coorpacademy.com/site/target.png"
              alt="Target image"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

LearningProfileBanner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  cta: PropTypes.shape({
    onClick: PropTypes.func,
    label: PropTypes.string
  })
};

export default LearningProfileBanner;
