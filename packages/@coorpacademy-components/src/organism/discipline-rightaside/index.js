import React, {PropTypes} from 'react';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import identity from 'lodash/fp/identity';
import map from 'lodash/fp/map';
import CatalogCTA from '../../molecule/catalog-cta';
import Picture from '../../atom/picture';
import Link from '../../atom/link';
import SocialLink from '../../atom/social-link';
import style from './style.css';

const DisciplineRightaside = (props, context) => {
  const {translate = identity} = context;
  const {rating, maxRating, linkBuy, linkTry, authorTitle} = props;
  const authors = Array.isArray(props.author) ? props.author : [props.author];

  const authorLabel = authorTitle || translate('author');

  const ctaView = (
    <div className={style.ctaWrapper}>
      <CatalogCTA
        rating={rating}
        maxRating={maxRating}
        linkBuy={linkBuy}
        linkTry={linkTry}
      />
    </div>
  );

  const authorsView = authors.map((author, index) => { 
    const socialLinks = getOr([], 'socialLinks', author);
    const authorLogo = get('logo', author);
    const authorHref = get('href', author);
    const autName = get('name', author);
    
    const linkView = (
      <div className={style.authorLink}>
        <a
          target={'_blank'}
          href={authorHref}
        >
          {authorHref}
        </a>
      </div>
    );

    const socialView = socialLinks.map((social, index) => (
      <div
        key={index}
        className={style.link}
      >
        <SocialLink {...social} />
      </div>
    ));

    const aNameView = {autName} ? (
      <div className={style.authorName}>
        {autName}
      </div>
    ) : null;

    const logoView = authorLogo ? (
      <div className={style.logoContainer}>
        <Link
          className={style.logoLink}
          href={authorLogo.href}
        >
          <Picture
            className={style.logo}
            src={authorLogo.src}
          />
        </Link>
      </div>
    ) : null;

    const authorContent = authorHref || aNameView || socialView ? (
      <div className={style.authorContent}>
        {authorHref ? linkView : null}
        {autName ? aNameView : null}
        <div className={style.links}>
          {socialView}
        </div>
      </div>
    ) : null;

    return (
      <div className={style.authorWrapper}>
        {logoView}
        {authorContent}
      </div>
    )
  });

  return (
    <div className={style.col}>
      {(rating && linkBuy && linkTry) ? ctaView : null}
      <div className={style.colDetails}>
        <div className={style.detailTitle}>
          {authorLabel}
        </div>
        {authorsView}
      </div>
    </div>
  );
};

DisciplineRightaside.contextTypes = {
  translate: React.PropTypes.func
};

DisciplineRightaside.propTypes = {
  rating: PropTypes.number,
  maxRating: PropTypes.number,
  linkBuy: PropTypes.string,
  linkTry: PropTypes.string,
  author: PropTypes.shape({
    name: PropTypes.string,
    href: PropTypes.string,
    logo: PropTypes.shape({
      src: PropTypes.string,
      href: PropTypes.string
    }),
    socialLinks: PropTypes.array
  }),
  authorTitle: PropTypes.string
};
export default DisciplineRightaside;
