import React from 'react';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash/fp';
import {
  NovaCompositionCoorpacademyCoorpApp as CoorpAppLogo,
  NovaCompositionCoorpacademyCoorpLogo as CoorpLogo
} from '@coorpacademy/nova-icons';
import Link from '../../atom/link';
import SocialLink from '../../atom/social-link';
import Picture from '../../atom/picture';
import style from './style.css';

const socialLinksTypes = ['facebook', 'twitter', 'linkedin', 'youtube', 'instagram'];

const StoresLinks = ({
  onAppStoreButtonClick,
  appStoreButtonImageUrl,
  playStoreButtonImageUrl,
  onPlayStoreButtonClick,
  'android-alt': androidAlt,
  'ios-alt': iosAlt
}) => (
  <div className={style.storeLinksContainer}>
    <Picture
      className={style.imgApple}
      src={appStoreButtonImageUrl}
      onClick={onAppStoreButtonClick}
      alt={iosAlt}
    />
    <Picture
      className={style.img}
      src={playStoreButtonImageUrl}
      onClick={onPlayStoreButtonClick}
      alt={androidAlt}
    />
  </div>
);

StoresLinks.propTypes = {
  onAppStoreButtonClick: PropTypes.func,
  appStoreButtonImageUrl: PropTypes.string,
  playStoreButtonImageUrl: PropTypes.string,
  onPlayStoreButtonClick: PropTypes.func,
  'android-alt': PropTypes.string,
  'ios-alt': PropTypes.string
};

function MoocFooter(props) {
  const {
    headSection = {},
    socialLinks = [],
    'logo-aria-label': logoAriaLabel,
    'social-links-aria-label': socialLinksAriaLabel,
    siteMapSections = []
  } = props;

  // Header section of the footer (the marketing banner)

  const headSectionView = !isEmpty(headSection) ? (
    <div data-name="headSpacingContainer" className={style.headSpacingContainer}>
      <div data-name="headSection" className={style.headSectionWrapper}>
        <div className={style.logoAndLabelWrapper}>
          <div className={style.logoWrapper}>
            <CoorpAppLogo
              className={style.coorpAppLogo}
              aria-label={headSection['logo-aria-label']}
            />
          </div>
          <div data-name="mobile-marketing-text" className={style.marketingLabel}>
            {headSection.title}
          </div>
        </div>
        <div data-name="mobile-apps-buttons-wrapper" className={style.mobileAppLinks}>
          <StoresLinks
            // ignored due to naming conventions in JSX rather than a linting error
            // eslint-disable-next-line react/jsx-handler-names
            onAppStoreButtonClick={headSection.onAppStoreButtonClick}
            appStoreButtonImageUrl={headSection.appStoreButtonImageUrl}
            playStoreButtonImageUrl={headSection.playStoreButtonImageUrl}
            // eslint-disable-next-line react/jsx-handler-names
            onPlayStoreButtonClick={headSection.onPlayStoreButtonClick}
            android-alt={headSection['android-alt']}
            ios-alt={headSection['ios-alt']}
          />
        </div>
      </div>
    </div>
  ) : null;

  // Sitemap section of the footer (contains HELP, TOOLBOX... and other pages, as well as social links)

  const renderPagesFromSection = pages => {
    return (
      <ul className={style.pagesList} data-name="pages-list">
        {pages.map((page, pindex) => {
          const handleClick = page.onClick;
          return (
            <li key={pindex}>
              <Link
                href={page.link}
                onClick={handleClick}
                title={page.title}
                data-text={page.title}
                className={style.pageLink}
                target={page.target}
                aria-label={page.ariaLabel ? page.ariaLabel : page.title}
                data-name={page.title}
              >
                {page.title}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  const sections = !isEmpty(siteMapSections)
    ? siteMapSections.map((section, index) => {
        return (
          <div key={index} className={style.sectionWrapper}>
            <p className={style.sectionTitle}>{section.title}</p>
            {renderPagesFromSection(section.pages)}
          </div>
        );
      })
    : null;

  const socialLinksView = socialLinks.map((socialLink, index) => {
    return (
      <li className={style.socialLink} key={index}>
        <SocialLink
          type={socialLink.type}
          link={socialLink.link}
          mode="footer"
          aria-label={socialLink['aria-label']}
        />
      </li>
    );
  });

  const socialNetworks = (
    <div data-name="logo-social-networks-container" className={style.logoSocialNetworksContainer}>
      <CoorpLogo
        className={style.coorpLogo}
        data-name="coorp-social-networks-logo"
        aria-label={logoAriaLabel}
      />
      <ul
        data-name="social-networks-wrapper"
        className={style.socialNetworksWrapper}
        aria-label={socialLinksAriaLabel}
      >
        {socialLinksView}
      </ul>
    </div>
  );

  const siteMap = (
    <div data-name="site-map-spacing-container" className={style.siteMapSpacingContainer}>
      <div data-name="site-map" className={style.siteMapContainer}>
        <div data-name="sections" className={style.sectionsContainer}>
          {sections}
        </div>
        {socialNetworks}
      </div>
    </div>
  );

  return (
    <footer data-name="mooc-footer">
      {headSectionView}
      {siteMap}
    </footer>
  );
}

MoocFooter.propTypes = {
  headSection: PropTypes.shape({
    title: PropTypes.string,
    onAppStoreButtonClick: PropTypes.func,
    appStoreButtonImageUrl: PropTypes.string,
    playStoreButtonImageUrl: PropTypes.string,
    onPlayStoreButtonClick: PropTypes.func,
    'logo-aria-label': PropTypes.string,
    'android-alt': PropTypes.string,
    'ios-alt': PropTypes.string
  }),
  siteMapSections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      pages: PropTypes.arrayOf(
        PropTypes.shape({title: PropTypes.string, link: PropTypes.string, target: PropTypes.string})
      )
    })
  ),
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(socialLinksTypes),
      link: PropTypes.string,
      onClick: PropTypes.func,
      'aria-label': PropTypes.string
    })
  ),
  'logo-aria-label': PropTypes.string,
  'social-links-aria-label': PropTypes.string
};

export default MoocFooter;
