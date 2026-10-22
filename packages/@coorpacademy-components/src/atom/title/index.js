import React from 'react';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash/fp';
import classnames from 'classnames';
import Icon from '../icon';
import Tag from '../tag';
import ButtonLink from '../button-link';
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
        case 'medium-light-color':
          return style.mediumAndLightColorTitleFormGroup;
        case 'small':
          return style.smallTitleFormGroup;
        case 'small-and-light':
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
    required,
    ariaLabel,
    headingLevel
  } = props;
  const titleStyle = getTitleStyle(type, titleSize);
  const subtitleStyle = getSubtitleStyle(type, subtitleSize);

  const titleContent = (
    <>
      {title}
      {required ? <span className={style.required}>*</span> : null}
      {tag ? <Tag {...tag} /> : null}
    </>
  );
  // Opt-in: the title as a real heading for the document outline; same look as the group div.
  const Heading = headingLevel ? `h${headingLevel}` : null;

  const subtitleSection = subtitle ? (
    <div
      className={subtitleStyle}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: subtitle}}
    />
  ) : null;

  return (
    <div className={style.container}>
      {icon ? <Icon {...icon} className={style.icon} /> : null}
      <div className={style.titleContainer}>
        <div className={style.titleContent}>
          {headingLevel ? (
            <Heading
              className={classnames(titleStyle, style.heading)}
              data-name={dataName}
              aria-label={ariaLabel}
            >
              {titleContent}
            </Heading>
          ) : (
            <div className={titleStyle} data-name={dataName} role="group" aria-label={ariaLabel}>
              {titleContent}
            </div>
          )}
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
  ariaLabel: PropTypes.string,
  type: PropTypes.oneOf(['page', 'form-group']),
  'data-name': PropTypes.string,
  titleSize: PropTypes.oneOf([
    'xl-strong',
    'standard',
    'standard-light-weight',
    'medium',
    'medium-light-color',
    'small',
    'small-and-light'
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
  required: PropTypes.bool,
  headingLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6])
};
export default Title;
