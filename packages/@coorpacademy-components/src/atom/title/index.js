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

const getSubtitleStype = type => {
  switch (type) {
    case 'page':
      return style.subtitlePage;
    case 'form-group':
      return style.subtitleFormGroup;
  }
};

const Title = props => {
  const {title, subtitle, type, 'data-name': dataName} = props;
  const titleStyle = getTitleStype(type);
  const subtitleStyle = getSubtitleStype(type);

  const subtitleSection = subtitle ? <div className={subtitleStyle}>{subtitle}</div> : null;

  return (
    <div>
      <div className={titleStyle} data-name={dataName}>{title}</div>
      {subtitleSection}
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  type: PropTypes.oneOf(['page', 'form-group'])
};
export default Title;
