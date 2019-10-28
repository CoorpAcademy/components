import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import get from 'lodash/fp/get';
import isEmpty from 'lodash/fp/isEmpty';
// import isUndefined from 'lodash/fp/isUndefined';
import Button from '../../atom/button';
import Provider from '../../atom/provider';
import style from './style.css';

const Hero = (props, context) => {
  const {skin} = context;
  const {image, title, author, progress, onClick, submitValue} = props;

  const primaryColor = get('common.primary', skin);
  const cardStyle = classnames(style.hero, title ? null : style.lazy, style.grid);
  const handleClick = e => onClick(e);

  const inlineProgressValueStyle = {
    backgroundColor: primaryColor,
    width: `${progress * 100}%`
  };

  return (
    <div className={cardStyle} data-name="hero" onClick={handleClick}>
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
        <div data-name="author" title={author} className={classnames(style.author)}>
          <span>{author}</span>
        </div>

        <div className={style.progressWrapper}>
          <div data-name="progress" className={style.progress} style={inlineProgressValueStyle} />
        </div>
        <div className={style.heroCtaWrapper}>
          <Button
            type="link"
            onClick={onClick}
            submitValue={submitValue}
            className={style.button}
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
