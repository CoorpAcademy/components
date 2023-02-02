import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const getTitleStype = type => {
  switch (type) {
    case 'page':
      return style.titlePage;
    case 'form-group':
      return style.titleFormGroup;
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
      }
  }
};

const Title = props => {
  const {title, subtitle, type, 'data-name': dataName, subtitleSize = 'standard'} = props;
  const titleStyle = getTitleStype(type);
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
  subtitleSize: PropTypes.string
};
export default Title;
