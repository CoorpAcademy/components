import React from 'react';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash/fp';
import Icon from '../icon';
import Tag from '../tag';
import ButtonLink from '../button-link';
import {COLORS} from '../../variables/colors';
import style from './style.css';

const getTitleStyle = (type, size) => {
  switch (type) {
    case 'page':
      return style.titlePage;
    case 'form-group':
      switch (size) {
        case 'standard':
          return style.titleFormGroup;
        case 'standard-light-weight':
          return style.titleFormGroupLightWeight;
        case 'xl-strong':
          return style.xlStrongTitle;
        case 'medium':
          return style.mediumTitleFormGroup;
        case 'small':
          return style.smallTitleFormGroup;
        case 'smallAndLight':
          return style.smallAndLightTitleFormGroup;
      }
  }
};

const getSubtitleStyle = (type, size) => {
  switch (type) {
    case 'page':
      return style.subtitlePage;
    case 'form-group':
      switch (size) {
        case 'standard':
          return style.subtitleFormGroup;
        case 'standard-without-margin':
          return style.subtitleFormGroupWithoutMargin;
        case 'medium':
          return style.mediumSubtitleFormGroup;
        case 'small':
          return style.smallSubtitleFormGroup;
        case 'small-without-margin':
          return style.smallSubtitleFormGroupWithoutMargin;
        case 'extra-small':
          return style.extraSmallSubtitleFormGroup;
      }
  }
};

const Title = props => {
  const {
    title,
    subtitle,
    type,
    'data-name': dataName,
    titleSize = 'standard',
    subtitleSize = 'standard',
    icon,
    tag,
    button,
    required
  } = props;
  const titleStyle = getTitleStyle(type, titleSize);
  const subtitleStyle = getSubtitleStyle(type, subtitleSize);

  const subtitleSection = subtitle ? <div className={subtitleStyle}>{subtitle}</div> : null;

  return (
    <div className={style.container}>
      {icon ? <Icon {...icon} className={style.icon} /> : null}
      <div className={style.titleContainer}>
        <div>
          <div className={titleStyle} data-name={dataName}>
            {required ? (
              <>
                {title}
                <span style={{color: COLORS.cm_negative_300, gap: 0}}>*</span>
              </>
            ) : (
              title
            )}
            {tag ? <Tag {...tag} /> : null}
          </div>
          {subtitleSection}
        </div>
        {!isEmpty(button) ? <ButtonLink {...button} /> : null}
      </div>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  type: PropTypes.oneOf(['page', 'form-group']),
  'data-name': PropTypes.string,
  titleSize: PropTypes.oneOf([
    'xl-strong',
    'standard',
    'standard-light-weight',
    'medium',
    'small',
    'smallAndLight'
  ]),
  subtitleSize: PropTypes.oneOf([
    'standard',
    'standard-without-margin',
    'medium',
    'small',
    'small-without-margin',
    'extra-small'
  ]),
  icon: PropTypes.shape(Icon.propTypes),
  tag: PropTypes.shape(Tag.propTypes),
  button: PropTypes.shape(ButtonLink.propTypes),
  required: PropTypes.bool
};
export default Title;
