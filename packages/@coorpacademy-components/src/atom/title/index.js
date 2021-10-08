import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const Title = props => {
  const {title, subtitle, type} = props;

  const subtitleSection = subtitle ? (
    <div className={style.subtitle}>
      <div className={style[type]}>{subtitle}</div>
    </div>
  ) : null;

  return (
    <div>
      <div className={style.title}>
        <div className={style[type]}>{title}</div>
      </div>
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
