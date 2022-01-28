import React, {memo} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {get, isEmpty, pick, keys} from 'lodash/fp';
import {NovaCompositionCoorpacademyPictures as PicturesIcon} from '@coorpacademy/nova-icons';
import {isExternalContent, EXTERNAL_CONTENT_ICONS} from '../../util/external-content';
import Provider from '../provider';

import style from './style.css';

export const THEMES = {
  default: null,
  coorpmanager: style.coorpmanager
};

const CardBackground = ({type, image, empty}, {skin}) => {
  const externalContent = isExternalContent(type);
  const primaryColor = get('common.primary', skin);
  const whiteColor = get('common.white', skin);

  if (externalContent && EXTERNAL_CONTENT_ICONS[type]) {
    const IconType = EXTERNAL_CONTENT_ICONS[type].icon;
    const iconColor = EXTERNAL_CONTENT_ICONS[type].color;
    const backgroundIcon = (
      <div className={style.externalIconCircleWrapper}>
        <IconType className={style.externalIcon} />
      </div>
    );

    if (image) {
      const _backgroundIcon = (
        <div
          className={classnames(
            style.externalIconCircleWrapper,
            style.externalIconCircleWithImageWrapper
          )}
          style={{
            backgroundColor: iconColor
          }}
        >
          <IconType className={style.externalIconWithImage} />
        </div>
      );

      return (
        <div className={style.imageWrapper}>
          <div
            data-name="cover"
            style={{
              backgroundColor: iconColor,
              backgroundImage: `url('${image}')`
            }}
            className={classnames(style.externalContentHeader, style.externalBackground)}
          >
            {_backgroundIcon}
          </div>
        </div>
      );
    }
    return (
      <div className={style.imageWrapper}>
        <div
          data-name="cover"
          style={{
            backgroundColor: iconColor
          }}
          className={style.externalContentHeader}
        >
          {backgroundIcon}
        </div>
      </div>
    );
  }

  const emptyIcon = empty ? <PicturesIcon className={style.emptyIcon} color={whiteColor} /> : null;
  return (
    <div
      className={classnames(
        style.imageWrapper,
        type === 'chapter' ? style.chapterImageWrapper : null
      )}
    >
      <div
        data-name="cover"
        className={style.image}
        style={{
          backgroundColor: primaryColor,
          backgroundImage: image ? `url('${image}')` : 'none'
        }}
      >
        {emptyIcon}
      </div>
    </div>
  );
};

CardBackground.contextTypes = {
  skin: Provider.childContextTypes.skin
};

CardBackground.propTypes = {
  type: PropTypes.string,
  image: PropTypes.string,
  empty: PropTypes.bool
};

const getType = contentType => {
  switch (contentType) {
    case 'chapter':
      return 'microlearning';
    case 'course':
      return 'learner';
    default:
      return contentType;
  }
};
const CardImagePreview = memo(function CardImagePreview(props, context) {
  const {image, type = 'course', theme = 'default'} = props;
  const empty = isEmpty(pick(['type', 'image'], props));
  const cardStyle = classnames(
    THEMES[theme],
    type === 'chapter' ? style.chapter : style.course,
    style.grid,
    empty ? style.empty : null
  );

  return (
    <div className={cardStyle} data-name="card-image-preview" data-type={getType(type)}>
      <CardBackground type={type} image={image} empty={empty} />
    </div>
  );
});

CardImagePreview.contextTypes = {
  skin: Provider.childContextTypes.skin
};

CardImagePreview.propTypes = {
  image: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  theme: PropTypes.oneOf(keys(THEMES))
};
export default CardImagePreview;
