import React from 'react';
import PropTypes from 'prop-types';
import {get, getOr, isEmpty, map, uniqueId} from 'lodash/fp';
import {
  NovaCompositionNavigationArrowRight as ArrowRight,
  NovaCompositionNavigationArrowDown as ArrowDown
} from '@coorpacademy/nova-icons';
import SocialLink from '../../atom/social-link';
import Provider from '../../atom/provider';
import CatalogSection from '../../atom/catalog-section';
import Picture from '../../atom/picture';
import style from './style.css';

const DisciplinePartners = (props, context) => {
  const {translate, skin} = context;

  const {authorTitle, authors = []} = props;

  const authorLabel = authorTitle || translate('author');
  const defaultColor = get('common.primary', skin);
  const authorsView = map.convert({cap: false})((author, index) => {
    const socialLinks = getOr([], 'socialLinks', author);
    const authorLogo = get('logo', author);
    const authorHref = get('href', author);
    const moreDetails = get('more', author);
    const autName = get('name', author);
    const authorToggleId = uniqueId('author-toggle-');
    const linkView = (
      <div className={style.authorLink}>
        <a
          target="_blank"
          rel="noopener noreferrer"
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
          <ArrowRight color={defaultColor} className={style.linkicon} />
        </a>
      </div>
    );

    const socialView = socialLinks.map((social, i) => (
      <div key={i} className={style.link}>
        <SocialLink {...social} />
      </div>
    ));

    const aNameView = autName ? (
      <div data-name="authorName" className={style.authorName}>
        {autName}
      </div>
    ) : null;

    const logoView = authorLogo ? (
      <div className={style.logoContainer}>
        <Picture className={style.logo} src={authorLogo.src} />
        <div className={style.arrowWrapper}>
          <ArrowDown className={style.arrow} height={14} whidth={14} />
        </div>
      </div>
    ) : null;

    const authorContent =
      authorHref || aNameView || socialView ? (
        <div className={style.authorContent}>
          {autName ? aNameView : null}
          {moreDetails ? moreInfoView : null}
          {!moreDetails && authorHref ? linkView : null}
          <div className={style.links}>{socialView}</div>
        </div>
      ) : null;

    return (
      <div key={index} className={style.authorWrapper}>
        <input
          type="checkbox"
          id={authorToggleId}
          className={style.toggle}
          defaultChecked={authors.length === 1 ? true : null}
        />
        <label htmlFor={authorToggleId}>{logoView}</label>
        {authorContent}
      </div>
    );
  }, authors);

  return !isEmpty(authors) ? (
    <div data-name="disciplinePartner" className={style.colDetails}>
      <CatalogSection title={authorLabel}>{authorsView}</CatalogSection>
    </div>
  ) : null;
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
