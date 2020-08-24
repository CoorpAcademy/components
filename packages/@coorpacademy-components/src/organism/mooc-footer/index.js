import React from 'react';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash/fp';
import {
  NovaCompositionCoorpacademyCoorpApp as CoorpAppLogo,
  NovaCompositionCoorpacademyCoorpLogo as CoorpLogo
} from '@coorpacademy/nova-icons';
import Provider from '../../atom/provider';
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
    <img className={style.img} src={appStoreButtonImageUrl} onClick={onAppStoreButtonClick} />
    <img className={style.img} src={playStoreButtonImageUrl} onClick={onPlayStoreButtonClick} />
  </div>
);

StoresLinks.propTypes = {
  onAppStoreButtonClick: PropTypes.func,
  appStoreButtonImageUrl: PropTypes.string,
  playStoreButtonImageUrl: PropTypes.string,
  onPlayStoreButtonClick: PropTypes.func
};

// eslint-disable-next-line react/prefer-stateless-function
class MoocFooter extends React.Component {
  static propTypes = {
    ...StoresLinks.propTypes,
    headSection: PropTypes.shape({
      title: PropTypes.string,
      androidLink: PropTypes.string,
      iosLink: PropTypes.string
    }),
    siteMapSections: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        pages: PropTypes.arrayOf(PropTypes.shape({title: PropTypes.string, link: PropTypes.string}))
      })
    ),
    socialLinks: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf(socialLinksTypes),
        link: PropTypes.string
      })
    )
  };

  static contextTypes = {
    translate: Provider.childContextTypes.translate
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      headSection = {},
      socialLinks = [],
      siteMapSections = [],
      onAppStoreButtonClick,
      appStoreButtonImageUrl,
      playStoreButtonImageUrl,
      onPlayStoreButtonClick
    } = this.props;

    const {translate} = this.context;

    const headSectionView = isEmpty(headSection) ? (
      <div data-name="headSection" className={style.headSectionWrapper}>
        <div className={style.logoWrapper}>
          <CoorpAppLogo className={style.coorpAppLogo} />
        </div>
        <div className={style.line}> </div>
        <div data-name="mobile-marketing-text" className={style.marketingLabel}>
          {translate('GET THE COORPACADEMY EXPERIENCE ON YOUR PHONE !')}
        </div>
        <div data-name="mobile-apps-buttons-wrapper" className={style.mobileAppLinks}>
          <StoresLinks
            onAppStoreButtonClick={onAppStoreButtonClick}
            appStoreButtonImageUrl={appStoreButtonImageUrl}
            playStoreButtonImageUrl={playStoreButtonImageUrl}
            onPlayStoreButtonClick={onPlayStoreButtonClick}
          />
        </div>
      </div>
    ) : null;
    const sections = siteMapSections.map((section, index) => {
      return (
        <div key={index} className={style.sectionWrapper}>
          <p className={style.sectionTitle}>{section.title}</p>
          {/* eslint-disable-next-line no-warning-comments */
          /* TODO: take this out to an atom as a Link List */}
          <ul className={style.pagesList}>
            {section.pages
              ? section.pages.map((page, pindex) => {
                  return (
                    <li key={pindex}>
                      <Link
                        href={page.link}
                        data-text={`${page.title} `}
                        className={style.pageLink}
                      >
                        {page.title}
                      </Link>
                    </li>
                  );
                })
              : null}
          </ul>
          <div className={style.sectionMobileDivisor} />
        </div>
      );
    });
    const socialLinksView = socialLinks
      ? socialLinks.map((socialLink, index) => {
          return (
            <div className={style.socialLink} key={index}>
              <SocialLink type={socialLink.type} link={socialLink.link} mode="footer" />
            </div>
          );
        })
      : null;
    const socialNetworks = (
      <div data-name="logo-social-networks-container" className={style.logoSocialNetworksContainer}>
        <CoorpLogo className={style.coorpLogo} />
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
}

export default MoocFooter;
