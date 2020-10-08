import React from 'react';
import PropTypes from 'prop-types';
import {get, isEmpty} from 'lodash/fp';
import Provider from '../../atom/provider';
import Cta from '../../atom/cta';
import Picture from '../../atom/picture';
import Link from '../../atom/link';
import style from './style.css';

const TeamsHeader = (props, context) => {
  if (isEmpty(props)) return null;
  const {logo = {}, links} = props;
  const {skin} = context;

  const logoUrl = get('src', logo) || get('images.logo', skin);

  const buildLinksView = () => {
    const ctas = links.map((cta, index) => {
      return <Cta {...cta} key={index} />;
    });
    return (
      <div className={style.linksView}>
        <div className={style.links}>{ctas}</div>
      </div>
    );
  };

  const teamsHeader = (
    <div data-name="teams-header" className={style.header}>
      <div className={style.logoWrapper}>
        <Link className={style.logoTeamsHeader} data-name="logo" href={logo.href}>
          <Picture src={logoUrl} />
        </Link>
      </div>
      {links ? buildLinksView() : null}
    </div>
  );

  return <div className={style.wrapper}>{teamsHeader}</div>;
};

TeamsHeader.propTypes = {
  logo: PropTypes.shape({
    src: PropTypes.string,
    href: PropTypes.string
  }),
  links: PropTypes.arrayOf(PropTypes.shape(Cta.propTypes))
};

TeamsHeader.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default TeamsHeader;
