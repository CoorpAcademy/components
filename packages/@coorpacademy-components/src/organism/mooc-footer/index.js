import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import {isEmpty} from 'lodash/fp';
import Provider from '../../atom/provider';
import Link from '../../atom/link';
import Title from '../../atom/title';
import Picture from '../../atom/picture';
// eslint-disable-next-line css-modules/no-unused-class
import style from './style.css';

const socialLinksTypes = ['facebook', 'twitter', 'linkedIn'];

class MoocFooter extends React.Component {
  static propTypes = {
    headSection: PropTypes.shape({
      title: PropTypes.string,
      androidLink: PropTypes.string,
      iosLink: PropTypes.string
    }),
    // eslint-disable-next-line react/no-unused-prop-types
    socialLinks: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf(socialLinksTypes),
        link: PropTypes.string
      })
    ),
    // eslint-disable-next-line react/no-unused-prop-types
    siteMapSections: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        pages: PropTypes.arrayOf(PropTypes.shape({title: PropTypes.string, link: PropTypes.string}))
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
    // eslint-disable-next-line react/destructuring-assignment
    const headSection = isEmpty(this.props.headSection) ? (
      <div data-name="headSection">
        <div className={`${style.logoWrapper} ${style.vertLineRight}`}>
          <div className={style.logoMobile} data-name="logo-mobile">
            {/* TODO: ask how to get the static logourl */}
            <Picture src="logourl" />
          </div>
        </div>
        <div data-name="mobile-marketing-text">
          <p>{this.translate('coorp_mobile_marketing_text')}</p>
        </div>
        <div data-name="mobile-apps-buttons-wrapper">
          <p>{this.translate('coorp_mobile_marketing_text')}</p>
        </div>
      </div>
    ) : null;
    const sections = this.siteMapSections.map((section, index) => {
      return (
        <div key={index}>
          <Title>{this.translate(section.title)}</Title>
          {/* TODO: take this out to an atom as a Link List */}
          <ul>
            {/* TODO: are dynamic translations managed?? */}
            {section.pages.map((page, pindex) => {
              return (
                <li key={pindex}>
                  <Link href={page.link}>{page.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
    const socialNetworks = (
      <div data-name="logo-social-networks-wrapper">
        <div data-name="bw-logo-wrapper">
          <Picture src="bwlogourl" />
        </div>
        <div data-name="social-networks-wrapper">
          test blabla <div>blabla</div>
        </div>
      </div>
    );
    const siteMap = (
      <div data-name="siteMap">
        <div data-name="sections">{sections}</div>
        {socialNetworks}
      </div>
    );
    // return <div>Just a plain test</div>;
    return (
      <div className={style.wrapper}>
        {headSection}
        {siteMap}
      </div>
    );
  }
}

export default MoocFooter;
