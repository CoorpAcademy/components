import React from 'react';
import classnames from 'classnames';
import {get} from 'lodash/fp';
import Provider from '../../atom/provider';
import Button from '../../atom/button';
import CardContentInfo, {MODES} from '../card-content';
import {WebContextValues} from '../../atom/provider/web-context';
import {propTypes, Props} from './types';
import style from './style.css';

const Hero = (props: Props, context: WebContextValues) => {
  const {skin} = context;
  const {
    image,
    title,
    author,
    progress,
    onClick,
    submitValue,
    description,
    mode = MODES.HERO
  } = props;

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
      {mode === MODES.HERO ? (
        <CardContentInfo mode={MODES.HERO} author={author} progress={progress} title={title} />
      ) : (
        <div className={style.infoWrapper}>
          <h1 className={style.title}>{title}</h1>
          <p className={style.description}>{description}</p>
        </div>
      )}
      {mode === MODES.HERO ? (
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
      ) : null}
    </div>
  );
};

Hero.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Hero.propTypes = propTypes;

export default Hero;
