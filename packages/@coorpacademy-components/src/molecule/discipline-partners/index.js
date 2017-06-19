import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import isEmpty from 'lodash/fp/isEmpty';
import map from 'lodash/fp/map';
import ArrowRight from '@coorpacademy/nova-icons/composition/navigation/arrow-right';
import Link from '../../atom/link';
import SocialLink from '../../atom/social-link';
import Provider from '../../atom/provider';
import CatalogSection from '../../atom/catalog-section';
import Picture from '../../atom/picture';
import style from './style.css';

const DisciplinePartners = (props, context) => {
  const {translate, skin} = context;

  const {authorTitle, authors = []} = props;

  const authorLabel = authorTitle || translate('author');
  const defaultColor = getOr('#00B0FF', 'common.primary', skin);
  const orangeAddColor = getOr('#FF7043', 'common.orangeAdd', skin);
  const authorsView = map.convert({cap: false})((author, index) => {
    const socialLinks = getOr([], 'socialLinks', author);
    const authorLogo = get('logo', author);
    const authorHref = get('href', author);
    const moreDetails = get('more', author);
    const autName = get('name', author);

    const linkView = (
      <div className={style.authorLink}>
        <a
          target={'_blank'}
          style={{
            color: defaultColor
          }}
          href={authorHref}
        >
          {authorHref}
        </a>
      </div>
    );
    const moreInfoView = (
      <div className={style.authorLink}>
        <a
          href={authorHref}
          style={{
            color: defaultColor
          }}
        >
          {moreDetails}
          <ArrowRight color={orangeAddColor} className={style.linkicon} />
        </a>
      </div>
    );

    const socialView = socialLinks.map((social, i) => (
      <div key={i} className={style.link}>
        <SocialLink {...social} />
      </div>
    ));

    const aNameView =
      autName &&
      <div className={style.authorName}>
        {autName}
      </div>;

    const logoView = authorLogo
      ? <div className={style.logoContainer}>
          <Link className={style.logoLink} href={authorLogo.href} target={'_blank'}>
            <Picture className={style.logo} src={authorLogo.src} />
          </Link>
        </div>
      : null;

    const authorContent = authorHref || aNameView || socialView
      ? <div className={style.authorContent}>
          {autName ? aNameView : null}
          {moreDetails ? moreInfoView : null}
          {!moreDetails && authorHref ? linkView : null}
          <div className={style.links}>
            {socialView}
          </div>
        </div>
      : null;

    return (
      <div key={index} className={style.authorWrapper}>
        {logoView}
        {authorContent}
      </div>
    );
  }, authors);

  return !isEmpty(authors)
    ? <div className={style.colDetails}>
        <CatalogSection title={authorLabel}>
          {authorsView}
        </CatalogSection>
      </div>
    : null;
};

DisciplinePartners.contextTypes = {
  translate: Provider.childContextTypes.translate,
  skin: Provider.childContextTypes.skin
};

DisciplinePartners.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      href: PropTypes.string,
      logo: PropTypes.shape({
        src: PropTypes.string,
        href: PropTypes.string
      }),
      socialLinks: PropTypes.array
    })
  ),
  authorTitle: PropTypes.string
};

export default DisciplinePartners;
