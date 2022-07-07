import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atom/button';
import style from './style.css';

const Go1Banner = props => {
  const {image, title, subTitle, onClick, submitValue} = props;

  return (
    <div className={style.background} data-name="go1-banner">
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
          <Button
            type="link"
            data-name="learn-more-button"
            onClick={onClick}
            submitValue={submitValue}
            className={style.ctaButton}
            style={{backgroundColor: '#D5FD42'}}
          />
        </div>
      </div>
      <img className={style.image} src={image} />
    </div>
  );
};

Go1Banner.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  onClick: Button.propTypes.onClick,
  submitValue: Button.propTypes.submitValue
};

export default Go1Banner;
