import React from 'react';
import PropTypes from 'prop-types';
import {isEmpty} from 'lodash/fp';
import {
  NovaCompositionCoorpacademyCoorpApp as CoorpAppLogo,
  NovaCompositionCoorpacademyCoorpLogo as CoorpLogo
} from '@coorpacademy/nova-icons';
import Provider from '../../atom/provider';
import Link from '../../atom/link';
// import Picture from '../../atom/picture';
import SocialLink from '../../atom/social-link';
// eslint-disable-next-line css-modules/no-unused-class
import style from './style.css';

const socialLinksTypes = ['facebook', 'twitter', 'linkedIn'];

// eslint-disable-next-line react/prefer-stateless-function
class MoocFooter extends React.Component {
  static propTypes = {
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
    const {headSection = {}, socialLinks = [], siteMapSections = []} = this.props;

    // eslint-disable-next-line no-unused-vars
    const {translate, skin} = this.context;

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
          <p>store buttons go here</p>
        </div>
      </div>
    ) : null;
    const sections = siteMapSections.map((section, index) => {
      return (
        <div key={index}>
          <p className={style.sectionTitle}>{section.title}</p>
          {/* TODO: take this out to an atom as a Link List */}
          <ul>
            {section.pages
              ? section.pages.map((page, pindex) => {
                  return (
                    <li key={pindex}>
                      <Link href={page.link}>{page.title}</Link>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      );
    });
    const socialLinksView = socialLinks
      ? socialLinks.map((socialLink, index) => {
          return <SocialLink type={socialLink.type} link={socialLink.link} key={index} />;
        })
      : null;
    const socialNetworks = (
      <div data-name="logo-social-networks-wrapper">
        <div data-name="bw-logo-wrapper">
          <CoorpLogo className={style.coorpLogo} />
        </div>
        <div data-name="social-networks-wrapper">{socialLinksView}</div>
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
    // return <div>Just a plain test</div>;
    return (
      <div className={style.wrapper}>
        {headSectionView}
        {siteMap}
      </div>
    );
  }
}

export default MoocFooter;
