import React from 'react';
import PropTypes from 'prop-types';
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
const themeStyle = {
  default: style.link,
  footer: style.linkFooter
};
const SocialLink = props => {
  // istanbul doesn't get decomposed default prop values, thus %Branch output is lower
  // eventhough the branching case is already taken care of by defaulting and other tests.
  /* istanbul ignore next-line */
  const {type, link, mode = 'default'} = props;

  return (
    <a href={link} className={themeStyle[mode]} target="_blank" rel="noopener noreferrer">
      {String.fromCharCode(icons[type])}
    </a>
  );
};

SocialLink.propTypes = {
  mode: PropTypes.string,
  type: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default SocialLink;
