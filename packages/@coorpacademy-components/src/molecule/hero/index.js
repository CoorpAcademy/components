import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import get from 'lodash/fp/get';
import Provider from '../../atom/provider';
import Button from '../../atom/button';
import CardContentInfo, {MODES} from '../card-content';
import style from './style.css';

const Hero = (props, context) => {
  const {skin} = context;
  const {image, title, author, progress, onClick, submitValue} = props;

  const primaryColor = get('common.primary', skin);
  const cardStyle = classnames(style.hero, title ? null : style.lazy);

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
      <CardContentInfo mode={MODES.HERO} author={author} progress={progress} title={title} />
      <div className={style.heroButtonWrapper}>
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
