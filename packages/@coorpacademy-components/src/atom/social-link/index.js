import React, {PropTypes} from 'react';
import style from './style.css';

const icons = {
  mail: '0xe902',
  'google-plus': '0xe903',
  facebook: '0xe904',
  twitter: '0xe905',
  linkedin: '0xe906',
  instagram: '0xe907',
  youtube: '0xe908',
  vimeo: '0xe909',
  pinterest: '0xe910'
};

const SocialLink = props => {
  const {
    type,
    link
  } = props;

  return (
    <a
      href={link}
      className={style.link}
      target={'_blank'}
    >{String.fromCharCode(icons[type])}
    </a>
  );
};

SocialLink.propTypes = {
  type: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default SocialLink;
