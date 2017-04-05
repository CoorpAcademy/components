import React, {PropTypes} from 'react';
import identity from 'lodash/fp/identity';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import map from 'lodash/fp/map';
import Link from '../../atom/link';
import SocialLink from '../../atom/social-link';
import CatalogSection from '../../atom/catalog-section';
import Picture from '../../atom/picture';
import style from './style.css';

const DisciplinePartners = (props, context) => {
  const {translate} = context;

  const {
    authorTitle,
    authors = [],
    more
  } = props;

  const authorLabel = authorTitle || translate('author');

  const authorsView = map.convert({cap: false})((author, index) => {
    const socialLinks = getOr([], 'socialLinks', author);
    const authorLogo = get('logo', author);
    const moreDetails = get('more', author);
    const autName = get('name', author);

    const linkView = (
      <div className={style.authorLink}>
        <a
          target={'_blank'}
          href={authorLogo.href}
        >
          {moreDetails}
          <span className={style.linkicon} />
        </a>
      </div>
    );

    const socialView = socialLinks.map((social, i) => (
      <div
        key={i}
        className={style.link}
      >
        <SocialLink {...social} />
      </div>
    ));

    const aNameView = autName && (
      <div className={style.authorName}>
        {autName}
      </div>
    );

    const logoView = authorLogo ? (
      <div className={style.logoContainer}>
        <Link
          className={style.logoLink}
          href={authorLogo.href}
          target={'_blank'}
        >
          <Picture
            className={style.logo}
            src={authorLogo.src}
          />
        </Link>
      </div>
    ) : null;

    const authorContent = authorLogo.href || aNameView || socialView ? (
      <div className={style.authorContent}>
        {authorLogo.href ? linkView : null}
        {autName ? aNameView : null}
        <div className={style.links}>
          {socialView}
        </div>
      </div>
    ) : null;

    return (
      <div
        key={index}
        className={style.authorWrapper}
      >
        {logoView}
        {authorContent}
      </div>
    );
  }, authors);

  return (
    <div className={style.colDetails}>
      <CatalogSection title={authorLabel}>
        {authorsView}
      </CatalogSection>
    </div>
  );
};

DisciplinePartners.contextTypes = {
  translate: React.PropTypes.func
};

DisciplinePartners.propTypes = {
  authors: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    more: PropTypes.string,
    logo: PropTypes.shape({
      src: PropTypes.string,
      href: PropTypes.string
    }),
    socialLinks: PropTypes.array
  })),
  authorTitle: PropTypes.string
};

export default DisciplinePartners;
