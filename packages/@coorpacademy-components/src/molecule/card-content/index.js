import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import classnames from 'classnames';
import Provider from '../../atom/provider';
import style from './style.css';

export const MODES = {
  HERO: 'hero',
  CARD: 'card'
};

const ContentInfo = (
  {
    renderContentTypeIcon = () => null,
    renderCheckIcon = () => null,
    renderButton = () => null,
    mode = MODES.CARD,
    empty,
    title,
    author,
    progress,
    certifiedAuthor,
    disabled = false
  },
  context
) => {
  const {skin} = context;
  const primaryColor = get('common.primary', skin);
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

  return (
    <div
      data-name="info"
      className={classnames(
        style.infoWrapper,
        mode === MODES.HERO ? style.hero : style.card,
        disabled ? style.progressBarDisabled : null
      )}
    >
      {renderContentTypeIcon()}
      <div className={classnames(style.title, empty ? style.empty : null)}>
        <div data-name="title" title={title}>
          {title}
        </div>
      </div>
      <div
        data-name="author"
        title={author}
        className={classnames(
          style.author,
          certifiedAuthor && style.certified,
          empty ? style.empty : null
        )}
      >
        <span>{author}</span>
        {renderCheckIcon()}
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
  renderContentTypeIcon: PropTypes.func,
  renderCheckIcon: PropTypes.func,
  renderButton: PropTypes.func,
  empty: PropTypes.bool,
  title: PropTypes.string,
  author: PropTypes.string,
  disabled: PropTypes.bool,
  certifiedAuthor: PropTypes.bool,
  progress: PropTypes.number
};

export default ContentInfo;
