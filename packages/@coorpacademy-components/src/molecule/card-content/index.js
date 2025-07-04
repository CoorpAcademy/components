import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {get, getOr, isNil, keys} from 'lodash/fp';
import {
  NovaCompositionCoorpacademyAdaptive as AdaptivIcon,
  NovaSolidStatusCheckCircle2 as CheckIcon
} from '@coorpacademy/nova-icons';
import Provider from '../../atom/provider';
import ContentBadge from '../../atom/content-badge';
import Tag from '../../atom/tag';
import {COLORS} from '../../variables/colors';
import {isExternalContent} from '../../util/external-content';
import {ICONS_NAMES_MAP} from '../../util/icons';
import style from './style.css';

export const MODES = {
  HERO: 'hero',
  CARD: 'card'
};

export const THEMES = {
  default: null,
  coorpmanager: style.coorpmanager
};

const ContentTypeInfo = ({mode, type, adaptiv, ariaLabel, isCourse, empty, theme}, context) => {
  const {translate} = context;
  if (mode !== MODES.CARD || empty || theme === 'coorpmanager') {
    return null;
  }
  const getLabel = contentType => {
    switch (contentType) {
      case 'scorm':
        return translate('content_type_scorm');
      case 'video':
        return translate('content_type_video');
      case 'article':
        return translate('content_type_article');
      case 'podcast':
        return translate('content_type_podcast');
      case 'course':
        return translate('content_type_course');
      default:
        return `5'learning`;
    }
  };
  const label = getLabel(type);
  const iconName = getOr('stopwatch', type, ICONS_NAMES_MAP);
  return (
    <div className={style.contentTypeInfos}>
      <Tag size="S" label={label} icon={{iconName}} />
      {adaptiv ? (
        <div className={classnames(style.adaptiveIcon, isCourse ? style.iconShadow : null)}>
          <AdaptivIcon height={20} aria-label={get('adaptive', ariaLabel)} />
        </div>
      ) : null}
    </div>
  );
};

ContentTypeInfo.contextTypes = {
  skin: Provider.childContextTypes.skin,
  translate: Provider.childContextTypes.translate
};

ContentTypeInfo.propTypes = {
  type: PropTypes.string,
  mode: PropTypes.string,
  adaptiv: PropTypes.bool,
  ariaLabel: PropTypes.string,
  isCourse: PropTypes.bool,
  empty: PropTypes.bool,
  theme: PropTypes.oneOf(keys(THEMES))
};

const CardTitle = ({title, empty, courseContent}) => {
  return (
    <div
      className={classnames(
        style.title,
        style.innerHTML,
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

const AuthorName = ({author, empty, courseContent, certifiedAuthor, 'aria-label': ariaLabel}) => {
  const checkIcon = certifiedAuthor ? (
    <CheckIcon className={classnames(style.authorIcon, courseContent ? style.iconShadow : null)} />
  ) : null;

  return (
    <div
      data-name="author"
      title={author}
      aria-label={ariaLabel}
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
  certifiedAuthor: PropTypes.bool,
  'aria-label': PropTypes.string
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
  const progressBarColor = COLORS.cm_positive_500;
  const inlineProgressValueStyle = {
    backgroundColor: progressBarColor,
    width: `${progress * 100}%`
  };
  const courseContent = type === 'course';
  const chapterContent = type === 'chapter';
  const externalContent = isExternalContent(type);
  const progressBar =
    mode === MODES.HERO || (!empty && !disabled) ? (
      <div className={!isNil(progress) ? style.progressWrapper : style.hideProgressBar}>
        {!disabled ? (
          <div
            data-name="progress"
            className={style.progress}
            style={inlineProgressValueStyle}
            role="progressbar"
            aria-label={get('progression', ariaLabel)}
          />
        ) : null}
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
        chapterContent || courseContent || externalContent ? style.standardContent : null
      )}
    >
      <ContentTypeInfo
        mode={mode}
        type={type}
        adaptiv={adaptiv}
        isCourse={courseContent}
        empty={empty}
        theme={theme}
      />
      <div className={classnames(style.cardInfo, courseContent ? style.cardCourseTitle : null)}>
        <div className={style.iconWrapper}>
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
          aria-label={get('author', ariaLabel)}
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
