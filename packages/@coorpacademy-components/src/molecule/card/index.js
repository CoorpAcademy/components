import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import Provider from '../../atom/provider';
import style from './style.css';

const Card = (props, context) => {
  const {author, title, image, progress} = props;
  const {skin} = context;

  const primaryColor = get('common.primary', skin);
  const inlineStyle = {backgroundImage: `url(${image})`};
  const inlineProgressValueStyle = {
    backgroundColor: primaryColor,
    width: `${progress * 100}%`
  };

  return (
    <div className={style.card} style={inlineStyle}>
      <div className={style.content}>
        <div className={style.title}>{title}</div>
        <div className={style.author}>{author}</div>
        <div className={style.progress}>
          <div className={style.value} style={inlineProgressValueStyle} />
        </div>
      </div>
    </div>
  );
};

Card.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Card.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired
};

export default Card;
