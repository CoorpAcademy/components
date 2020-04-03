import React from 'react';
import PropTypes from 'prop-types';
import {get} from 'lodash/fp';
import classnames from 'classnames';
import {
  NovaCompositionCoorpacademyAdaptive as AdaptivIcon,
  NovaSolidStatusCheckCircle2 as CheckIcon,
  NovaCompositionCoorpacademyTimer as TimerIcon
} from '@coorpacademy/nova-icons';
import {isExternalContent, EXTERNAL_CONTENT_ICONS} from '../../util/external-content';
import Provider from '../../atom/provider';
import style from './style.css';

export const MODES = {
  HERO: 'hero',
  CARD: 'card'
};

const ContentTypeInfo = ({mode, adaptiv, type, externalContent}, context) => {
  const {skin, translate} = context;

  if (mode !== MODES.CARD) {
    return null;
  }

  const whiteColor = get('common.white', skin);
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
  if (externalContent && EXTERNAL_CONTENT_ICONS[type]) {
    const textColor = EXTERNAL_CONTENT_ICONS[type].color;
    const localKey = 'external_content_scorm';

    return (
      <div className={style.contentTypeInfo} style={{color: textColor}}>
        {translate(localKey)}
      </div>
    );
  }

  return null;
};

ContentTypeInfo.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

const CardTitle = ({title, empty, externalContent}) => {
  return (
    <div
      className={classnames(
        style.title,
        externalContent ? style.darkTitle : style.lightTitle,
        empty ? style.empty : null
      )}
    >
      <div data-name="title" title={title}>
        {title}
      </div>
    </div>
  );
};

const AuthorName = ({author, empty, externalContent, certifiedAuthor}) => {
  const checkIcon = certifiedAuthor ? (
    <CheckIcon
      className={classnames(style.authorIcon, !externalContent ? style.iconShadow : null)}
      color="inherit"
    />
  ) : null;

  return (
    <div
      data-name="author"
      title={author}
      className={classnames(
        style.author,
        externalContent ? style.darkAuthorTitle : style.lightTitle,
        empty ? style.empty : null
      )}
    >
      <span>{author}</span>
      {checkIcon}
    </div>
  );
};

const ContentInfo = ({
  adaptiv,
  author,
  certifiedAuthor = false,
  disabled = false,
  empty = false,
  mode = MODES.CARD,
  progress,
  title,
  type
}) => {
  const progressBarColor = '#3EC483';
  const inlineProgressValueStyle = {
    backgroundColor: progressBarColor,
    width: `${progress * 100}%`
  };
  const externalContent = isExternalContent(type);

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
      <ContentTypeInfo
        mode={mode}
        adaptiv={adaptiv}
        type={type}
        externalContent={externalContent}
      />
      <CardTitle title={title} empty={empty} externalContent={externalContent} />
      <AuthorName
        author={author}
        empty={empty}
        externalContent={externalContent}
        certifiedAuthor={certifiedAuthor}
      />
      {progressBar}
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
  progress: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.string,
  mode: PropTypes.string
};

export default ContentInfo;
