import React, {PropTypes} from 'react';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import identity from 'lodash/fp/identity';
import map from 'lodash/fp/map';
import CatalogCTA from '../../molecule/catalog-cta';
import DisciplineCTA from '../../molecule/discipline-cta';
import Picture from '../../atom/picture';
import Link from '../../atom/link';
import SocialLink from '../../atom/social-link';
import style from './style.css';

const DisciplineRightaside = (props, context) => {
  const {translate = identity} = context;
  const {
    type,
    rating,
    maxRating,
    linkBuy,
    linkTry,
    authorTitle,
    start,
    buy,
    startLabel,
    buyLabel,
    authors
  } = props;

  const authorLabel = authorTitle || translate('author');
  let ctaView;

  switch (type) {
    case 'discipline':
      ctaView = (
        <div className={style.ctaWrapper}>
          <DisciplineCTA
            start={start}
            buy={buy}
            startLabel={startLabel}
            buyLabel={buyLabel}
          />
        </div>
      );
      break;

    default:
      ctaView = (rating && linkBuy && linkTry) && (
        <div className={style.ctaWrapper}>
          <CatalogCTA
            rating={rating}
            maxRating={maxRating}
            linkBuy={linkBuy}
            linkTry={linkTry}
          />
        </div>
      );
  }

  const authorsView = authors && authors.map((author, index) => {
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
      <div
        className={style.authorWrapper}
        key={index}
      >
        {logoView}
        {authorContent}
      </div>
    );
  });

  return (
    <div className={style.col}>
      {ctaView}
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
  type: PropTypes.string,
  rating: PropTypes.number,
  maxRating: PropTypes.number,
  linkTry: PropTypes.string,
  linkBuy: PropTypes.string,
  start: PropTypes.func,
  buy: PropTypes.func,
  startLabel: PropTypes.string,
  buyLabel: PropTypes.string,
  authors: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    href: PropTypes.string,
    logo: PropTypes.shape({
      src: PropTypes.string,
      href: PropTypes.string
    }),
    socialLinks: PropTypes.array
  })),
  authorTitle: PropTypes.string
};
export default DisciplineRightaside;
