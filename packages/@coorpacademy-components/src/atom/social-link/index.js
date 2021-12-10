import React from 'react';
import PropTypes from 'prop-types';
import {
  NovaCompositionCoorpacademyFacebook as FacebookIcon,
  NovaCompositionCoorpacademyGooglePlus as GooglePlusIcon,
  NovaCompositionCoorpacademyInstagram as InstagramIcon,
  NovaCompositionCoorpacademyLinkedin as LinkedinIcon,
  NovaCompositionCoorpacademyMail as MailIcon,
  NovaCompositionCoorpacademyPinterest as PinterestIcon,
  NovaCompositionCoorpacademyTwitter as TwitterIcon,
  NovaCompositionCoorpacademyVimeo as VimeoIcon,
  NovaCompositionCoorpacademyYoutube as YoutubeIcon
} from '@coorpacademy/nova-icons';
import style from './style.css';

const ICONS = {
  mail: MailIcon,
  'google-plus': GooglePlusIcon,
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  vimeo: VimeoIcon,
  pinterest: PinterestIcon
};
const themeStyle = {
  default: style.link,
  footer: style.linkFooter
};
const SocialLink = props => {
  const {type, link, mode = 'default','aria-label': ariaLabel} = props;
  const IconType = ICONS[type];
  return (
    <a
      href={link}
      className={themeStyle[mode]}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      data-name={`${mode}-${type}`}
    >
      <IconType className={style.icon} />
    </a>
  );
};

SocialLink.propTypes = {
  mode: PropTypes.string,
  type: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  'aria-label': PropTypes.string
};

export default SocialLink;
