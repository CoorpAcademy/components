import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {isNil, keys} from 'lodash/fp';
import {
  NovaCompositionCoorpacademyAdaptive as AdaptivIcon,
  NovaSolidStatusCheckCircle2 as CheckIcon,
  NovaCompositionCoorpacademyTimer as TimerIcon
} from '@coorpacademy/nova-icons';
import {isExternalContent, EXTERNAL_CONTENT_ICONS} from '../../util/external-content';
import Provider from '../../atom/provider';
import ContentBadge from '../../atom/content-badge';
import {innerHTML} from '../../atom/label/style.css';
import style from './style.css';

export const MODES = {
  HERO: 'hero',
  CARD: 'card'
};

export const THEMES = {
  default: null,
  coorpmanager: style.coorpmanager
};

const ContentTypeInfo = ({mode, type, externalContent}, context) => {
  const {translate} = context;
  if (mode !== MODES.CARD) {
    return null;
  }

  if (type === 'chapter') {
    return (
      <div className={style.microLearningIcon}>
        <TimerIcon className={style.timerIcon} />
        <span className={style.microLearninglabel}>{"5' learning"}</span>
      </div>
    );
  }
  if (externalContent && EXTERNAL_CONTENT_ICONS[type]) {
    const textColor = EXTERNAL_CONTENT_ICONS[type].color;

    return (
      <div className={style.contentTypeInfo} style={{color: textColor}}>
        {type === 'scorm' ? translate('external_content_scorm') : ''}
        {type === 'video' ? translate('external_content_video') : ''}
        {type === 'article' ? translate('external_content_article') : ''}
        {type === 'podcast' ? translate('external_content_podcast') : ''}
      </div>
    );
  }

  return null;
};

ContentTypeInfo.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

ContentTypeInfo.propTypes = {
  externalContent: PropTypes.bool,
  type: PropTypes.string,
  mode: PropTypes.string
};

const CardTitle = ({title, empty, courseContent}) => {
  return (
    <div
      className={classnames(
        style.title,
        innerHTML,
        courseContent ? style.lightTitle : style.darkTitle,
        empty ? style.empty : null
      )}
      data-name="title"
      title={title}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: title}}
    />
  );
};

CardTitle.propTypes = {
  title: PropTypes.string,
  empty: PropTypes.bool,
  courseContent: PropTypes.bool
};

const AuthorName = ({author, empty, courseContent, certifiedAuthor}) => {
  const checkIcon = certifiedAuthor ? (
    <CheckIcon
      className={classnames(style.authorIcon, courseContent ? style.iconShadow : null)}
      color="inherit"
    />
  ) : null;

  return (
    <div
      data-name="author"
      title={author}
      className={classnames(
        style.author,
        courseContent ? style.lightTitle : style.darkAuthorTitle,
        empty ? style.empty : null
      )}
    >
      <span>{author}</span>
      {checkIcon}
    </div>
  );
};

AuthorName.propTypes = {
  author: PropTypes.string,
  empty: PropTypes.bool,
  courseContent: PropTypes.bool,
  certifiedAuthor: PropTypes.bool
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
  type,
  badgeCategory,
  badgeLabel,
  theme = 'default',
  'aria-label': ariaLabel
}) => {
  const progressBarColor = '#3EC483';
  const inlineProgressValueStyle = {
    backgroundColor: progressBarColor,
    width: `${progress * 100}%`
  };
  const externalContent = isExternalContent(type);
  const courseContent = type === 'course';
  const chapterContent = type === 'chapter';

  const progressBar =
    mode === MODES.HERO || (!empty && !disabled) ? (
      <div className={!isNil(progress) ? style.progressWrapper : style.hideProgressBar}>
        {!disabled ? (
          <div
            data-name="progress"
            className={style.progress}
            style={inlineProgressValueStyle}
            aria-label={ariaLabel.progression}
          />
        ) : null}
      </div>
    ) : null;

  const adaptiveIcon = adaptiv ? (
    <div
      className={classnames(style.adaptiveIcon, courseContent ? style.iconShadow : null)}
      aria-label={ariaLabel.adaptive}
    >
      <AdaptivIcon height={25} />
    </div>
  ) : null;

  return (
    <div
      data-name="info"
      className={classnames(
        THEMES[theme],
        style.infoWrapper,
        mode === MODES.HERO ? style.hero : style.card,
        disabled ? style.progressBarDisabled : null,
        externalContent ? style.externalContent : null
      )}
    >
      <ContentTypeInfo mode={mode} type={type} externalContent={externalContent} />
      <div
        className={classnames(style.cardInfo, chapterContent ? style.microLearningCardInfo : null)}
      >
        <div className={style.iconWrapper}>
          {adaptiveIcon}
          {!empty && badgeLabel && badgeCategory && courseContent ? (
            <ContentBadge category={badgeCategory} label={badgeLabel} />
          ) : null}
        </div>
        <CardTitle title={title} empty={empty} courseContent={courseContent} />
        <AuthorName
          author={author}
          empty={empty}
          courseContent={courseContent}
          certifiedAuthor={certifiedAuthor}
          aria-label={ariaLabel.author}
        />
      </div>
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
  mode: PropTypes.string,
  badgeCategory: ContentBadge.propTypes.category,
  badgeLabel: ContentBadge.propTypes.label,
  theme: PropTypes.oneOf(keys(THEMES)),
  'aria-label': PropTypes.shape({
    author: PropTypes.string,
    progression: PropTypes.string,
    adaptive: PropTypes.string
  })
};

export default ContentInfo;
