import React from 'react';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash/fp';
import {
  NovaCompositionCoorpacademyCoorpApp as CoorpAppLogo,
  NovaCompositionCoorpacademyCoorpLogo as CoorpLogo
} from '@coorpacademy/nova-icons';
import Link from '../../atom/link';
import SocialLink from '../../atom/social-link';
import style from './style.css';

const socialLinksTypes = ['facebook', 'twitter', 'linkedin', 'youtube', 'instagram'];

const StoresLinks = ({
  onAppStoreButtonClick,
  appStoreButtonImageUrl,
  playStoreButtonImageUrl,
  onPlayStoreButtonClick
}) => (
  <div className={style.storeLinksContainer}>
    <img className={style.imgApple} src={appStoreButtonImageUrl} onClick={onAppStoreButtonClick} />
    <img className={style.img} src={playStoreButtonImageUrl} onClick={onPlayStoreButtonClick} />
  </div>
);

StoresLinks.propTypes = {
  onAppStoreButtonClick: PropTypes.func,
  appStoreButtonImageUrl: PropTypes.string,
  playStoreButtonImageUrl: PropTypes.string,
  onPlayStoreButtonClick: PropTypes.func
};

function MoocFooter(props) {
  const {headSection = {}, socialLinks = [], siteMapSections = []} = props;

  // Header section of the footer (the marketing banner)

  const headSectionView = !isEmpty(headSection) ? (
    <div data-name="headSection" className={style.headSectionWrapper}>
      <div className={style.logoWrapper}>
        <CoorpAppLogo className={style.coorpAppLogo} />
      </div>
      <div data-name="mobile-marketing-text" className={style.marketingLabel}>
        {headSection.title}
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
        />
      </div>
    </div>
  ) : null;

  // Sitemap section of the footer (contains HELP, TOOLBOX... and other pages, as well as social links)

  const renderPagesFromSection = pages => {
    return (
      <ul className={style.pagesList} data-name="pages-list">
        {pages.map((page, pindex) => {
          return (
            <li key={pindex}>
              <Link
                href={page.link}
                title={page.title}
                data-text={page.title}
                className={style.pageLink}
                target={page.target}
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
      <div className={style.socialLink} key={index}>
        <SocialLink type={socialLink.type} link={socialLink.link} mode="footer" />
      </div>
    );
  });

  const socialNetworks = (
    <div data-name="logo-social-networks-container" className={style.logoSocialNetworksContainer}>
      <CoorpLogo className={style.coorpLogo} data-name="coorp-social-networks-logo" />
      <div data-name="social-networks-wrapper" className={style.socialNetworksWrapper}>
        {socialLinksView}
      </div>
    </div>
  );

  const siteMap = (
    <div data-name="siteMap" className={style.siteMapContainer}>
      <div data-name="sections" className={style.sectionsContainer}>
        {sections}
      </div>
      {socialNetworks}
    </div>
  );

  return (
    <div className={style.wrapper}>
      {headSectionView}
      {siteMap}
    </div>
  );
}

MoocFooter.propTypes = {
  headSection: PropTypes.shape({
    title: PropTypes.string,
    onAppStoreButtonClick: PropTypes.func,
    appStoreButtonImageUrl: PropTypes.string,
    playStoreButtonImageUrl: PropTypes.string,
    onPlayStoreButtonClick: PropTypes.func
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
      link: PropTypes.string
    })
  )
};

export default MoocFooter;
