import React from 'react';
import PropTypes from 'prop-types';
import ButtonLink from '../../atom/button-link';
import style from './style.css';

const Go1BaseBanner = props => {
  const {image, title, subTitle, buttonLabel, onClick} = props;

  return (
    <div className={style.background} data-name="go1-base-banner">
      <div className={style.textSection}>
        <span
          className={style.title}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: title}}
        />
        <span
          className={style.subTitle}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: subTitle}}
        />
        <div className={style.buttonWrapper}>
          <ButtonLink
            data-name="learn-more-button"
            onClick={onClick}
            type="primary"
            label={buttonLabel}
            icon={{
              position: 'right',
              faIcon: {
                name: 'arrow-right',
                color: 'white',
                size: 14
              }
            }}
          />
        </div>
      </div>
      <img className={style.image} src={image} />
    </div>
  );
};

Go1BaseBanner.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  buttonLabel: PropTypes.string,
  onClick: PropTypes.func
};

export default Go1BaseBanner;
