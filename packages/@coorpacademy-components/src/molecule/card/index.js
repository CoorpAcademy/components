import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import get from 'lodash/fp/get';
import AdaptivIcon from '@coorpacademy/nova-icons/composition/coorpacademy/adaptive';
import CheckIcon from '@coorpacademy/nova-icons/solid/status/check-circle-2';
import Provider from '../../atom/provider';
import style from './style.css';

const computeClassName = (backgroundLayout, adaptive) =>
  classnames(
    style.card,
    {
      cover: style.backgroundLayoutCover,
      left: style.backgroundLayoutLeft
    }[backgroundLayout],
    adaptive && style.adaptive
  );

const Card = (props, context) => {
  const {adaptive, author, backgroundLayout, certifiedAuthor, title, image, progress} = props;
  const {skin} = context;

  const primaryColor = get('common.primary', skin);
  const inlineStyle = {backgroundImage: `url(${image})`};
  const inlineProgressValueStyle = {
    backgroundColor: primaryColor,
    width: `${progress * 100}%`
  };

  return (
    <div className={computeClassName(backgroundLayout, adaptive)} style={inlineStyle}>
      <div className={style.content}>
        <div className={style.title}>{title}</div>
        <div className={classnames(style.author, certifiedAuthor && style.certified)}>
          <span>{author}</span>
          <CheckIcon
            className={style.icon}
            color="inherit"
            borderColor="inherit"
            borderWidth="inherit"
          />
        </div>
        <div className={style.progress}>
          <div className={style.value} style={inlineProgressValueStyle} />
        </div>
        <AdaptivIcon
          className={style.adaptiveIcon}
          color="inherit"
          borderColor="inherit"
          borderWidth="inherit"
        />
      </div>
    </div>
  );
};

Card.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Card.propTypes = {
  adaptive: PropTypes.bool.isRequired,
  author: PropTypes.string.isRequired,
  certifiedAuthor: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
  backgroundLayout: PropTypes.oneOf(['cover', 'top', 'left'])
};

export default Card;
