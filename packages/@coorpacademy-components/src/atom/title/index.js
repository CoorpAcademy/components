import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const getTitleStype = (type, size) => {
  switch (type) {
    case 'page':
      return style.titlePage;
    case 'form-group':
      switch (size) {
        case 'standard':
          return style.titleFormGroup;
        case 'small':
          return style.smallTitleFormGroup;
      }
  }
};

const getSubtitleStype = (type, size) => {
  switch (type) {
    case 'page':
      return style.subtitlePage;
    case 'form-group':
      switch (size) {
        case 'standard':
          return style.subtitleFormGroup;
        case 'small':
          return style.smallSubtitleFormGroup;
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
    subtitleSize = 'standard'
  } = props;
  const titleStyle = getTitleStype(type, titleSize);
  const subtitleStyle = getSubtitleStype(type, subtitleSize);

  const subtitleSection = subtitle ? <div className={subtitleStyle}>{subtitle}</div> : null;

  return (
    <div>
      <div className={titleStyle} data-name={dataName}>
        {title}
      </div>
      {subtitleSection}
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  type: PropTypes.oneOf(['page', 'form-group']),
  'data-name': PropTypes.string,
  titleSize: PropTypes.string,
  subtitleSize: PropTypes.string
};
export default Title;
