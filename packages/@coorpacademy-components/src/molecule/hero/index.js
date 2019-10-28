import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import get from 'lodash/fp/get';
import Button from '../../atom/button';
import Provider from '../../atom/provider';
import style from './style.css';

const Hero = (props, context) => {
  const {skin} = context;
  const {image, title, author, progress, onClick, submitValue} = props;

  const primaryColor = get('common.primary', skin);
  const cardStyle = classnames(style.hero, title ? null : style.lazy);

  const inlineProgressValueStyle = {
    backgroundColor: primaryColor,
    width: `${progress * 100}%`
  };

  return (
    <div className={cardStyle} data-name="hero">
      <div className={style.imageWrapper}>
        <div
          data-name="cover"
          className={style.image}
          style={{
            backgroundColor: primaryColor,
            backgroundImage: image ? `url('${image}')` : 'none'
          }}
        />
      </div>
      <div data-name="info" className={style.infoWrapper}>
        <div className={classnames(style.title)}>
          <div data-name="title" title={title}>
            {title}
          </div>
        </div>
        <div title={author} className={classnames(style.author)}>
          <span data-name="author">{author}</span>
        </div>

        <div className={style.progressWrapper}>
          <div data-name="progress" className={style.progress} style={inlineProgressValueStyle} />
        </div>
        <div className={style.heroCtaWrapper}>
          <Button
            type="link"
            data-name="hero-button"
            onClick={onClick}
            submitValue={submitValue}
            className={style.heroButton}
            style={{backgroundColor: primaryColor}}
          />
        </div>
      </div>
    </div>
  );
};

Hero.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Hero.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  progress: PropTypes.number,
  onClick: PropTypes.func
};

export default Hero;
