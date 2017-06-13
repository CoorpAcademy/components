import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import Provider from '../../../atom/provider';
import Link from '../../../atom/link';
import Loader from '../../../atom/loader';
import CardsList from '../../../molecule/dashboard/cards-list';
import PopinHeader from '../../../molecule/app-player/popin/popin-header';
import style from './style.css';

const Header = props => <PopinHeader {...props} />;

const Cards = props => {
  if (props.cards) {
    return <CardsList {...props} />;
  } else {
    return <Loader />;
  }
};

const Footer = ({title, href, color}) => (
  <Link
    style={{
      color
    }}
    href={href}
    className={style.footer}
  >
    {title}
  </Link>
);

const PopinEnd = (props, context) => {
  const {header, recommendation, footer} = props;
  const {skin} = context;
  const primary = getOr('#f0f', 'common.primary', skin);

  return (
    <div className={style.wrapper}>
      <Header {...header} />
      <Cards {...recommendation} />
      <Footer color={primary} {...footer} />
    </div>
  );
};

PopinEnd.contextTypes = {
  skin: Provider.childContextTypes.skin
};

PopinEnd.propTypes = {
  header: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    fail: PropTypes.bool,
    stars: PropTypes.string,
    rank: PropTypes.string,
    cta: PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      href: PropTypes.url
    })
  }),
  footer: PropTypes.shape({
    title: PropTypes.string,
    href: PropTypes.url
  }),
  recommendation: PropTypes.shape(CardsList.propTypes)
};

export default PopinEnd;
