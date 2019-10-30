import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import classnames from 'classnames';
import {
  NovaCompositionCoorpacademyAdaptive as AdaptivIcon,
  NovaSolidStatusCheckCircle2 as CheckIcon,
  NovaCompositionCoorpacademyTimer as TimerIcon
} from '@coorpacademy/nova-icons';
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
    disabled = false,
    renderButton = () => null,
    mode = MODES.CARD,
    empty,
    author,
    progress,
    certifiedAuthor = false,
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
      {renderButton()}
    </div>
  );
};

ContentInfo.contextTypes = {
  skin: Provider.childContextTypes.skin
};

ContentInfo.propTypes = {
  adaptiv: PropTypes.bool,
  renderContentTypeIcon: PropTypes.func,
  renderCheckIcon: PropTypes.func,
  renderButton: PropTypes.func,
  empty: PropTypes.bool,
  title: PropTypes.string,
  author: PropTypes.string,
  disabled: PropTypes.bool,
  certifiedAuthor: PropTypes.bool,
  progress: PropTypes.number,
  type: PropTypes.string
};

export default ContentInfo;
