import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const Title = props => {
  const {title, subtitle} = props;

  const subtitleSection = subtitle ? <div className={style.subtitle}>{subtitle}</div> : null;

  return (
    <div>
      <div className={style.title}>{title}</div>
      {subtitleSection}
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
};
export default Title;
