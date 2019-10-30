import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import classnames from 'classnames';
import {
  NovaCompositionCoorpacademyAdaptive as AdaptivIcon,
  NovaSolidStatusCheckCircle2 as CheckIcon,
  NovaCompositionCoorpacademyTimer as TimerIcon
} from '@coorpacademy/nova-icons';
import Button from '../../atom/button';
import Provider from '../../atom/provider';
import style from './style.css';

export const MODES = {
  HERO: 'hero',
  CARD: 'card'
};

const createContentTypeIcon = (whiteColor, adaptiv, type) => {
  if (adaptiv) {
    return (
      <div className={style.specificIcon}>
        <AdaptivIcon color={whiteColor} height={25} />
      </div>
    );
  }
  if (type === 'chapter') {
    return (
      <div className={style.specificIcon}>
        <TimerIcon color={whiteColor} height={25} />
      </div>
    );
  }
  return null;
};

const ContentInfo = (
  {
    adaptiv,
    author,
    certifiedAuthor = false,
    disabled = false,
    empty = false,
    mode = MODES.CARD,
    onClick,
    progress,
    submitValue,
    title,
    type
  },
  context
) => {
  const {skin} = context;
  const primaryColor = get('common.primary', skin);
  const whiteColor = get('common.white', skin);
  const inlineProgressValueStyle = {
    backgroundColor: primaryColor,
    width: `${progress * 100}%`
  };

  const progressBar =
    mode === MODES.HERO || (!empty && !disabled) ? (
      <div className={style.progressWrapper}>
        {!disabled && (
          <div data-name="progress" className={style.progress} style={inlineProgressValueStyle} />
        )}
      </div>
    ) : null;

  const contentTypeIcon =
    mode === MODES.CARD ? createContentTypeIcon(whiteColor, adaptiv, type) : null;

  const checkIcon = certifiedAuthor ? (
    <CheckIcon className={style.authorIcon} color="inherit" />
  ) : null;

  const button =
    mode === MODES.HERO ? (
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
    ) : null;

  return (
    <div
      data-name="info"
      className={classnames(
        style.infoWrapper,
        mode === MODES.HERO ? style.hero : style.card,
        disabled ? style.progressBarDisabled : null
      )}
    >
      {contentTypeIcon}
      <div className={classnames(style.title, empty ? style.empty : null)}>
        <div data-name="title" title={title}>
          {title}
        </div>
      </div>
      <div
        data-name="author"
        title={author}
        className={classnames(style.author, empty ? style.empty : null)}
      >
        <span>{author}</span>
        {checkIcon}
      </div>

      {progressBar}
      {button}
    </div>
  );
};

ContentInfo.contextTypes = {
  skin: Provider.childContextTypes.skin
};

ContentInfo.propTypes = {
  adaptiv: PropTypes.bool,
  author: PropTypes.string,
  certifiedAuthor: PropTypes.bool,
  disabled: PropTypes.bool,
  empty: PropTypes.bool,
  onClick: PropTypes.func,
  progress: PropTypes.number,
  submitValue: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string
};

export default ContentInfo;
